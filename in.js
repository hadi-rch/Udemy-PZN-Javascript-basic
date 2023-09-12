/*
in operator
-adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak
-jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
-tidak hanya di object, in juga bisa digunakan untuk mengecek index di array
*/
const person = {
    firstName: "hadi",
    lastName: "rich"
}
const result = "firstName" in person; //true
console.log(result);
 
const names = [null, "Adhi", null];
const hasil = 0 in names;
console.log(hasil);