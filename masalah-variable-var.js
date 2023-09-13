/*masalah variable var
-karena var tidak memiliki block scope, artinya dia tidak bisa mengikat ke local scope
-karena masalah ini, var bisa tidak terprediksi
*/
let i = 20;
for (let i = 0; i < 10; i++) {
    console.log(`Local : ${i}`);
}
console.log(`Global : ${i}`);

var j = 20;
for (var j = 0; j < 10; j++) {
    console.log(`Local : ${j}`);
}
console.log(`Global : ${j}`);