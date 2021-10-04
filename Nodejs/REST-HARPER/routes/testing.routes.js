const controller = require("../controllers/testing.controllers.js");
const express = require("express");

const router = express.Router();

router.get("/appInfo", controller.getAppTestInfo);

module.exports = router;
