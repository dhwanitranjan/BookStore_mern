import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route to save a new book (create)
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send title, author and published year.",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// Route to get all books from db
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      data: books,
      totalBooks: books.length,
    });
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// Route to get a book by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// Route to update a book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send title, author and published year.",
      });
    }
    const { id } = request.params;
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.findByIdAndUpdate(id, newBook);

    if (!book) return response.status(404).json({ message: "Book not found" });
    return response.status(200).send(book);
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

// Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) return response.status(404).json({ message: "Book not found" });
    return response
      .status(200)
      .json({ message: `Book with id ${id} deleted successfully` });
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});

export default router;
