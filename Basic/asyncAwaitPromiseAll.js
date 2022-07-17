/*
    ใน Promise All จะมีการใช้งานต่อเมื่อเราต้องการเรียก API หลายตัวพร้อมกันเพระาว่าในการใช้ await เราต้องรอ request ในแต่ละตัวให้เสร็จสิ้นก่อนถึงจะทำตัวถัดไปซึ่งจะทำให้เกิดปัญหาขึ้นได้
    เมื่อ request แต่ละตัวต้องรอให้โหลดเสร็จสิ้นผลที่เกิดขึ้นก็คือจะทำให้ตัวโปรแกรมของเราช้า ทีนี้เราจะใช้ Promise All ในการเรียนใช้แบบ parallel หรือคู่ขนาน
*/

const loadData = async () => { //function loadData ทำงานแบบ async
    //try catch ไว้ดักจับเวลามีการ error ของ code ใน try
    try {
        const url1 = "https://jsonplaceholder.typicode.com/todos/1";
        const url2 = "https://jsonplaceholder.typicode.com/todos/2";
        const url3 = "https://jsonplaceholder.typicode.com/todos/3";

        const res = await Promise.all([ //เรียกใช้ API หลายตัวพร้อมกัน
            fetch(url1),
            fetch(url2),
            fetch(url3),
        ]);

        const dataPromise = await res.map( res => res.json() ); // แปลงข้อมูลหลายตัวใน res ให้เป็น json
        const finalData = Promise.all(dataPromise);
        
        return finalData;
        
    } catch (err) {
        console.log(err);
    }
    
}

const data = loadData().then( data => console.log(data)); //เรียกใช้ function loadData และ console.log ข้อมูล data ที่ได้มาจาก function loadData
console.log(data); //แสดงให้เห็นว่ามีการเรียกใช้ Promise มาประยุกต์ใช้กับ async await


// --------------- ประยุกต์ใช้ async await โดยใช้ Promise all -----------------
async function runFoo() {
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    
    try {
        const res = await Promise.all([url1, url2, url3])
        for(const item of res) {
            console.log(item)
        }
    } catch (err) {
        console.log(err);
    }
}
