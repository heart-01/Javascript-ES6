var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString()); //conversion array to string //Banana,Orange,Apple,Mango

console.log(fruits.join(" - ")); // การเชื่อม value ใน array แล้วใส่ตัวคั่นกลางระหว่าง array เป็น - //Banana - Orange - Apple - Mango

console.log(fruits.pop()); //ลบข้อมูลตัวสุดท้ายของ array //Banana - Orange - Apple

console.log(fruits.push("Kiwi")); //เพิ่มข้อมูลส่วนท้ายใน array [ 'Banana', 'Orange', 'Apple', 'Kiwi' ]

console.log(fruits.shift()) //ลบข้อมูลตัวหน้าสุด ของ array //Orange,Apple,Mango

console.log(fruits.unshift("Lemon")) //เพิ่มข้อมูลส่วนหัวของ array [ 'Lemon', 'Banana', 'Orange', 'Apple' ]

console.log(fruits[0] = "Kiwi") //เปลี่ยนข้อมูลใน array ตาม index

console.log(fruits.splice(2, 0, "Lemon", "Kiwi")) //เพิ่มข้อมูลใน index 2 //ต้องการลบข้อมูลที่ต่อจาก index 2 กี่ตัว ถ้าใส่ 0 คือไม่ลบ //ข้อมูลที่ต้องการเพิ่ม

console.log(fruits.splice(0, 2)) //ลบข้อมูลใน index 0 จนถึง index 2  //["Apple", "Mango"]

console.log(fruits)

// ----------------------------------------------------------------------------
// การเชื่อม array
var arr1 = ["value1", "value2"]
var arr2 = arr1.concat(["value3", "value4", "value5"])

console.log(arr2) //[ 'value1', 'value2', 'value3', 'value4', 'value5' ]

// ----------------------------------------------------------------------------
// การเชื่อม array
var arr1 = ["value1", "value2"]
var arr2 = ["value3", "value4", "value5"]
var arr3 = ["value6", "value7"]

var concatArr = arr1.concat(arr2, arr3)

console.log(concatArr) // ["value1", "value2", "value3", "value4", "value5", "value6", "value7"]

// ----------------------------------------------------------------------------
// การตัด array แล้วสร้าง array ใหม่
var arr1 = ["value1", "value2", "value3", "value4", "value5"]

var myNewArr1 = arr1.slice(1) //ตัด array ตั้งแต่ index ที่ 1 //[ 'value2', 'value3', 'value4', 'value5' ]
var myNewArr2 = arr1.slice(1, 3) //ตัด array ตั้งแต่ index ที่ 1 ถึง index ที่ 3
console.log(myNewArr2) //[ 'value2', 'value3' ]

// ----------------------------------------------------------------------------
// แปลง string to array
let str = "How are you doing today?";
const myArr1 = str.split(" "); //[ 'How', 'are', 'you', 'doing', 'today?' ]
const myArr2 = str.split(" ", 3); //[ 'How', 'are', 'you' ]
const myArr3 = str.split("o"); //[ 'H', 'w are y', 'u d', 'ing t', 'day?' ]
console.log(myArr3) 