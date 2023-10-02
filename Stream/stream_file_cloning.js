const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(path.join(__dirname, "/files/home.txt"), "utf-8"); // สร้าง read stream จาก file home.txt

const writeStream = fs.createWriteStream(path.join(__dirname, "/files/cloned-home.txt"), "utf-8"); // สร้าง write stream ไปที่ file home_copy.txt

readStream.pipe(writeStream); // อ่านข้อมูลจาก read stream แล้วเขียนลงใน write stream

readStream.on("data", (chunk) => {
  console.log(chunk); // อ่านข้อมูลที่อยู่ใน pipe
});

readStream.push("data 1"); // ส่งข้อมูลเข้าไปใน pipe