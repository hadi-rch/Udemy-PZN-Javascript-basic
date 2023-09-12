const orang = {};

//menambahkan atau mmengubah
orang["nama"] = "hadi";
orang["alamat"] = "indonesia";
orang["umur"] = 24;
console.log(orang);
//menghapus 
delete orang["umur"];
console.table(orang);
//membuat object dengan properties
const person ={
    "nama lengkap": "hadi",
    alamat: "indonesia",
    umur: 24
};
console.table(person);
console.log(person);
//mengakses propery object
console.log(`Nama : ${person["nama lengkap"]}`);
console.log(`Alamat : ${person.alamat}`);
console.log(`Umur : ${person.umur}`);
