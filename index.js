const http = require("http");
const fs = require("fs");

const handleAllRequests = (req, res) => {
  console.log(`just received a request at ${req.url}`);

  const url = req.url;
  if (url === "/") {
    res.write("<h1>Welcome to my Node.js Server</h1>");
  } else if (url === "/about") {
    res.write("<h1>This is the About Page</h1>");
  } else if (url === "/contact") {
    res.write("<h1>Contact us at: <a>example@example.com</a>");
  } else if (url === "/services") {
    res.write(
      "<h1>We offer Web Development and Mobile App Development services</h1>"
    );
  } else if (url === "/time") {
    const currentTime = new Date().toLocaleTimeString();
    res.write(`<h1>The current server time is :${currentTime}</h1>`);
  } else if (url === "/home") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("<h1>Internal Server Error</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
    return;
  } else {
    res.write("<h1>404 Page Not Found</h1>");
  }
  res.end();
};
const server = http.createServer(handleAllRequests);

server.listen(5000, "127.0.0.1", () => {
  console.log("the server is up and running on 5000");
});
