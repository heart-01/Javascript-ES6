// Spread Operator จะเป็นการกระจายค่าจาก array ต้นทางไป ที่ array ปลายทาง

//Array
const name = ['John', 'Jane', 'Joe']
console.log(...name) //John Jane Joe

let fruit = ['มะม่วง', 'แตงโม']
console.log(fruit) //[ 'มะม่วง', 'แตงโม' ]

let newFruit = [...fruit, 'ทุเรียน', 'มังคุด']
console.log(newFruit) //[ 'มะม่วง', 'แตงโม', 'ทุเรียน', 'มังคุด' ]

let allFruit = [...newFruit, ...fruit]
console.log(allFruit)

//Object
let product = { name:'ทุกรียน', price:200 }
console.log(product) //{ name: 'ทุกรียน', price: 200 }

let newProduct = { ...product, category:'ผลไม้' }
console.log(newProduct) //{ name: 'ทุกรียน', price: 200, category: 'ผลไม้' }

let newPrice = { ...newProduct, price:500 } //update value Object ให้แก้ที่ key นั้น
console.log(newPrice) //{ name: 'ทุกรียน', price: 500, category: 'ผลไม้' }