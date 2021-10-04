const http = require("http"); //

const routes = require("./routes.js");

const server = http.createServer(routes.handle);

server.listen(3000);
