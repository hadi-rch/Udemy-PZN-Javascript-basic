/*
scope merupakan area akses sebuah data
ada dua jenis scope, global scope dan local scope
setiap kita membuat function, maka kita akan membuat llocal scope untuk function tsb
data  di global scope bisa diaskes dari local scope, namun data local scope
hanya bisa diakses di local scope tersebut atau di scope local dibawahnya
(dalam kasus function dalam function)
*/
//Global scope
let counter = 0;
function hitMe() {
    //local scope function hitMe
    counter++; //we can access
}
hitMe();
hitMe();
hitMe();
console.log(counter);
// Local scope
function first() {
    let firtsVariables = "First"
}

function second() {
    let secondVariables = "Second"
}

first();
second();

//global scope
console.log(firtsVariables);//tidak bisa diakses karna local scope
console.log(secondVariables);//tidak bisa diakses karna local scope

// Nested function Scope
function first() {
    let firtsVariables = "First";
    function second() {
        console.log(firtsVariables);//bisa diaskes
    }

    second();
}

first();