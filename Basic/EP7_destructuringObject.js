//Destructuring Object การกระจายค่า Object ไปกำหนดให้กับตัวแปร

//แบบเดิม
var person = {
    name: "Siwat",
    skill: "java php python"
}

var name = person.name //Siwat
var skill = person.skill //java php python
console.log(`name = ${name} , skill = ${skill}`) //name = Siwat , skill = java php python

//แบบใหม่
var person = {
    name: "Siwat",
    skill: "java php python"
}

let {name, skill} = person //เอา value ที่อยู่ใน key มากระจายใส่ในตัวแปรแต่ต้องสร้างชื่อตัวแปรให้ตรงกะ key ของ object
console.log(`name = ${name} , skill = ${skill}`) //name = Siwat , skill = java php python
