const axios = require('axios');

// * API แบบที่ 1 เรียก API ใน function main เลย
/* function main() {
    console.log('Begin');
    const url = 'http://api.aakhilv.me/fun/facts';
    axios.get(url).then((res)=>{
        console.log('result:', res.data);
        console.log('End');
    });
} */

// * API แบบที่ 2 แยก API เป็น function แยก แล้วใช้ callback เรีกยใช้ function API แต่ถ้าเราใช้ Callback เรียกใช้งานหลาย  ๆ ครั้ง Code จะอ่านยากเรียกว่า Callback Hell เราจะใช้ async await มาแก้จุดนี้
/*
function getFact() {
    const url = 'http://api.aakhilv.me/fun/facts'
    return axios.get(url).then((res)=>{
        return res.data[0]
    })
}

function main() {
    console.log('Begin')
    getFact().then((res)=>{
        console.log('result 1 :', res);
        getFact().then((res)=>{
            console.log('result 2 :', res);
            getFact().then((res)=>{
                console.log('result 3 :', res);
                getFact().then((res)=>{
                    console.log('result 4 :', res);
                    getFact().then((res)=>{
                        console.log('result 5 :', res);
                        console.log('End');
                    })
                })
            })
        })
    })
}
*/

// * API แบบที่ 3 แยก API เป็น function แยก แล้วใช้ async await เรียก callback 
async function getFact() {
    const url = 'http://api.aakhilv.me/fun/facts'
    const res = await axios.get(url)

    return res.data[0]
}
    
async function main() {
    /*
    console.log('Begin');
    const res1= await getFact()
    console.log('result 1 : ', res1)
    const res2 = await getFact()
    console.log('result 2 : ', res2)
    const res3 = await getFact()
    console.log('result 3 : ', res3)
    const res4 = await getFact()
    console.log('result 4 : ', res4)
    const res5 = await getFact()
    console.log('result 5 : ', res5)
    console.log('End');
    */

    // * Call API ใช้ Loop แบบ async await
    /* console.time('getFactTimer');
    for (let i = 0; i < 5; i++) {
        const res = await getFact();
        console.log(`result no.${i}:`, res);
    }
    console.timeEnd('getFactTimer'); */

    // * Call API ใช้ Loop แบบ async await
    console.time('getFactTimer')
    const promises = []; // array เก็บข้อมูล call api ไว้แต่ยังไม่ส่งไป
    for (let i = 0; i < 5; i++) {
        promises.push(getFact()) // ข้อมูล call api เก็บไว้ใน array
    }

    const res = await Promise.all(promises) // สั่งให้ยิง request api ทั้งหมด ที่อยู่ใน array
    for (let i = 0; i < 5; i++) {
        console.log(`result no.${i+1}:`, res[i+1]) // แสดงข้อมูล callback ที่ได้หลังจากยิง request api จาก promise all
    }
    console.timeEnd('getFactTimer')
     
}

// เรียกใช้ main
main();