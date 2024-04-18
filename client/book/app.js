import * as g from "../scripts/globals.js";
import * as r from "../scripts/routes.js";

async function appStart() {
  g.loadSettings();
  await r.getUser();
  isLoggedIn();
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
  loadReviews();
  formSetup();
  document
    .querySelector(".deletereview")
    .addEventListener("click", async (e) => {
      e.preventDefault()
      e.stopImmediatePropagation()
      await r.deleteReview().then(async (x) => {
        if (x == true) {
          await downloadReviews()
        }
      });
    });
}

async function downloadReviews() {
  await r.getBookByKey(parseParamsKey());
  showBookDetails();
  await r.getReviews().then(() => loadReviews());
}

function formSetup() {
  document
    .querySelector(".addreviewForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      g.setCurrentReview({
        user_id: g.getUser().user_id,
        book_id: g.getCurrentBook().book_id,
        review: e.target.reviewtext.value,
        review_id: g.getCurrentReview().review_id,
        rating: e.target.radioinputRating.value,
      });
      const hasAReview = document.querySelector(".submitreview").textContent;
      if (g.getCurrentReview().review_id != 0) {
        await r.updateReview().then(async (data) => {
          if (data == true) {
            await downloadReviews()
          }
        });
      } else {
        await r.addReview().then(async (data) => {
          await downloadReviews()
        });
      }
    });
}

function isLoggedIn() {
  if (g.getUser().id == 0) {
    document.querySelector(".notloggedin").style.display = "block";
  } else {
    document.querySelector(".addreviewForm").style.display = "block";
  }
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
    const newBook = {
      title: data.title,
      author: parseParamsAuthor(),
      book_key: parseParamsKey(),
      imglink: parseParamsImg(),
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
  document.title = curBook.title;
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
  bookDetailsContainer.innerHTML = "";
  
  // Create a div for grid layout
  const reviewGrid = document.createElement("div");
  reviewGrid.classList.add("review-grid");
  
  curReviews.forEach((review) => {
    const newReview = document.createElement("div");
    newReview.classList.add("review-card");
    newReview.innerHTML = `
        <h2 class="review-username">${review.user}</h2>
        <p class="review-rating">Rating: ${review.rating} star</p>
        <div class="review-content">${review.review}</div>
    `;
    reviewGrid.appendChild(newReview);
  });

  bookDetailsContainer.appendChild(reviewGrid);

  // Additional functionalities from the new version
  document.querySelector(".submitreview").textContent = "Add Review";
  document.querySelector(".deletereview").style.display = "none";
  curReviews.forEach((review) => {
    if (review.user_id == g.getUser().user_id) {
      const formReview = document.querySelector(".addreviewForm");
      formReview.reviewtext.value = review.review;
      formReview.radioinputRating.value = review.rating;
      document.querySelector(".submitreview").textContent = "Update Review";
      document.querySelector(".deletereview").style.display = "unset";
      g.setCurrentReview({
        user_id: g.getUser().user_id,
        book_id: g.getCurrentBook().book_id,
        review: review.review,
        review_id: review.review_id,
        rating: review.rating,
      });
    }
  });
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

function parseParamsImg() {
  const urlParams = new URLSearchParams(window.location.search);
  const author = urlParams.get("img");
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
