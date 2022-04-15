//Computed Property Name การคำนวณการดำเนินการเกี่ยวกับตัว property

let food1 = { name: "Cake ส้ม", price: "200" }
let food2 = { "name": "Cake มะม่วง", "price": 250 }

// -----------------------------------------------------------------------
//ถ้าเราต้องการจะคำนวณให้กับตัว Property หรือ key เราจะทำแบบนี้ไม่ได้
/*
    let user = {
        user+1 : "Siwat",
        user+2 : "Prem"
    }
*/
let user = {
    ['user'+1*10] : "Siwat",
    ['user'+2*20] : "Prem"
}
console.log(user) //{ user10: 'Siwat', user40: 'Prem' }

// -----------------------------------------------------------------------
let name = "Cake"
let food = {
    [name]: `${name} มะม่วง`,
    food2: "Cake ส้ม"
}
console.log(food) //{ Cake: 'Cake มะม่วง', food2: 'Cake ส้ม' }

// -----------------------------------------------------------------------
let name = "Cake"
let menu = { 
    [name + 10*2]: name+'ส้ม',
    [name + 'Mix']: 'ผลส้ม'
}
console.log(menu) //{ Cake: 'Cakeส้ม', CakeMix: 'ผลส้ม' 
let { Cake20, CakeMix } = menu
console.log(Cake20)
console.log(CakeMix)