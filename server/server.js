import express from "express";
import cors from "cors";
import * as query from "./query.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(403).send();
});

app.get("/genres", (req, res) => {
  try {
    res.status(200).json(query.getAllGenres());
  } catch (error) {
    res.status(500).send();
  }
});

app.get("/users/:userid(\\d+)", (req, res) => {
  try {
    const result = query.getUser(req.params.userid);
    if (result.length == 0) {
      res.status(400).send();
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.post("/users/new", (req, res) => {
  try {
    res.status(200).json(query.newUser(req.body));
  } catch (error) {
    res.status(400).send();
  }
});

app.delete("/users/:userid(\\d+)", (req, res) => {
  try {
    const result = query.deleteUser(req.params.userid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.put("/users/:userid(\\d+)", (req, res) => {
  let userid = {};
  Object.assign(userid, req.params, req.body);
  try {
    const result = query.updateUser(userid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).json(req.body);
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.post("/books/new", (req, res) => {
  try {
    res.status(200).json(query.addBook(req.body));
  } catch (error) {
    res.status(400).send();
  }
});

app.delete("/books/:bookid(\\d+)", (req, res) => {
  try {
    const result = query.deleteBook(req.params.bookid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.put("/books/:bookid(\\d+)", (req, res) => {
  let bookid = {};
  Object.assign(bookid, req.params, req.body);
  try {
    const result = query.updateBook(bookid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).json(req.body);
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.get("/books/:bookid(\\d+)", (req, res) => {
  try {
    const result = query.getBookById(req.params.bookid);
    if (result.length == 0) {
      res.status(400).send();
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.get("/books/works/:bookkey", (req, res) => {
  try {
    const result = query.getBookByKey(req.params.bookkey);
    if (result.length == 0) {
      res.status(204).send();
    } else {
      res.status(200).send(result[0]);
    }
  } catch (error) {
    console.log()
    res.status(400).send();
  }
});

//not needed
app.get("/books/genre/:genreid(\\d+)", (req, res) => {
  try {
    const result = query.getBooksByGenre(req.params.genreid);
    if (result.length == 0) {
      res.status(400).send();
    } else {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(400).send();
  }
});

//not needed
app.get("/books/search/", (req, res) => {
  try {
    const result = query.getBooksBySearch(req.query.search);
    res.status(200).send(result);
  } catch (error) {
    console.log(error)
    res.status(400).send();
  }
});

app.post("/review/new", (req, res) => {
  try {
    res.status(200).json(query.addReview(req.body));
  } catch (error) {
    res.status(400).send();
  }
});

app.delete("/review/:reviewid(\\d+)", (req, res) => {
  try {
    const result = query.deleteReview(req.params.reviewid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(400).send();
  }
});

app.put("/review/:reviewid(\\d+)", (req, res) => {
  let reviewid = {};
  Object.assign(reviewid, req.params, req.body);
  try {
    const result = query.updateReview(reviewid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).json(req.body);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send();
  }
});

app.get("/review/:bookid(\\d+)", (req, res) => {
  try {
    const result = query.getReviews(req.params.bookid);
    res.status(200).send(result);
  } catch (error) {
    console.log(error)
    res.status(400).send();
  }
});

app.post("/favourite/:userid(\\d+)/:bookid(\\d+)", (req, res) => {
  try {
    res
      .status(200)
      .json(query.addFavourite(req.params.userid, req.params.bookid));
  } catch (error) {
    res.status(400).send();
  }
});

app.delete("/favourite/:userid(\\d+)/:bookid(\\d+)", (req, res) => {
  try {
    const result = query.removeFavourite(req.params.userid, req.params.bookid);
    if (result.changes == 0) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  } catch (error) {
    console.log(error)
    res.status(400).send();
  }
});

app.get("/favourite/:userid(\\d+)", (req, res) => {
  try {
    const result = query.getFavourites(req.params.userid);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send();
  }
});

app.listen(8080, () => {
  console.log("App is running.");
});
