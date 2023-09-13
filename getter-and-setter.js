/*
getter dan setter adalah kemampuan membuat function yang berbeda untuk mengambil data
(getter) dan mengubah data (setter)pada sebuah property di object
dengan menggunakan getter dan setter, kita bisa melakukan hal apapun dalam function sebeblum
sebuah prooperty diakses atau diubah, misal menambah validasi dll
*/
//getter
const person = {
    firstName: "jhon",
    lastName: "doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val) {
        const array = val.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

//otomatis memanggil get fullName()
// console.log(person.fullName);
person.fullName = "spider man";
console.table(person);
// console.log(person.firstName);
// console.log(person.lastName);

