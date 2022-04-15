//function เขียนแบบปกติ
function sorwor1(a,b){
    return a+b
}

let result1 = sorwor1(200,50)
console.log(result) //250

// -----------------------------------------------------------------------
// การใช้ Arrow Function ใส่ { } เมื่อมีการทำงานมากกว่าการ return อย่างเดียว
const sorwor2 = (a,b) => { 
    console.log("Processing.....")
    return a+b
}

let result2 = sorwor2(200,50)
console.log(result2) //250

// -----------------------------------------------------------------------
// การใช้ Arrow Function โดยมีการ return ค่าอย่างเดียวให้ใช้แค่บรรทัดเดียว ไม่มี { } และไม่ต้องมีคำว่า return จะเรียกว่า single line
const sorwor3 = (a,b) => a+b

let result3 = sorwor3(250,50)
console.log(result3)

// -----------------------------------------------------------------------
// การใช้ Arrow Function รับค่า parameter a มาตัวเดียว ไม่จำเป็นต้องใส่ () และไม่ต้องมีคำว่า return 
const sorwor4 = a => a+200

let result4 = sorwor4(50)
console.log(result4)

// -----------------------------------------------------------------------
// การใช้ Arrow Function รับค่า parameter name มาตัวเดียว return Object
const student = name => ( { name: name, age: '10' } )

let result = student("Siwat")
console.log(result)
