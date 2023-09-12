/*
for in merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index array
walaupun for in bisa digunakan untuk array, namun tidak direkomendasikan untuk array, karena biasanya
kita jarang sekali butuh data index untuk array, kita bisa menggunakan for of( yang dibahas setelah ini)
*/
const person = {
    firstName: "jhon",
    middleName: "takosokn",
    lastname: "kasw"
};
for (const property in person) {
    console.log(`${property} : ${person[property]}`);
}

const names = ["jhon", "takosok", "kasw"];
for (const index in names) {
    console.log(`${index} : ${names[index]}`);
}