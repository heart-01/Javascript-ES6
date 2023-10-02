const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(async (req, res) => {
  const filePath = path.join(__dirname, "/files/image_test.tif");
  const stat = fs.statSync(filePath);

  res.statusCode = 200;
  res.setHeader("Content-Type", "image/tif");
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Disposition", `attachment; filename="image.tif"`);

  //   const imageFile = await fs.promises.readFile(path.join(__dirname, "/files/image_test.tif"));
  // res.end(imageFile);

  const fileStream = fs.createReadStream(filePath);

  try {
    fileStream.pipe(res);
  } catch (err) {
    console.log(err);
  }
});

server.listen(3000, () => {
  console.log("server listen on port 3000");
});
