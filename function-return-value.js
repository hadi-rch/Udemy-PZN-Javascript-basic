/*
secara default, function itu tidak menghasilkan value apapun, 
namun jika kita ingin kita bisa membuat sebuah function mengembalikan value
agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam functionnya
dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakann kata kunci return,
lalu diikuti dengan data yang ingin kita hasilkan.
fucntion hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaliigus,
kita bisa menggunakan array sebagai return value nya.
*/
//membuat function dengan parameter dan retur value
function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

//memanggil function dan menangkap return valuenya
const result = sayHello("jhon","doe");
console.log(result);

// function return value lebih dari satu
function getFinalScore(value) {
    if (value > 90){
        return "A";
    } else if (value > 80){
        return "B";
    } else if (value > 70){
        return "C";
    } else if (value > 60){
        return "D";
    } else {
        return "E";
    }
}
const finalValue = getFinalScore(76)
console.log(`${finalValue}`)

// Menghentikan eksekusi dengan return
/*
saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak akan dieksekusi
kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
*/
function isContains(array, searchValue){
    for (const element of array) {
        // console.log(element)
        if (element === searchValue){
            return true;
        }
    }
    return false;
}
console.log(isContains([1,2,3,78,46,443,1,4,5,6,7,6,,88,6,8,9,10], 6));
