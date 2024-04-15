import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/genres", (req, res) => {
    try {
      res.status(200).json(query.getAllThemes());
    } catch (error) {
      res.status(500).send();
    }
  });
  app.get("/reactions", (req, res) => {
    try {
      res.status(200).json(query.getAllReactions());
    } catch (error) {
      res.status(500).send();
    }
  });
  
  app.get("/icons", (req, res) => {
    try {
      res.status(200).json(query.getAllIcons());
    } catch (error) {
      res.status(500).send();
    }
  });
  
  app.get("/users/random", (req, res) => {
    try {
      res.status(200).json(query.getRandomName());
    } catch (error) {
      res.status(500).send();
    }
  });