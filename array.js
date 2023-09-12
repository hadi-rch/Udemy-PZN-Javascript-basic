let arrayKosong =[];
let arrayNama = ["hadi", "new", "version"];

const names = [];
names.push("hadi");
names.push("new", "version");
console.table(names);
names[0] = "speed";
console.table(names);
console.log(names);
console.info(names.length);

/*
operasi di array
array.push(value)       => menambah data ke array
array,length            => untuk mendapatkan panjang array
array[index]            => mendapat data di posisi index
array[index] = value    => mengubah data di posisi index
delete array[index]     => menghapus data di posisi index, namun index tidak bergeser
*/