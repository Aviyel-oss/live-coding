const express = require("express");
const controller = require("../controllers/" + "students" + ".controllers");

const router = express.Router();

router
  .get("/", controller.getAllStudent)
  .get("/:id", controller.getOneStudent)
  .post("/", controller.createOneStudent)
  .put("/:id", controller.updateStudent)
  .delete("/:id", controller.deleteStudent);

module.exports = router;
