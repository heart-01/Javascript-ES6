var price = 20 //var จะมองเป็นตัวแปรประเภท Global คือ ทั้งโปรแกรมจะมองเห็น
var fruit = 'มะม่วง'

if(price === 20){ // เครื่องหมาย === หรือ !== จะมีการเปรีบเทียบให้ตรงกันทั้งชนิดของข้อมูล (เช่นต้องเป็นตัวเลขเหมือนกัน) และค่าของมันด้วย โดยจะมีการเปรียบเทียบชนิดของตัวแปรก่อน ถ้าตัวแปรทั้งสองตัวเป็นชนิดเดียวกัน ถึงจะมีการเปรียบเทียบค่าของมัน
    var fruit = "ส้มโอ"
    console.log("in block", fruit) //ส้มโอ
}
console.log("out block", fruit) //ส้มโอ

// -----------------------------------------------------------------------

let price = 20 //let จะมองเป็นตัวแปรสิ้นสุดอยู่แค่ block
let fruit = 'มะม่วง'

if(price === 20){ // เครื่องหมาย === หรือ !== จะมีการเปรีบเทียบให้ตรงกันทั้งชนิดของข้อมูล (เช่นต้องเป็นตัวเลขเหมือนกัน) และค่าของมันด้วย โดยจะมีการเปรียบเทียบชนิดของตัวแปรก่อน ถ้าตัวแปรทั้งสองตัวเป็นชนิดเดียวกัน ถึงจะมีการเปรียบเทียบค่าของมัน
    let fruit = "ส้มโอ"
    console.log("in block", fruit) //ส้มโอ
}
console.log("out block", fruit) //มะม่วง

// -----------------------------------------------------------------------

const total = 100 //ค่าคงที่
total = 200 //Error ไม่สามารถเปลี่ยนแปลงค่าได้ เพราะว่าเป็นค่าคงที่

// ถ้าจะให้สามารถเปลี่ยนค่าได้เราต้องประกาศ const ให้เป็นตัวแปรประเภท Object
const person = { name: 'Siwat', last: 'Jermwatthana'}
person.name="John"
console.log(person) //John Jermwatthana