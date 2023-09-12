/*Operator Logika
&& (dan)
|| (atau)
! (kebalikan)
 */

/*
Operator &&
true && true = true
true && false = false
false && true = false
false && false = false
*/

/*
Operator ||
true || true = true
true || false = true
false || true = true
false || false = false
*/

/*
Operator !
! true = false
! false = true
*/

const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);