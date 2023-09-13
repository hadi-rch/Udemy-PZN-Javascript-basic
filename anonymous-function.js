/*
sebelumnya kita selalu membuat function dengan nama
kita juga bisa membuat function tanpa namafunction, atau istilahnya adalah anonymous function
kita bisa membuat anonymous function dalam sebuah variable atau bisa juga kita
buat ketika mengisi parameter
*/
let say = function (name) {
    console.log(`Hello ${name}`);
};
say("jhon");

//Anonymous function di parameter
function giveMeName(callback) {
    callback("jhonny");
}


giveMeName(function (name) {
    console.log(`Hello ${name}`);
});
