// Optional chaining (?) เป็นตัวดำเนินการที่ทำให้เราสามารถอ่านค่าใน Object ที่ซ้อนกันได้หลาย ๆ ชั้น ได้ง่ายมากขึ้น เขียนง่าย และทำให้โค้ดสั้นลง
// ถ้าในกรณีไม่มีค่าใน Object หรือ Function มันจะ Return เป็น Undefined แทน Error

//  Ex.1 เข้าถึงข้อมูลใน Object
let customer = {
    name: "Mew",
    details: {
        age: 19,
        location: "Ladprao",
        city: "bangkok"
    }
};
let customerCity = customer.details?.city;
console.log(customerCity); //bangkok

// ---------------------------------------------------------------

//  Ex.2 ใช้กับ Nullish Coalescing
let customer = {
    name: "Mew",
    details: {
        age: 19,
        location: "Ladprao",
        city: "bangkok"
    }
};
let customerName = customer.details?.name ?? "Unknown";
console.log(customerName); //Unknown

// ---------------------------------------------------------------

//  Ex.3 ใช้กับ Array
const obj1 = {
    arr1: [45, 46, 47, 48, 49],
    obj2: {
        arr2: [1, 2, 3, 4],
    }
}
console.log(obj1?.obj2?.arr2[1]); // 2

console.log(obj1?.arr1[5]); // undefined