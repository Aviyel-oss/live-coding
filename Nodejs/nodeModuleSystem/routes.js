const fs = require("fs"); //

const reqHandle = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("testing.txt", message);
    });
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
};

exports.handle = reqHandle;
