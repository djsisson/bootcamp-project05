// Fetch book details and display rating and comment
async function fetchBookDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const bookKey = urlParams.get('key');
        if (!bookKey) {
            throw new Error('Book key not found in URL parameter');
        }
        const apiUrl = `https://openlibrary.org${bookKey}.json`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch book details (HTTP status ${response.status})`);
        }
        const data = await response.json();
        console.log(data)
        document.getElementById('bookDetails').innerHTML = `<h2>${data.title}</h2><p>${data.description.value || data.description || 'Description not available'}</p>`;
        document.getElementById('bookRating').innerHTML = `Rating: <span id="ratingValue">${localStorage.getItem('bookRating') || '-'}</span>`;
        document.getElementById('bookComment').innerHTML = `Comment: <span id="commentValue">${localStorage.getItem('bookComment') || '-'}</span>`;
    } catch (error) {
        // console.error('Error fetching book details:', error.message);
    }
}

// Show review popup
function showPopup() {
    document.getElementById('reviewPopup').style.display = 'block';
}

// Close review popup
function closePopup() {
    document.getElementById('reviewPopup').style.display = 'none';
}

// Submit review
function submitReview() {
    const rating = document.getElementById('popupRating').value;
    const comment = document.getElementById('popupComment').value;
    localStorage.setItem('bookRating', rating);
    localStorage.setItem('bookComment', comment);
    document.getElementById('ratingValue').innerText = rating;
    document.getElementById('commentValue').innerText = comment;
    closePopup();
}

// Fetch book details on page load
document.addEventListener('DOMContentLoaded', function() {
    fetchBookDetails();
});
