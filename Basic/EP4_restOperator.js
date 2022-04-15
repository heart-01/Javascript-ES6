//Rest Operator คือ ... การส่งตัว array parameter เข้ามาทำงานใน function เพื่อให้สามารถรับค่า parameter ได้แบบ dynamic ไม่จำกัดจำนวน parameter

const addUser = (name, last, ... city) => {
    return name + " " + last + " " + city
}

console.log(addUser("ก้อง", "รักสยาม", "กรุงเทพ"))
console.log(addUser("ก้อง", "รักสยาม", "กรุงเทพ", "ขอนแก่น"))

// -----------------------------------------------------------------------
//ดึงข้อมูล Rest Operator  รับข้อมูล array parametar message และดึงข้อมูลมาทีละตัว

//.map()
const addMessage = (first, ... message) => {
    return message.map( value => first + value ) //.map() โดยหน้าที่ของมันคือการวนค่าทุกค่าใน array ตาม function ที่เราต้องการ และทำการสร้าง array ใหม่ออกมาพร้อมกับค่าใหม่
}
console.log(addMessage("Hello", "JS", "React")) //[ 'HelloJS', 'HelloReact' ]

//.filter()
const addNumber = (... number) => {
    //.filter() กรองค่าหรือฟิลเตอร์ค่าออกมาตามเงื่อนไขที่เราต้องการ โดย filter นั้นรับ array มาวนเหมือนกับ map แต่ว่าเราจะต้องมีการส่ง condition หรือเงื่อนไขว่าเราต้องการที่จะให้ return ค่าอะไรออกมา ซึ่ง filter ก็จะทำการสร้าง array ใหม่เช่นเดียวกัน
    return number.filter(value => value % 2 === 0) //return เมื่อเลขที่เก็บอยู่ใน array % กับ 2 แล้วเท่ากับ 0 จริง และเป็นชนิด int ด้วย
}
console.log(addNumber(1, 2, 3, 4, 5)) //[ 2, 4 ]

//.reduce() การนำค่าใน array มารวมกันให้เหลือเพียงค่าเดียวก่อนที่จะ return ออกมา
const addSum = (... number) => {
    return number.reduce((first, current) => first + current)
}
console.log(addSum(10, 20, 30, 40, 50)) //150