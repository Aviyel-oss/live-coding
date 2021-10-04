const http = require("http"); //

const server = http.createServer((req, res) => {
  //   console.log(res);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server</title></head>");
  res.write("<body><h2>Welcome to the Internet</h2></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
