// ที่เป็น 3 เพราะว่าค่าสุดท้ายของ i จะเป็น 3 แล้วจึงจะหยุดก่อน 100 ms แล้ว var เป็น global scope วิธีแก้คือใช้ let แทน
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
