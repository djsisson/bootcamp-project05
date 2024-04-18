import * as g from "./globals.js";

function startPage() {
  g.loadSettings();
  if (g.getUser().id == 0) {
    //not loggedin
  } else {
    //logged in
  }
}

async function getAllGenres() {
  try {
    const response = await fetch(`${g.db}genres`);
    if (response.status == 200) {
      const genres = await response.json();
      const newGenres = new Map(genres.map((x) => [x.genre_id, x.genre]));
      g.setGenres(newGenres);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  console.log(g.getUser())
  if (g.getUser().user_id==0) return
  try {
    const response = await fetch(`${g.db}users/${g.getUser().user_id}`);
    if (response.status == 200) {
      const currentUser = await response.json();
      g.setUser(currentUser);
      return true;
    } else if (response.status == 400) {
      g.setUser({ id: 0, name: "", age: 0, email: "" });
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

async function newUser() {
  try {
    const response = await fetch(`${g.db}users/new/`, {
      method: "POST",
      body: JSON.stringify(g.getUser()),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      g.setUser(await response.json());
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser() {
  try {
    const response = await fetch(`${g.db}users/${g.getUser().id}`, {
      method: "DELETE",
    });
    if (response.status == 200) {
      g.setUser({ id: 0, name: "", age: 0, email: "" });
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateUser() {
  try {
    const response = await fetch(`${g.db}users/${g.getUser().id}`, {
      method: "PUT",
      body: JSON.stringify(g.getUser()),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      const updatedUser = await response.json();
      g.setUser(updatedUser);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getBookById(bookid) {
  try {
    const response = await fetch(`${g.db}books/${bookid}`);
    if (response.status == 200) {
      const book = await response.json();
      g.setCurrentBook(book);
      return true;
    } else if (response.status == 400) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getBookByKey(bookkey) {
  try {
    const response = await fetch(`${g.db}books${bookkey}`);
    if (response.status == 200) {
      const book = await response.json();
      g.setCurrentBook(book);
      return true;
    } else if (response.status == 204) {
      g.setCurrentBook({ book_id: 0, book_key: bookkey });
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getBookSearch(search) {
  try {
    const response = await fetch(`${g.db}books/search/?search=${search}`);
    if (response.status == 200) {
      const books = await response.json();
      g.setBooks(books);
      return true;
    } else if (response.status == 400) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

async function newBook() {
  try {
    const response = await fetch(`${g.db}books/new/`, {
      method: "POST",
      body: JSON.stringify(g.getCurrentBook()),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      const book = await response.json();
      g.setCurrentBook(book);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteBook() {
  try {
    const response = await fetch(`${g.db}books/${g.getCurrentBook().book_id}`, {
      method: "DELETE",
    });
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateBook() {
  try {
    const response = await fetch(`${g.db}book/${g.getCurrentBook().book_id}`, {
      method: "PUT",
      body: JSON.stringify(g.getCurrentBook()),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      const updatedBook = await response.json();
      return updatedBook;
    }
  } catch (error) {
    console.log(error);
  }
}

async function addReview() {
  try {
    const response = await fetch(`${g.db}review/new/`, {
      method: "POST",
      body: JSON.stringify(g.getCurrentReview()),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status == 200) {
      const reviews = await response.json();
      g.setReviews(reviews);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateReview() {
  try {
    const response = await fetch(
      `${g.db}review/${g.getCurrentReview().review_id}`,
      {
        method: "PUT",
        body: JSON.stringify(g.getCurrentReview()),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status == 200) {
      const updatedReview = await response.json();
      g.setCurrentReview(updatedReview);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteReview() {
  try {
    const response = await fetch(
      `${g.db}review/${g.getCurrentReview().review_id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status == 200) {
      g.setCurrentReview({ review_id: 0 });
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getReviews() {
  try {
    const response = await fetch(`${g.db}review/${g.getCurrentBook().book_id}`);
    if (response.status == 200) {
      const reviews = await response.json();
      g.setReviews(reviews);
      return true;
    } else if (response.status == 400) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

async function addFavourite(bookid) {
  try {
    const response = await fetch(
      `${g.db}favourite/${g.getUser().user_id}/${bookid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status == 200) {
      const favourites = await response.json();
      g.setFavourites(favourites);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}
async function deleteFavourite() {
  try {
    const response = await fetch(
      `${g.db}favourite/${g.getUser().user_id}/${bookid}`,
      {
        method: "DELETE",
      }
    );
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}
async function getFavourites() {
  try {
    const response = await fetch(`${g.db}favourite/${g.getUser().user_id}`);
    if (response.status == 200) {
      const favourites = await response.json();
      g.setFavourites(favourites);
      return true;
    } else if (response.status == 400) {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllGenres,
  getUser,
  deleteUser,
  updateUser,
  newUser,
  getBookById,
  getBookByKey,
  deleteBook,
  updateBook,
  newBook,
  getBookSearch,
  addReview,
  deleteReview,
  updateReview,
  getReviews,
  addFavourite,
  deleteFavourite,
  getFavourites,
};
