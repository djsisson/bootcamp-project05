// Sample data
const favoriteBooks = [
    { title: "Book 1", coverUrl: "cover1.jpg" },
    { title: "Book 2", coverUrl: "cover2.jpg" },
    { title: "Book 3", coverUrl: "cover3.jpg" }
];

const comments = [
    { book: "Book 1", comment: "Comment 1" },
    { book: "Book 2", comment: "Comment 2" },
    { book: "Book 3", comment: "Comment 3" }
];

const currentlyReading = [
    { title: "Book 4", coverUrl: "cover4.jpg" },
    { title: "Book 5", coverUrl: "cover5.jpg" }
];

// Function to display favorite books
function displayFavoriteBooks() {
    const favoriteBooksContainer = document.getElementById("favoriteBooks");
    favoriteBooksContainer.innerHTML = "";
    favoriteBooks.forEach(book => {
        const bookElement = createBookElement(book);
        const removeButton = createButton("Remove Favorite", () => removeFavorite(book));
        bookElement.appendChild(removeButton);
        favoriteBooksContainer.appendChild(bookElement);
    });
}

// Function to remove favorite book
function removeFavorite(book) {
    // Logic to remove the book from favorites
    console.log(`Removing ${book.title} from favorites...`);
}

// Function to display comments
function displayComments() {
    const commentsContainer = document.getElementById("comments");
    commentsContainer.innerHTML = "";
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });
}

// Function to create comment element
function createCommentElement(comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("item");
    commentElement.textContent = comment.comment;
    const editButton = createButton("Edit", () => editComment(comment));
    const deleteButton = createButton("Delete", () => deleteComment(comment));
    commentElement.appendChild(editButton);
    commentElement.appendChild(deleteButton);
    return commentElement;
}

// Function to edit comment
function editComment(comment) {
    // Logic to edit the comment
    console.log(`Editing comment: ${comment.comment}`);
}

// Function to delete comment
function deleteComment(comment) {
    // Logic to delete the comment
    console.log(`Deleting comment: ${comment.comment}`);
}

// Function to display currently reading books
function displayCurrentlyReading() {
    const currentlyReadingContainer = document.getElementById("currentlyReading");
    currentlyReadingContainer.innerHTML = "";
    currentlyReading.forEach(book => {
        const bookElement = createBookElement(book);
        const removeButton = createButton("Remove", () => removeCurrentlyReading(book));
        bookElement.appendChild(removeButton);
        currentlyReadingContainer.appendChild(bookElement);
    });
}

// Function to remove currently reading book
function removeCurrentlyReading(book) {
    // Logic to remove the book from currently reading
    console.log(`Removing ${book.title} from currently reading...`);
}

// Function to create book element
function createBookElement(book) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("item");
    const img = document.createElement("img");
    img.src = book.coverUrl;
    img.alt = book.title;
    const title = document.createElement("p");
    title.textContent = book.title;
    bookElement.appendChild(img);
    bookElement.appendChild(title);
    return bookElement;
}

// Function to create button
function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

// Function to initialize user profile
function initUserProfile() {
    displayFavoriteBooks();
    displayComments();
    displayCurrentlyReading();
}

// Initialize user profile
initUserProfile();
