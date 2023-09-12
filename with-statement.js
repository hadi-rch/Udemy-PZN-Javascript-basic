/*
with statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
dengan menggunakan wth statement, kita bisa mengakses property dalam sebuah data tanpa
harus menyebut datanya 
*/
console.log("with statement tidak direkomendasikan karena membuat sebuah kode menjaddi ambigu")
const person = {
    firstName: "jhon",
    middleName: "takosokn",
    lastname: "kasw"
};
//tanpa with statement
console.log(person.firstName);
console.log(person.middleName);
console.log(person.lastname);
// dengan with statement
with (person) {
console.log(firstName);
console.log(middleName);
console.log(lastname);
}

