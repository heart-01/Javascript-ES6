class Car {
  constructor(engine) { // รับ Dependency ที่เป็น Class engine เข้ามา
    this.engine = engine;
  }

  // Method ใน Class Car ชื่อ start
  start = () => {
    this.engine.start(); // เรียกใช้ Method start ใน Class ของ engine ที่ถูก ฉีด Dependency เข้ามา
  };
}

export default Car;
