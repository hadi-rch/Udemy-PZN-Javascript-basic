/*
saat kita menjalankan kode program javascript, secara default kode program kita berjalan dalam
mode tidak strict, atau istilahnya sloppy mode
Pada ECMAScipt5, diperkenalkan mode strict, dimana ketika strict mode dijalankan, maka akan
merubah beberapa cara kerja javascript, sperti:
-merubah beberapa javascript error dari yg tadinya yg silent error, menjadi throw error (terlihat)
-memperbaiki bebrapa kesalahan engine javascript untuk optimisasi
-menolak bebrapa kode perintah yang kedepannya akan ddigunakan di ECMASSript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/
//cara menyalakan strict mode
//untuk menyalakan strict mode, kita bisa menambahkan `use strict` pada baris awal file javascript kita
//atau bisa juga ditambahkan di awal function kita.
function useStrictMode() {
    // 'use strict';
    const person = {
        firstName: "John",
    }
    with (person) {
        console.log(firstName);
    }
}
useStrictMode();