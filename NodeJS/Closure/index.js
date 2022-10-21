const fs = require("fs");

const prefix = (pre) => (err, data) => console.log(`${pre} ${data}`)

const say = prefix("Say: ");
const shol = prefix("Shol: ");

fs.readFile("hello.txt", say);
fs.readFile("hello.txt", shol);