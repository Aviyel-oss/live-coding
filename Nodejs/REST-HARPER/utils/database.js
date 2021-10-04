const harperive = require("harperive");

const config = {
  harperHost: process.env.HARPER_HOST_INSTANCE,
  username: process.env.HARPER_USERNAME,
  password: process.env.HARPER_PASSWORD,
  schema: process.env.HARPER_SCHEMA,
};

// const db = new harperive.client(config);

const Client = harperive.Client;
const db = new Client(config);
