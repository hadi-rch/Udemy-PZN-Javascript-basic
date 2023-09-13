/*
pada tipe data object kita sudah membahas tentang property di object
karena sebenarnya function juga merupakan salah satu tipe data, jadi functionpun sebenarnya
bisa ditambahkan sebagai property diobject
cara pembuatannya pun sama dengan function sebagai value
function di object kadang disebut juga sebagai object method
*/
const person = {
    name: "jhon",
    sayHello: function (name) {
        console.log(`Hello ${name}`);
    }
};
person.sayHello("doe");
//menambah method ke object
const personX = {
    name: "jhon"
};
personX.sayHello = function (name) {
    console.log(`Hello ${name}`);
}
personX.sayHello("doe");