import * as g from "../scripts/globals.js";
import * as r from "../scripts/routes.js";

async function appStart() {
  g.loadSettings();
  await r.getUser();
  await r.getBookByKey(parseParamsKey());
  if (g.getCurrentBook().book_id != 0) {
    //its in db
    //loadreviews
  } else {
    await getBookFromOL();
    await r.newBook();
  }
  showBookDetails();
  await r.getReviews();
  loadReviews()
}

async function getBookFromOL() {
  const apiUrl = `https://openlibrary.org${g.getCurrentBook().book_key}.json`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch book details (HTTP status ${response.status})`
    );
  }
  await response.json().then((data) => {
    console.log(data);
    const newBook = {
      title: data.title,
      author: parseParamsAuthor(),
      book_key: parseParamsKey(),
      imglink: data.covers || "",
      summary: data.description || "",
    };
    if (newBook.imglink != ""){
        newBook.imglink = `${g.ol_cover}${data.covers[0]}-M.jpg`
    }
    if (newBook.summary != "") {
      newBook.summary = newBook.summary || newBook.summary.value;
    } else {
      newBook.summary = "Description not available";
    }
    console.log(newBook)
    g.setCurrentBook(newBook);
  });
}

function showBookDetails() {
  const bookDetailsContainer = document.getElementById("bookDetails");
  const curBook = g.getCurrentBook();
  console.log(curBook);
  bookDetailsContainer.innerHTML = `
        <div class="book-info">
            <img src="${curBook.imglink}" alt="${curBook.title} cover">
            <div>
                <h2>${curBook.title}</h2>
                <p>${curBook.author}</p>
                <p>${curBook.summary}</p>
                
            </div>
        </div>
        <div class="ratings-reviews">
            <h2>Rating</h2>
            <p><p>
                <p>Rating ${curBook.rating || "No Rating"}<p>
                <p>Total Number of Ratings: ${curBook.ratingcount}</p>
        </div>
    `;
}

async function loadReviews() {
    const bookDetailsContainer = document.getElementById("bookReviews");
  const curReviews = g.getReviews();
  bookDetailsContainer.innerHTML=""
  curReviews.forEach((review) => {
    const newReview = document.createElement("div")
    newReview.innerHTML = `
                <h2>${review.user}</h2>
                <p>${review.rating}</p>
                <div>${review.review}</div>
    `
    bookDetailsContainer.appendChild(newReview)
  })
}

function parseParamsKey() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookKey = urlParams.get("key");
  if (!bookKey) {
    window.location.replace("/");
  }
  return bookKey;
}

function parseParamsAuthor() {
  const urlParams = new URLSearchParams(window.location.search);
  const author = urlParams.get("author");
  return author;
}

appStart();

//todo

//display all reviews for book from database
//if user is logged in allow editing summary
//if user has posted a comment show their comment and rating in fields at top
//STRETCH show update or delete option
//otherwise leave them blank and allow to be added
//STRETCH if user is logged in show add to favourite button
