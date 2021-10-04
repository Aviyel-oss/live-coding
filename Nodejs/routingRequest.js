const http = require("http"); //

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/secondserver") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Server Page second</title></head>");
    res.write("<body><h2>Welcome to the Internet</h2></body>");
    res.write("</html>");
    res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server Page second</title></head>");
  res.write("<body><h2>Welcome to the Internet</h2></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
