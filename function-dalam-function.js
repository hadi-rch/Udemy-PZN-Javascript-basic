/*
tidak ada batasn dimana kita membuat function
termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
function yg terdapat di dalam, kita sebut inner function
inner function hanya bisa diaskes di tempat kita membuat functionnya,
tidak bisa diakses dari luar function nya
*/
function outer() {
    function inner() {
        console.log("inner");
    }

    inner()
    inner();
}

outer();
// inner(); //jika inner dipanggil di luar function maka akan terjadi error



