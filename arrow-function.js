/*
Array function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
dinamakan arrow function karena mengunakan tanda => seperti panah
berikut contoh kekurangan arrow function:
tidak memiliki fitur argument object
tidak bisa menggunakan function generator
tidak bisa mengakses this
tidak bisa mengakses super
*/
const sayHello = (names) => {
    const say = `Hello ${names}`;
    console.log(say);
}
sayHello("jhon")
//Arrrow function tanpa block
//jika arrow function isinya sederhana, misalnya hanya satu baris
//kita bisa membuat arrow function tanpa harus menggunnakan block
const sayHello1 = (names) => console.log(`Hello ${names}`);
sayHello1("jhon")
//Arrow function return value
//arrow function bisa mengembalikan value, sama seperti function biasanya
//jika menggunakan block, maka kita perlu menggunnakan kata kunci return
//jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
const sum = (first, second) => first + second;
console.log(sum(10, 10));
//Arrow function tanpa kurung parameter
//jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter
const sayHello2 = names => console.log(`Hello ${names}`);
sayHello2("jhon lagi");
//Arrow function sebagai parameter
//karena arrow function sama seperti anonymous function
//jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain.
function giveMeName(callback) {
    callback("jhon qo");
}
giveMeName((names) => console.log(`Hello ${names}`));


