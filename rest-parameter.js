/*
Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknnya
pada satu parameter, dan secara otomatis akan dikonversi menjadi array
Untuk membuat rest parameter ada ketentuannya
Rest Parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan 
atau di tengah, kecuali memang ada 1 parameter
di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument
*/
function sum(name, ...data){
    let total =0;
    for (const item of data){
        total += item;
    }
    console.log(`Total ${name} is ${total}`);
}
sum("Orange",2,3,4,5,6,7,8);
sum("Apple", 5,5,6,7,5,6);
sum("Banana", 9,5,2,3,4);

//spread syntax
/*
kadang kita terlanjur memliki data berupa array
tapi untungnya kita juga bisa mengirimm array ke rest parameter
kita bisa gunakan ...(titik tiga kali) diikuti dengan array nya ketika memanggil function
fitur ini dianamakan spread syntax
*/
let values = [10,10,10,10,10,10,10,10,10,10];
sum("test", ...values);
sum("kopi", ...[2,3,4,5,6,7,8]);
sum("teh", ...[5,5,6,7,5,6]);
sum("susu", ...[9,5,2,3,4]);
