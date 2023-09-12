const nilai = 75;
let ucapan;

if (nilai >= 75){
    ucapan = "selamat anda lulus";
} else {
    ucapan = "Next time";
}
console.log(ucapan);

// dengan ternary operator
const nilaiA = 75;
const ucapanA = nilai >= 75 ? "selamat anda lulus" : "Next Time";
console.log(ucapanA);