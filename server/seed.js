import Database from "better-sqlite3";
import { faker } from "@faker-js/faker";
const db = new Database("database.db");

function createTables() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS genres (
        genre_id INTEGER PRIMARY KEY,
        genre TEXT NOT NULL UNIQUE
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

function startDB() {
  createTables();
  insertGenres();
}

startDB()