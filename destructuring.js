/*Destructuring
adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable-variable
fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan
pengambilan data satupersatu
*/
{
    const names = ["aaaaaaaa", "bbbbbb", "cccccccc"];
    const firstName = names[0];
    const middleName = names[1];
    const lastName = names[2];
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
}
//menggunakan desctructuring
{
    const names = ["halland", "bellingham", "trent", "kevin", "kepa"];
    let [firstName, middleName, lastName, ...others] = names;
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
    console.log(others)
}
//Mengambil data di object 
{
    const person = {
        firstName: "drogbax",
        lastName: "kepa",
        address: {
            street : "kasinv rusian",
            city: "berlin",
            country: "austria"
        },
        hobby: "games",
        channel: "PZN"
    };
    // const firstName = person.firstName;
    // const lastName = person.lastName;
    // console.log(firstName)
    //menggunakan destructuring
    // let {firstName, lastName, address, ...others} = person;
    // console.log(firstName);
    // console.log(lastName);
    // console.log(address);
    // console.log(others);
    // let {address} =person;
    // console.log(address.city)
    //DESTRUCTURING NESTED OBJECT
    const {firstName, lastName, address: {country, city, street}, ...others} = person;
    console.log(firstName);
    console.log(lastName);
    console.log(country);
    console.log(city);
    console.log(street);
    console.log(others);
}
//DESTRUCTURING FUNCTION PARAMETER
/*
destructuring tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter
hal ini membuat kita mudah ketika ingin mengambil nested data dalam array ataau object dalam function
*/