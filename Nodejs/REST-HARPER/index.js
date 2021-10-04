const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-Requested-with",
    "content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/testing", require("./routes/testing.routes.js"));
app.use("/students", require("./routes/students.routes.js"));

app.listen(PORT, () => {
  console.log(`App is currently running on http://localhost:${PORT}`);
});
