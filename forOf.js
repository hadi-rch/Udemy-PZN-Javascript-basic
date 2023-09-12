/*
jika for in digunakan untuk melakukan iterasi property
    atau index, berbeda dengan for of, ini digunakan untuk 
    melakukan iterasi terhadap isi value dari iterable
    object, seperti array, string dan lail-lain
for of tidak bia digunakan untuk melakukan iterasi data di object,
karena object bukanlah iterable
*/
const names = ["jhon", "takosok", "kasw"];
for (const name of names) {
    console.log(name);
};

const fullName = "indonesia";
for (const characters of fullName) {
    console.log(characters);
};