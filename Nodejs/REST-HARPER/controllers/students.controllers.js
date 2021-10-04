const client = require("../utils/database.js");
require("dotenv").config();

const DB_SCHEMA = process.env.HARPER_SCHEMA;
const TABLE = "students";

//get all the students
exports.getAllStudent = async (req, res, next) => {
  try {
    const qry = `SELECT * FROM ${DB_SCHEMA}.${TABLE}`;
    const students = await client.query(qry);
    res.json(students);
  } catch (error) {
    console.error("Error fetching the student data", error);
    return res.status(500).json(error);
  }
};

// create a students

exports.createOneStudent = async (req, res, next) => {
  try {
    const user = await client.insert({
      table: TABLE,
      records: [
        {
          username: req.body.username,
          password: req.body.password,
          rollNumber: req.body.rollNumber,
        },
      ],
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

// get only one students

exports.getOneStudent = async (req, res, next) => {
  try {
    const qry = `SELECT * FROM ${DB_SCHEMA}.${TABLE} WHERE id = '${req.params.id}'`;
    const student = await client.query(qry);
    res.json(student);
  } catch (error) {
    console.error("Error while fetching the one student", error);
    return res.status(500).json(error);
  }
};

// delete a student

exports.deleteStudent = async (req, res, next) => {
  try {
    const qry = `DELETE FROM ${DB_SCHEMA}.${TABLE} WHERE id='${req.params.id}'`;
    const deleteStudent = await client.query(qry);
    res.json(deleteStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update the student
exports.updateStudent = async (req, res, next) => {
  try {
    const qry = await client.update({
      table: TABLE,
      records: [
        {
          id: req.params.id,
          username: req.body.username,
          password: req.body.password,
          rollNumber: req.body.rollNumber,
        },
      ],
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
