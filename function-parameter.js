/*
Function Parameter
kita bisa mengirim informasi ke function yg ingin kita panggil
untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yg sudah kita buat
parameter ditempatkan di dalam kurung() di deklarasi method
parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma
*/
//membuat function dengan parameter
function sayHello(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

//memanggil function dengan parameter
sayHello("kylian", "mbappe");
sayHello("kaoru", "mitoma");