const connect = require("connect");
const app = connect();

// middleware
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const helloWorld = (req, res, next) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
};

const goodbyeWorld = (req, res, next) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye World!");
};

app.use(logger);
app.use("/", helloWorld);
app.use("/goodbye", goodbyeWorld);

app.listen(3000);
console.log("Server running at http://localhost:3000");
