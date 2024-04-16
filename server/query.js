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

function newUser(user) {
  const newUser = db.prepare(
    `INSERT INTO users (name, age, email) VALUES (@name, @age, @email)`
  );
  try {
    const trans = db
      .transaction((x) => {
        const test = newUser.run(user);
        return test;
      })
      .apply();
    return db
      .prepare("SELECT * FROM users where user_id = (?)")
      .all(trans.lastInsertRowid)[0];
  } catch (error) {
    throw error;
  }
}

function deleteUser(user_id) {
  const user = db.prepare("DELETE FROM users WHERE user_id = (?)");
  try {
    const trans = db
      .transaction(() => {
        const test = user.run(user_id);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

function updateUser(user) {
  const updateUser = db.prepare(
    "UPDATE users SET name = (@name), age = (@age), email = (@email) WHERE user_id = (@userid)"
  );
  try {
    const trans = db
      .transaction(() => {
        const test = updateUser.run(user);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

function addBook(book) {
  const newBook = db.prepare(
    `INSERT INTO books (book_key, title, author, imglink, summary) VALUES (@bookkey, @title, @author, @imglink, @summary)`
  );
  try {
    const trans = db
      .transaction((x) => {
        const test = newBook.run(book);
        return test;
      })
      .apply();
    return db
      .prepare("SELECT * FROM books where book_id = (?)")
      .all(trans.lastInsertRowid)[0];
  } catch (error) {
    throw error;
  }
}

function updateBook(book) {
  const updateBook = db.prepare(
    "UPDATE books SET summary = (@summary) WHERE book_id = (@bookid)"
  );
  try {
    const trans = db
      .transaction(() => {
        const test = updateBook.run(book);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

function deleteBook(book_id) {
  const book = db.prepare("DELETE FROM books WHERE book_id = (?)");
  try {
    const trans = db
      .transaction(() => {
        const test = book.run(book_id);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

function getBookByKey(book_key) {
  console.log(book_key)
  try {
    const book = db
      .prepare(
        "SELECT b.*, round(avg(r.rating), 2) rating, COUNT(r.rating) ratingcount FROM books as b LEFT JOIN reviews as r ON b.book_id = r.book_id WHERE b.book_key = (?) GROUP BY b.book_id"
      )
      .all(book_key)[0];
    return book;
  } catch (error) {
    throw error;
  }
}

function getBookById(book_id) {
  try {
    const book = db
      .prepare(
        "SELECT b.*, round(avg(r.rating), 2) rating, COUNT(r.rating) ratingcount FROM books as b LEFT JOIN reviews as r ON b.book_id = r.book_id WHERE b.book_id = (?) GROUP BY b.book_id"
      )
      .all(book_id)[0];
    return book;
  } catch (error) {
    throw error;
  }
}

//not needed
function getBooksByGenre(genre_id) {
  try {
    const books = db
      .prepare(
        "SELECT b.*, round(avg(r.rating), 2) rating, COUNT(r.rating) ratingcount FROM books as b LEFT JOIN reviews as r ON b.book_id = r.book_id WHERE genre_id = (?) GROUP BY b.book_id ORDER BY b.title ASC"
      )
      .all(genre_id);
    return books;
  } catch (error) {
    throw error;
  }
}
//not needed
function getBooksBySearch(search,) {
  try {
    const books = db.prepare(
      "SELECT b.*, round(avg(r.rating), 2) rating, COUNT(r.rating) ratingcount FROM books as b LEFT JOIN reviews as r ON b.book_id = r.book_id WHERE title LIKE (?) OR author LIKE (?) GROUP BY b.book_id ORDER BY b.title ASC"
    );
    db.all(`%${search}%`, `%${search}%`);
    return books;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function addReview(review) {
  const newReview = db.prepare(
    `INSERT INTO reviews (user_id, book_id, review, rating) VALUES (@userid, @bookid, @review, @rating)`
  );
  try {
    const trans = db
      .transaction((x) => {
        const test = newReview.run(review);
        return test;
      })
      .apply();
    return db
      .prepare("SELECT * FROM reviews where book_id = (?)")
      .all(review.book_id);
  } catch (error) {
    throw error;
  }
}

function updateReview(review) {
  const updateReview = db.prepare(
    "UPDATE reviews SET review = (@review), rating = (@rating) WHERE review_id = (@reviewid)"
  );
  try {
    const trans = db
      .transaction(() => {
        const test = updateReview.run(review);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

function deleteReview(review_id) {
  const review = db.prepare("DELETE FROM reviews WHERE review_id = (?)");
  try {
    const trans = db
      .transaction(() => {
        const test = review.run(review_id);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

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

function addFavourite(user_id, book_id) {
  const newFavourite = db.prepare(
    `INSERT INTO favourites (user_id, book_id) VALUES (? ,?)`
  );
  try {
    const trans = db
      .transaction((x) => {
        const test = newFavourite.run(user_id, book_id);
        return test;
      })
      .apply();
    return db
      .prepare("SELECT * FROM favourites where user_id = (?)")
      .all(user_id);
  } catch (error) {
    throw error;
  }
}

function removeFavourite(favourite_id) {
  const favourite = db.prepare(
    "DELETE FROM favourites WHERE fav_id = (?)"
  );
  try {
    const trans = db
      .transaction(() => {
        const test = favourite.run(favourite_id);
        return test;
      })
      .apply();
    return trans;
  } catch (error) {
    throw error;
  }
}

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
  getBooksBySearch,
  getBookByKey,
};
