/*
closure adalah kombinasi fucntion dan bundle referensi ke data disekitarnya
kita tahu bahwa local scope tidak bisa diakses diluar scope nya
dengan kemampuan closure, kita bisa membuat sebuah function di local scope
dan referensi ke data disekitar local scope tersebut, keluar scopenya.
*/
function createAdder(value) {
    const owner = "jhon";
    function add(param){
        console.log(owner);
        return value + param;
    }
    return add;
}
const addTwo = createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));