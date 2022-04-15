/*
Asynchronous เป็นการทำงานไม่พร้อมกันของ function
Promise เป็นออบเจ็คที่ส่งค่ากลับเป็นผลสำเร็จ (Resolve) หรือผลล้มเหลว (Reject) ของการทำงานแบบ Asynchronous ในภาษา JavaScript มีส่วนสำคัญ 3 ตัว คือ
1. Pendding อยู่ในช่วงอยู่ระหว่างดำเนินงาน ตอบสนอง(fullfill) หรือ ปฏิเสธ (reject)
2. Fullfill การดำเนินงานเสร็จสิ้นสมบูรณ์
3. Reject ล้มเหลว
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{ //หน่วงเวลา 1 วินาที
        // resolve('done')
        reject('error')
    }, 1000)
})

myPromise.then( //หลังจากที่ Promise ทำงานเร็จก็จะมาทำงานที่ then
    result => alert(result), //call back function result ทำงาน แสดงค่าที่ส่งมาจาก resolve คือ done
    error => alert(error) //call back function error ทำงาน แสดงค่าที่ส่งมาจาก reject คือ error
) 