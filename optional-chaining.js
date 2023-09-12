/*
Optional Chaining
-merupakan operator yng digunakan untuk mengamankan ketika kita ingin
 mengaskes property sebuah object dari data nullish
-jika kita mencoba mengakses property dari sebuah object dari data nullish 
 tanpa menggunakan optional chaining operator, maka akan terjadi error.
*/

//cara sebelum optional chianing
// const person = {};
 
// let say;
// if (person.address !== undefined && person.address !== null) {
//     say = person.address.country;
// }
// console.log(say)

//cara setelah menggunakan optional chaining
let person1 = {
    // address: {
    //     country: "Indonesia"
    // }
};
console.log(person1?.address?.country);