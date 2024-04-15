import Database from "better-sqlite3";
import { faker } from "@faker-js/faker";
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
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        genre_id INTEGER REFERENCES genres (genre_id)
                ON UPDATE RESTRICT
                ON DELETE RESTRICT,
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
}

startDB();
