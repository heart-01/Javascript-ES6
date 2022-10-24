// ข้อดีของ IoC จะเป็นการเขียน code แบบย้อนกลับสามารถอ่านได้ง่าย จากตัวอย่าง Car จะไม่ถูกฟิกจาก code ของ Engine สามารถสลับ engine ได้เลยโดยที่ไม่ต้องไปยุ่งเกี่ยวกับ Class ของ Car ข้างในโดยใช้หลักการ DI มาใช้งาน
import Car from "./car.js";
import BenzeneEngine from "./benzene.js";
import DieselEngine from "./diesel.js";

const myCar1 = new Car(new BenzeneEngine());
myCar1.start();
const myCar2 = new Car(new DieselEngine());
myCar2.start();
