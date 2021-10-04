const http = require("http"); //
const fs = require("fs"); //

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("testing.txt", "YOLO WORLD");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Server Page second</title></head>");
  res.write("<body><h2>Welcome to the Internet</h2></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
