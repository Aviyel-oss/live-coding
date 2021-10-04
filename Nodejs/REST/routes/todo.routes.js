const express = require("express");

const router = express.Router();

const {
  listAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller.js");

router.get("/", listAllTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
