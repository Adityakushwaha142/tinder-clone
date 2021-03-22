const connectionUrl =
  "mongodb+srv://admin:A9Rw2Thb5xj5SvTK@cluster0.nfza2.mongodb.net/tinder-db?retryWrites=true&w=majority";
import express from "express";
const app = express();

import Cards from "./db.js";

import cors from "cors";
import mongoose from "mongoose";
app.use(express.json());
app.use(cors());

app.post("/tinder/card", (req, res) => {
  const dbdata = req.body;

  Cards.create(dbdata, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.get("/delete", (req, res) => {
  Cards.remove({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 2424;
app.get("/", (req, res) => {
  res.send("hello world ");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
