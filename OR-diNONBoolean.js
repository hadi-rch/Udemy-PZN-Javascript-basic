/*
Operator OR(||) di Non Boolean
Operator OR(||) membaca dari kiri ke kanan.
Operator ini akan mengambil nilai pertama yang truthy.
Jika tidak ada satupun yang bernilai truthy maka yang terakhir yg diambil
*/
console.log("hello" || '');
console.log("" || []);
console.log("0" || "NOL");
console.log(0 || "NOL");
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");

const person = {
    firstName: "",
    lastName: "Hadi",
};
const names = person.firstName || person.lastName;
console.log(names);

