const Stream = require("stream");

const readStream = new Stream.Readable({
  read() {},
});

const writeStream = new Stream.Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk); // ส่ง buffer data ที่อ่านไม่ออกไปที่ writeStream เพิ่อให้อ่านออก
// });

// readStream.on("end", () => {
//   writeStream.end();
// });

readStream.pipe(writeStream); // ทำงานเหมือนกับ readStream event data กับ end

// push data to stream object
readStream.push("data 1");
readStream.push("data 2");
