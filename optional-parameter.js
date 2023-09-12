/*
secara default, parameter di function itu optional
artinya kita tidak wajib mengisi valuenya ketika memanggil function
jika tidak ada value yg kita kirim ke parameter ketika memanggil function,
maka secara otomatis parameter tersebut bernilai undefined
*/
function sayHello(firstName, middleName,lastName) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
sayHello("hadi");