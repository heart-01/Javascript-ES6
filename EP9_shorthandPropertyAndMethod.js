//แบบเดิม
let name = "Siwat"
let last = "Jermwatthana"

let user = {
    name: name,
    last: last
}
console.log(user) //{ name: 'Siwat', last: 'Jermwatthana' }

//แบบใหม่ ใช้ในกรณีที่ชื่อ Property ต้องการให้ชื่อเหมือนตัวแปร และเก็บ value ของตัวแปรนั้นไว้ใน Object
let name = "Siwat"
let last = "Jermwatthana"

let user = { name, last }
console.log(user) //{ name: 'Siwat', last: 'Jermwatthana' }

// -----------------------------------------------------------------------

function user(name, last, age) {
    return { name, last, age }
}

console.log(user("Siwat", "Jermwatthana", 20)) //{ name: 'Siwat', last: 'Jermwatthana', age: 20 }