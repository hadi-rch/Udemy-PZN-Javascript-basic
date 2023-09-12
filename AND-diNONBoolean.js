/*
Operator AND(&&) di Non Boolean
Operator AND(&&) membaca dari kiri ke kanan.
Operator ini akan mengambil nilai pertama yang falsy.
Jika tidak ada satupun yang bernilai falsy maka yang terakhir yg diambil
*/
console.info("hello" && ''); //2
console.info("" && []); //1
console.info("0" && "NOL"); //2
console.info(0 && "NOL"); //1
console.info(null && "NULL"); //1
console.info(undefined && "UNDEFINED"); //1
console.info("undefined" && "null"); //2