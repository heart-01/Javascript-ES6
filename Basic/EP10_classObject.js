//การสร้าง Object แบบ literals คือ ออบเจ็คที่เก็บข้อมูลในรูปแบบของ Key/Value หรือที่เรียกว่า Plain object
var user = {
    name: 'Siwat',
    age: 30,
    sayHi: function(){ return "Hello = "+this.name } 
}
console.log(user.sayHi()) //Hello = Siwat
// -----------------------------------------------------------------------

//แบบเดิม

    //การสร้าง Class
    function User(name, age){ //name, age จะถูกเรียกใช้ในตอนตั้งต้นสร้าง Object เป็น constructor
        //Property
        this.name = name
        this.age = age
    }
    //Method ใน Class User ชื่อ sayHi
    User.prototype.sayHi = function(){
        console.log("Hello = " + this.name + " Age = " + this.age)
    }

    //สร้าง Object ใน Class user
    var user1 = new User('Siwat', 20) //{ name: 'Siwat', age: 20 }
    console.log(user1.age)
    //เรียกใช้ Method ใน class User
    user1.sayHi() //Hello = Siwat Age = 20

// -----------------------------------------------------------------------

//แบบใหม่
    class User {
        constructor(name, age){
            this.name = name
            this.age = age
        }

        sayHi(){
            console.log("Hello = " + this.name + " Age = " + this.age)
        }
    }

    let user1 = new User('Siwat', 40)
    user1.sayHi()