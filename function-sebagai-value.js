/*
function tidak hanya bisa digunakan sebagai kode program yang dieksekusi,
tapi juga bisa sebagai valuw
Artiny, function bisa disimpan di variable, bisa juga dikirim, melalui parameter ke function lainnya.
*/
function sayHello(name) {
    console.log(`Hello ${name}`);
}
let say = sayHello;

sayHello("jhon");
say("doe")

function giveMeName(callback) {
    callback("jhon");
}
giveMeName(sayHello);
giveMeName(say);