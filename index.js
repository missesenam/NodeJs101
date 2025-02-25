const http = require("http");

const handleAllRequests = (req, res) => {
  console.log("just received a request");
  const url = req.url;
  if (url === "/") {
    res.write("<h1>Welcome to my Node.js Server</h1>");
  } else if (url === "/about") {
    res.write("<h1>This is the About Page</h1>");
  } else if (url === "/contact") {
    res.write("<h1>Contact us at: <a>example@example.com</a>");
  } else {
    res.write("<h1>404 Page Not Found</h1>");
  }
  res.end();
};
const server = http.createServer(handleAllRequests);

server.listen(5000, "127.0.0.1", () => {
  console.log("the server is up and running");
});
