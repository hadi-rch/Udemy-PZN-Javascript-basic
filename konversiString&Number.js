/*
parseInt(string) [mengkonversi dari string ke Number(bilangan bulat)]
parseFloat(string) [mengkonversi dari string ke Number(bilangan pecahan)]
Number(string) [mengkonversi dari string ke Number(bilagan bulat atau pecahan)] 
Number.toString() [mengkonversi dari Number ke string]
*/
console.log(`${parseInt("1.1")}`);
console.log(`${parseFloat("1.1")}`);
console.log(`${Number("1.1")}`);

const a = 1;
const b = 1;
const total = a.toString() + b.toString();
console.log(total);

console.log(`${parseInt("salah")}`);
console.log(`${parseFloat("1.1text")}`);
console.log(`${Number("1.1ups")}`);
console.log(`${Number("1x")}`);
console.log(`${Number("bukan number")}`);
const first = Number("salah");


/*
isNaN() Function
-kadang kita ingin mengecek apakah sebuah number itu NaN atau bukan
-untuk melakukan pengecekan tersebut, kita bisa menggunakan function isNaN(number)
-hasilny adalah berupa data boolean, true jika NaN, false jika bukan
*/
console.log(`${isNaN(first)}`);