// Node.js จะมี Built-in Modules อยู่โดยไม่ต้องหา lib เพิ่ม
// ------------------------
// 1. File System (fs)
// 2. Path (path)
// 3. Operating System (os)
// 4. Events (events)
// 5. HTTP (http)
// ------------------------

// Path (path) หา path ของไฟล์ต่าง ๆ ที่อยู่ใน system ให้อัติโนมัติ
const path = require('path')

console.log(path.basename(__filename)) // ชื่อไฟล์ของไฟล์นี้ คือ index.js
console.log(path.dirname(__filename))  // ชื่อโฟเดอร์ไฟล์นี้ คือ index.js /Users/siwat/Desktop/Git-Repository/Javascript-ES6/Basic/built_in_modules
console.log(path.extname(__filename))  // ชื่อนามสกุลของไฟล์นี้ คือ .js
console.log(path.parse(__filename))    // return เป็น object ของ file จะมี key หลายอย่างที่เกี่ยวกับรายละเอียดของ file นี้
console.log(path.parse(__filename).base) // ดึง key object ของ parse

// File System (fs)
const fs = require('fs')

// สร้างไฟล์ใหม่ด้วย module fs
fs.writeFileSync(path.join(__dirname,'data.txt'), 'Hello Node JS')

// อ่านไฟล์ด้วย module fs
console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8'))

// Operating System (os)
const os = require('os')

console.log(os.cpus())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.type())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.networkInterfaces()['Wi-Fi'][3].address)