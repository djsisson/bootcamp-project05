import * as g from "./scripts/globals.js";
import * as r from "./scripts/routes.js";

async function appStart() {
  g.loadSettings();
  await r.getUser();
  await r.getAllGenres();
  addGenres();
  document
    .getElementById("searchButton")
    .addEventListener("click", function (e) {
      searchOLBooks();
    });
  await r.getBookSearch("").then((x) => addBooks());
  document
    .getElementById("clearButton")
    .addEventListener("click", async (e) => {
      await r.getBookSearch("").then((x) => addBooks());
    });
  addSearchLinks();
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

function addSearchLinks() {
  document
    .getElementById("search-bio")
    .addEventListener("click", async (e) => {
      await searchOLBooks("*", "autobiography");
    });
    document
    .getElementById("search-scifi")
    .addEventListener("click", async (e) => {
      await searchOLBooks("*", "sci-fi");
    });
    document
    .getElementById("search-horror")
    .addEventListener("click", async (e) => {
      await searchOLBooks("*", "horror");
    });
    document
    .getElementById("search-romance")
    .addEventListener("click", async (e) => {
      await searchOLBooks("*", "romance");
    });
    document
    .getElementById("search-comedy")
    .addEventListener("click", async (e) => {
      await searchOLBooks("*", "comedy");
    });
    document
    .getElementById("search-drama")
    .addEventListener("click", async (e) => {
      await searchOLBooks("*", "drama");
    });
}

async function searchOLBooks(searchvalue = "", categoryvalue = false) {
  let searchInput = document.getElementById("searchInput").value;
  if (searchvalue != "") {
    searchInput = searchvalue;
  }
  let categoryFilter = document.getElementById("categoryFilter").value;
  if (categoryvalue) {
    categoryFilter = categoryvalue;
  }
  if (searchInput == "") {
    return;
  }
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
      year: x.first_publish_year || "",
    }));
    newBooks.forEach((x) => {
      if (x.author.length == 0) {
        x.author = "Unknown Author";
      } else {
        x.author = x.author[0];
      }
      if (x.imglink != "") {
        x.imglink = `${g.ol_cover}${x.imglink}-M.jpg`;
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
    if (book.imglink == "") return;
    const title = book.title;
    const authors = book.author;
    const coverUrl = book.imglink;
    const details = book.year || "";
    const bookElement = document.createElement("div");
    bookElement.addEventListener("click", (e) => {
      window.location.href = `book/?key=${book.book_key}&author=${book.author}&img=${book.imglink}`;
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
