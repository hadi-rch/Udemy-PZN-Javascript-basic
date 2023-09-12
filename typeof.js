/*
Operator typeof 
-type of merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable
-karena JavaScript merupakan dynamic language, jadi kadang kita perlu mengecek type data
sebuah value atau variable menggunakan operator typeof
-hasil dari operator typeof adalah string tipe datanya
*/
 
let data;
// if (typeof data === "number") {
//     console.log("number");
// }else if (typeof data === "string") {
//     console.log("string");
// } else if (typeof data === "boolean") {
//     console.log("boolean");
// } else if (typeof data === "object") {
//     console.log("object");
// } else {
//     console.log("first")
// };

const typeData = typeof data;
console.log(`${typeData}`);