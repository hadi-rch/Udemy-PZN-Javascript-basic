//DESTRUCTURING FUNCTION PARAMETER
/*
destructuring tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter
hal ini membuat kita mudah ketika ingin mengambil nested data dalam array ataau object dalam function
*/
function displayPerson({firstName, middleName, lastName}) {
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
}
const person = {
    firstName: "kevin",
    middleName: "de",
    lastName: "bruyne"
};
displayPerson(person);
//
function sum([first, second]) {
    return first + second;
}
console.log(sum([10, 10]));
console.log(sum([20, 10]));
//DEFAULT VALUE
//yang paling menarik di destructuring adalah, kita bisa menambahkan default value
//jadi misal kita melakukan destructuring terhadap array, ternyata tidak ada datanya,
//maka kita bisa menambahkan default value
//begitu juga pada object, jika memang property nya tidak ada, maka kita bisa membuat default value
const names = ["paul", "pogba"];
const [firstName, middleName, lastName = "malas"] = names;
console.log(firstName);
console.log(middleName);
console.log(lastName);
//DEFAULT VALUE DESTRUCTURING OBJECT
{
    const person = {
        firstName: "Cristiano",
        lastName: "ronaldo"
    };
    const {firstName, middleName = "gonzales", lastName} = person;
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
//MENGGUNAKAN NAMA VARIABLE LAIN
/*
Saat melakukan destructuring di array, kita bisa dengan mudah membuat nama variable sesuka kita
Namun pada saat melakukan destructuring, kita harus membuat nama variable sama dengan nama property
kita juga bisa menggunakan nama variable lainsaat melakukan destructuring object jika kita mau
*/
{    
    const person = {
        firstName: "kevin",
        middleName: "de",
        lastName: "bruyne"
    }

    let {firstName: namaDepan, middleName: namaTengah = "kurniawan", lastName: namaBelakang} = person;
    console.log(namaDepan)
    console.log(namaTengah)
    console.log(namaBelakang)
}