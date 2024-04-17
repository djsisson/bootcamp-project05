import * as g from "./scripts/globals.js";
import * as r from "./scripts/routes.js";

async function appStart() {
  g.loadSettings();
  await r.getUser();
  await r.getAllGenres();
  addGenres();
  document
    .getElementById("searchButton")
    .addEventListener("click", function () {
      searchOLBooks();
    });
    await r.getBookSearch("")
    console.log(g.getBooks())
    addBooks()
}

function addGenres() {
  const genreElement = document.getElementById("categoryFilter");
  genreElement.innerHTML = "";
  const optionElement = document.createElement("option");
  optionElement.value = "";
  optionElement.textContent = "All Categories";
  genreElement.appendChild(optionElement);
  g.getGenres().forEach((x) => {
    const optionElement = document.createElement("option");
    optionElement.value = x;
    optionElement.textContent = x;
    genreElement.appendChild(optionElement);
  });
}

async function searchOLBooks() {
  const searchInput = document.getElementById("searchInput").value;
  const categoryFilter = document.getElementById("categoryFilter").value;

  // Construct URL with category filter
  let apiUrl = `${g.ol_search}${searchInput}${g.ol_Fields}`;
  if (categoryFilter) {
    apiUrl += `&subject=${categoryFilter}`;
  }
  // Fetch data from Open Library API
  const response = await fetch(apiUrl);
  await response.json().then((data) => {
    const newBooks = data.docs.map((x) => ({
      book_key: x.key,
      title: x.title,
      author: x.author_name || [],
      imglink: x.cover_i || "",
      // imglink: `${g.ol_cover}${x.cover_i}-M.jpg` || "",
      year: x.first_publish_year || "",
    }));
    newBooks.forEach((x) => {
      if (x.author.length == 0) {
        x.author = "Unknown Author";
      } else {
        x.author = x.author[0];
      }
      if (x.imglink != "") {
        x.imglink =`${g.ol_cover}${x.imglink}-M.jpg`
      }
    });
    g.setBooks(newBooks);
    addBooks();
  });
}
function addBooks() {
  const searchResults = document.getElementById("searchResults");

  // Clear previous search results
  searchResults.innerHTML = "";

  g.getBooks().forEach((book) => {
    const title = book.title;
    const authors = book.author;
    const coverUrl = book.imglink;
    const details = book.year || "";
    console.log(book.imglink);
    const bookElement = document.createElement("div");
    bookElement.addEventListener("click", (e) => {
      window.location.href = `book/index.html?key=${book.book_key}&author=${book.author}`;
    });

    bookElement.classList.add("book");
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
}

appStart();
