//กำหนดค่าเริ่มต้นให้กับ parameter
const addUser = (name, last, city="ขอนแก่น") => {
    return name + last + " city = " + city
}

console.log(addUser("ก้อง", "รักสยาม", "กรุงเทพ"))
console.log(addUser("โจโจ้", "ทองคำ"))