const names = ["babang", "tampan"];
if (names[2] === undefined) {
    console.log("Hello World");
} else {
    console.log(`Hello ${names[2]}`);
}

//undefined object property
let person = {};
if (person.names === undefined) {
    console.log("kosong");
} else{
    console.log(`Hello ${person.name}`);
}