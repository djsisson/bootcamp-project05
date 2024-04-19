const db = import.meta.env.VITE_DATABASE_URL;
const ol_search = "https://openlibrary.org/search.json?title=";
const ol_Fields = "&fields=key,title,author_name,cover_i,first_publish_year&limit=20&sort=rating"
const ol_cover = "https://covers.openlibrary.org/b/id/";
let g_user = { user_id: 0, name: "", age: 0, email: "" };
let g_books = [];
let g_Genres = [];
let g_CurrentBook = { book_id: 0 };
let g_Reviews = [];
let g_CurrentReview = { review_id: 0 };
let g_Favourites = [];

function saveSettings() {
  localStorage.setItem("BookClub", JSON.stringify(g_user));
}

function loadSettings() {
  const x = JSON.parse(localStorage.getItem("BookClub")) || g_user;
  g_user = x
}

function getUser() {
  return g_user;
}

function setUser(newUser) {
  g_user = newUser;
  saveSettings();
}

function getBooks() {
  return g_books;
}

function setBooks(newBooks) {
  g_books = newBooks;
}

function getReviews() {
  return g_Reviews;
}

function setReviews(newReviews) {
  g_Reviews = newReviews;
}

function getGenres() {
  return g_Genres;
}

function setGenres(newGenres) {
  g_Genres = newGenres;
}

function getCurrentBook() {
  return g_CurrentBook;
}

function setCurrentBook(book) {
  g_CurrentBook = book;
}

function getCurrentReview() {
  return g_CurrentReview;
}

function setCurrentReview(newReview) {
  g_CurrentReview = newReview;
}

function getFavourites() {
  return g_Favourites;
}

function setFavourites(newFavourites) {
  g_Favourites = newFavourites;
}

export {
  db,
  ol_cover,
  ol_search,
  ol_Fields,
  getGenres,
  setGenres,
  setUser,
  getBooks,
  getUser,
  setBooks,
  loadSettings,
  getCurrentBook,
  setCurrentBook,
  getCurrentReview,
  setCurrentReview,
  getReviews,
  setReviews,
  getFavourites,
  setFavourites,
};
