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
      imglink: `${g.ol_cover}${data.covers[0]}-M.jpg`,
      summary: data.description || "",
    };
    if (newBook.summary != "") {
      newBook.summary = newBook.summary.value;
    } else {
      newBook.summary = "Description not available";
    }
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
                <p>${curBook.author}<p>
                <p>${curBook.summary}</p>
                
            </div>
        </div>
        <div class="ratings-reviews">
            <h2>Rating</h2>
            <p><p>
                <p>Rating ${curBook.rating || "No Rating"}<p>
                <p>Total Number of Ratings: ${curBook.ratingcount}</p>
            <h2>Comments</h2>
            <p>Comment: <span id="commentValue">${
              localStorage.getItem("bookComment") || "-"
            }</span></p>
            <button id="reviewButton" onclick="showPopup()">Leave a Review</button>
        </div>
    `;
}

async function loadReviews() {}

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
