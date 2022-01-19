// Nullish Coalescing (??)
//เป็นตัวดำเนินการตรรกะที่จะ Return ค่าทางขวามือ เมื่อทางซ้ายเป็น Null หรือ Undefined
const name1 = null ?? 'Oreo'
console.log(name1) //Oreo

// ----------------------------------------------------------------------------------

//OR (||)
//เป็นตัวดำเนินการตรรกะที่จะ Return ค่าทางขวามือหากทางซ้ายมือเป็นเท็จ (0, '', Nan, null, undefined)
let tu = null
let text = tu || 'stupid!'
console.log(text) // stupid!

// ----------------------------------------------------------------------------------

//การใช้ ?? ในกรณีอื่น สามารถใช้ร่วมกับ OR (||) และ AND(&&) ได้แต่ต้องใช้วงเล็ก () เพื่อจัดลำดับความสำคัญของตัวแปร
// Ex. OR(||)
let text = null
let y = (text || null) ?? "foo"
console.log(y) //foo

let text = 'test'
let y = (text || null) ?? "foo"
console.log(y) //test

// Ex. AND(&&)
let text1 = 'test'
let text2 = null
let x = (text1 && text2) ?? "foo"
console.log(x) //foo

let text1 = 'test1'
let text2 = 'test2'
let x = (text1 && text2) ?? "foo"
console.log(x) //test2