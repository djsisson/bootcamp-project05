// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the search button element
    const searchButton = document.getElementById('searchButton');

    // Attach event listener to the search button
    searchButton.addEventListener('click', function() {
        searchBooks();
    });
});

async function searchBooks() {
    const searchInput = document.getElementById('searchInput').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchResults = document.getElementById('searchResults');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Construct URL with category filter
    let apiUrl = `http://openlibrary.org/search.json?title=${searchInput}`;
    if (categoryFilter) {
        apiUrl += `&subject=${categoryFilter}`;
    }

    // Fetch data from Open Library API
    const response = await fetch (apiUrl + "&limit=10&sort=rating");
    const data = await response.json();

    // Display search results
    data.docs.forEach(book => {
        const title = book.title;
        const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
        const coverUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const details = book.publish_date ? `Published: ${book.publish_date}` : '';
        console.log(book.key)

        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${coverUrl}" alt="${title} cover">
            <div class="book-details">
                <h2>${title}</h2>
                <p>By: ${authors}</p>
                <p>${details}</p>
            </div>
        `;
        searchResults.appendChild(bookElement);
    });

    // Get all book elements
const books = document.querySelectorAll('.book');

// Attach click event listener to each book
books.forEach(book => {
    book.addEventListener('click', function() {
        const bookKey = book.getAttribute('data-key');
        window.location.href = `book/index.html?key=works${bookKey}`;
    });
});

}
