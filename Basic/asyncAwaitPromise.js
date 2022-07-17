const loadData = async () => { //function loadData ทำงานแบบ async
    //try catch ไว้ดักจับเวลามีการ error ของ code ใน try
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const res = await fetch(url); //await ให้รอทำงานจนกว่าจะ fetch เสร็จถึงจะทำงานถัดไป //fetch เป็นมาตราฐานในการร้องขอข้อมูลจาก Server เหมือน Ajax 
        const data = await res.json(); // แปลงข้อมูล res ที่ได้เป็น json
        
        return data;
        
    } catch (err) {
        console.log(err);
    }
    
}

const data = loadData().then( data => console.log(data)); //เรียกใช้ function loadData และ console.log ข้อมูล data ที่ได้มาจาก function loadData
console.log(data); //แสดงให้เห็นว่ามีการเรียกใช้ Promise มาประยุกต์ใช้กับ async await


//เรียกใช้ function loadData แบบ IIFE
(async () =>{
    const data = await loadData();
    console.log(data);
})();

/*
    รูปแบบ IIFE ซึ่งจะทำให้ฟังก์ชันถูกเรียกใช้หรือเรียกใช้ทันที
    IIFE คืออะไร?
        IIFE (นิพจน์ฟังก์ชันที่เรียกใช้ทันที) คือ ฟังก์ชันที่ดำเนินการทันทีที่สคริปต์โหลดและหายไป
    ควรใช้ IIFE เมื่อใด?
        บางครั้งคุณทำให้ขอบเขตทั่วโลกก่อให้เกิดมลพิษโดยไม่ได้ตั้งใจโดยการตั้งชื่อเดียวกันให้กับตัวแปรและฟังก์ชันเป็นชื่อตัวแปรส่วนกลางและฟังก์ชันโดยไม่รู้ตัว ตัวอย่างเช่นเมื่อมีไฟล์ JavaScript 
        หลายไฟล์ในแอปพลิเคชันของคุณที่เขียนโดยนักพัฒนาหลายคนในช่วงเวลาหนึ่ง ดังนั้นในสถานการณ์เช่นนี้มีโอกาสสูงที่จะมีชื่อฟังก์ชันและตัวแปรเหมือนกันพิจารณาตัวอย่างต่อไปนี้ของไฟล์ JavaScript 
        สองไฟล์ที่แตกต่างกันซึ่งรวมอยู่ในหน้าเว็บเดียว

        ไฟล์index.js:
            var userName = "Bill";

            function display(name)
            {
                alert("index.js: " + name);
            }

            display(userName);


            var userName = "Steve";

            function display(name)
            {
                alert("app.js: " + name);
            }

            display(userName);

        IIFE แก้ปัญหานี้โดยมีขอบเขตของตัวเอง เป็นการ จำกัด ฟังก์ชันและตัวแปรให้กลายเป็นโกลบอล ด้วยเหตุนี้ฟังก์ชันและตัวแปรที่ประกาศภายใน IIFE จะไม่ก่อให้เกิดมลพิษต่อขอบเขตทั่วโลกแม้ว่าจะมีชื่อเดียวกันก็ตาม
        เพื่อแก้ปัญหาข้างต้นที่เรามีกับไฟล์ JavaScript สองไฟล์เราสามารถรวมโค้ดทั้งหมดไว้ในไฟล์ทั้งสองนี้ใน IIFE

        ดูตัวอย่างต่อไปนี้:
            (function () {
                var userName = "Steve";
                
                function display(name)
                {
                    alert("index.js: " + name);
                }

                display(userName);
            })();
    
    สรุป
        IIFE ไม่สร้างตัวแปรและฟังก์ชันส่วนกลางที่ไม่จำเป็น นอกจากนี้ยังช่วยในการจัดระเบียบรหัสและทำให้สามารถบำรุงรักษาได้ คุณสามารถเรียนรู้เพิ่มเติมได้จากเอกสารMozilla
*/