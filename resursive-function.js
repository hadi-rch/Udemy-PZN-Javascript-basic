/*
rescursive function adalah kemampuan function memanggil function dirinya sendiri
kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunnakan
recursive function, seperti contohnnya kasus factorial
*/
//factorial loop
function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
// contoh factorial recursive
function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value -1);
    }
}
console.log(factorialRecursive(7));