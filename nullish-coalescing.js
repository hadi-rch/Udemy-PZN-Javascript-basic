/*

*/

let parameter;
let data = parameter;
if (data === undefined || data === null) {
    data = "Nilai Default";
}
console.log(data)

// cara cepat
let parameterA;
let dataA = parameterA ?? "Nilai Default";
console.log(dataA);