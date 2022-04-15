const loadData = async () => { //function loadData ทำงานแบบ async
    //try catch ไว้ดักจับเวลามีการ error ของ code ใน try
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const res = await fetch(url); //await ให้รอทำงานจนกว่าจะ fetch เสร็จถึงจะทำงานถัดไป //fetch เป็นมาตราฐานในการร้องขอข้อมูลจาก Server เหมือน Ajax 
        if (res.ok) //res.ok มาจากการ call API
        {
            const data = await res.json(); // แปลงข้อมูลที่ได้เป็น json
            console.log(data); // แสดงข้อมูล JSON จาก data
            console.log(res.status);
        }else{
            console.log(res.status); //แสดง error status เมื่อไม่สามารถ Call API ได้
        }
        
    } catch (err) {
        console.log(err);
    }
    
}

loadData(); //เรียกใช้ function loadData