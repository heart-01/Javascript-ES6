const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Hello World");
    res.write("Hello World");
    res.end("Hello World");
  })
  .listen(3030);

console.log("Server running at http://localhost:3030");
