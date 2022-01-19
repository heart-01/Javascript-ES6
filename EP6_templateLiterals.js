//Template Literals การต่อ String

const name = "Siwat"
const last = "Jermwatthana"
const city = "Bangkok"

//แบบเดิม
const all = "Name :"+ name + " Last :" + last + " City :" + city
const allNew = "Name :"+ name + "\nLast :" + last + "\nCity :" + city

console.log(all)
console.log(allNew)

//แบบใหม่
const allName1 = `Name: ${name} Last: ${last} City: ${city}`
const allName2 = `Name: ${name} 
Last: ${last} 
City: ${city}`

console.log(allName1)
console.log(allName2)