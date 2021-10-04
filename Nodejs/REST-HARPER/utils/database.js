const harperive = require("harperive");
require("dotenv").config();

const configuration = {
  harperHost: process.env.HARPER_HOST_INSTANCE,
  username: process.env.HARPER_USERNAME,
  password: process.env.HARPER_PASSWORD,
  schema: process.env.HARPER_SCHEMA,
};

const db = new harperive.Client(configuration);

module.exports = db;
