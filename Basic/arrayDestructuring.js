//Destructuring แยกตัวแปรออกจาก Object และ Array

// แยก Variable ออกจาก Array
const arr = ["Rose", "Jenny", "Lisa", "Jisoo"]
const [a, b, c] = arr
console.log(c)

// แยก Variable ออกจาก Object
const person = {
    firstname: 'Prayut',
    lastname: 'Chan',
    age: 67
};
const {firstname, lastname, age} = person
console.log(firstname)

const {firstname: f, lastname: l, age: a} = person
console.log(a)

// -------------------------------------------------------

const user = {
    id: 1,
    info: {
        name: "oreo",
        age: 66
    }
}
const { id, info: { name, age } } = user;
console.log(age)

const { info: { name : userName, age: userAge } } = user;
console.log(userName, userAge)