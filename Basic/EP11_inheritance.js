//การสืบทอดคุณสมบัติ
class Admin {
    constructor(){
        console.log('Call Constructor')
    }

    isPermission(){
        console.log('Read Write Data From Database')
    }
}

class User extends Admin {
    constructor(name, age){
        super() //class ลูกใช้งาน constructor Class แม่
        this.name = name
        this.age = age
    }

    sayHi(){
        console.log("Hello = " + this.name + " Age = " + this.age)
    }
}

let user1 = new User('Siwat', 40)
user1.sayHi()
user1.isPermission()