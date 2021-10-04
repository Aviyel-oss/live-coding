const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", TodoListSchema);

module.exports = Todo;
