/*
arrow function juga bisa kita gunakan sebagai object method
namun perlu diketahui, arrow function tidak bisa digunakan untuk mengakses arguments object,
function generator, kata kunci this dan kata kunci super
jadi pastikan gunakan arrow function hanya memang ketik kita tidak butuh fitur2 diatas
*/
//arrow function di object method
const person = {
    name: "John",
    sayHello: (name)=> {
        console.log(`Hello ${name}`)
    }
};
person.sayHello("bajingan");

