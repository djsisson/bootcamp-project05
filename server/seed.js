import Database from "better-sqlite3";
import { faker } from "@faker-js/faker";
import * as b from "./books.js";

const db = new Database("database.db");
const g_userCount = 100;

function createTables() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS genres (
        genre_id INTEGER PRIMARY KEY,
        genre TEXT NOT NULL UNIQUE
    )
`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER,
        email TEXT
)
`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS books (
        book_id INTEGER PRIMARY KEY,
        book_key TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        imglink TEXT,
        summary TEXT
)
`);
  db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
        review_id INTEGER PRIMARY KEY,
        user_id INTEGER REFERENCES users (user_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE,
        book_id INTEGER REFERENCES books (book_id)
                ON UPDATE CASCADE
                ON DELETE CASCADE,
        review TEXT NOT NULL,
        rating INTEGER NOT NULL
)
`);
  db.exec(`
CREATE TABLE IF NOT EXISTS favourites (
    fav_id INTEGER PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id)
            ON UPDATE CASCADE
            ON DELETE CASCADE,
    book_id INTEGER REFERENCES books (book_id)
            ON UPDATE CASCADE
            ON DELETE CASCADE
)
`);
}

const genres = [
  `Fiction`,
  `Non-fiction`,
  `Mystery`,
  `Thriller`,
  `Romance`,
  `Science Fiction (Sci-Fi)`,
  `Fantasy`,
  `Historical Fiction`,
  `Horror`,
  `Biography`,
  `Autobiography`,
  `Memoir`,
  `Self-help`,
  `Travel`,
  `Poetry`,
  `Drama`,
  `Comedy`,
  `Satire`,
  `Young Adult (YA)`,
  `Children's Books`,
];

function insertGenres() {
  let sql = genres.map((item) => "(?)").join(", ");
  db.prepare(`INSERT INTO genres (genre) VALUES ${sql}`).run(...genres);
}

function insertUsers() {
  for (let i = 0; i < g_userCount; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    });
    db.prepare(`INSERT INTO users (name, age, email) VALUES (?, ?, ?)`).run(
      `${firstName} ${lastName}`,
      parseInt(Math.floor(Math.random() * 70) + 18),
      email
    );
  }
}

function insertBooks() {
  b.books.forEach((x) => {
    db.prepare(
      `INSERT INTO books (title, author, imglink, summary, book_key) VALUES (?, ?, ?, ?, ?)`
    ).run(x.title, x.author, x.imglink, x.summary, x.genreid + x.title);
  });
}

async function findBookKey() {
  for (let x of b.books) {
    const apiUrl = `https://openlibrary.org/search.json?title=${x.title}&author=${x.author}&fields=key,title,author_name&limit=10`;
    const response = await fetch(apiUrl);
    if (response.status == 200) {
      const data = await response.json().then((book) => {
        if (book.docs.length != 0) {
          console.log(x.title, x.author, book.docs[0].key);
        }
        
      });   
    }
    break;
  }
}

function generateReviews() {
  const books = db.prepare(`SELECT * FROM books`).all();
  const users = db.prepare(`SELECT * FROM users`).all();
  books.forEach((x) => {
    users.forEach((user) => {
      if (Math.random() < 0.1) {
        db.prepare(
          `INSERT INTO reviews (user_id, book_id, review, rating) VALUES (?, ?, ?, ?)`
        ).run(
          user.user_id,
          x.book_id,
          faker.lorem.sentences({ min: 1, max: 3 }, "\n"),
          Math.floor(Math.random() * 5) + 1
        );
      }
    });
  });
}

function dropTables() {
  db.exec(`DROP TABLE IF EXISTS favourites`);
  db.exec(`DROP TABLE IF EXISTS reviews`);
  db.exec(`DROP TABLE IF EXISTS books`);
  db.exec(`DROP TABLE IF EXISTS users`);
  db.exec(`DROP TABLE IF EXISTS genres`);
}

function startDB() {
  dropTables();
  createTables();
  insertGenres();
  insertUsers();
  insertBooks();
  generateReviews();
}

// startDB();
// findBookKey();
