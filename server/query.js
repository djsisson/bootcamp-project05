import Database from "better-sqlite3";

const db = new Database("database.db");

function getAllGenres() {
  try {
    const genres = db.prepare("SELECT * FROM genres").all();
    return genres;
  } catch (error) {
    throw error;
  }
}

function getUser(user_id) {
  try {
    const user = db
      .prepare("SELECT * FROM users WHERE user_id = (?)")
      .all(user_id)[0];
    return user;
  } catch (error) {
    throw error;
  }
}

function newUser(name, age, email) {}

function deleteUser(user_id) {}

function updateUser(userid, user) {}

function addBook(title, genre, author, imglink, summary) {}

function updateBook() {}

function deleteBook() {}

function getBookById(book_id) {
  try {
    const book = db
      .prepare("SELECT * FROM books WHERE book_id = (?)")
      .all(book_id)[0];
    return book;
  } catch (error) {
    throw error;
  }
}

function getBooksByGenre(genre_id) {
  try {
    const books = db
      .prepare("SELECT * FROM books WHERE genre_id = (?)")
      .all(genre_id);
    return books;
  } catch (error) {
    throw error;
  }
}

function getBooksBySearch(searcg)

function addReview(book_id, user_id, review, rating) {}

function updateReview() {}

function deleteReview() {}

function getReviews(book_id) {
  try {
    const reviews = db
      .prepare("SELECT * FROM reviews WHERE book_id = (?)")
      .all(book_id);
    return reviews;
  } catch (error) {
    throw error;
  }
}

function addFavourite(user_id, book_id) {}

function removeFavourite() {}

function getFavourites(user_id) {
  try {
    const favourites = db
      .prepare("SELECT * FROM favourites WHERE user_id = (?)")
      .all(user_id);
    return favourites;
  } catch (error) {
    throw error;
  }
}

export {
  getAllGenres,
  getUser,
  newUser,
  deleteUser,
  updateUser,
  addBook,
  updateBook,
  deleteBook,
  getBookById,
  getBooksByGenre,
  addReview,
  updateReview,
  deleteReview,
  getReviews,
  addFavourite,
  removeFavourite,
  getFavourites,
};
