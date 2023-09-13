/*
function generator adalah function yang digunakan untuk membuat data geerator
generator adalah data yang bisa diiterasi seperti array
untuk membuat function geerator, kita perlu menggunakan tanda *(bintang) setelah kata function
dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata
kunci yield diikuti datanya
CUMA BISA DIITERASI TIDAK BISA AKSES MENGGUNAKAN INDEX ARRAY
*/
//function generator sederhana
function* createNames() {
    yield "jhon";
    yield "doe";
    yield "toreto";
}

const names = createNames();
for (const name of names) {
    console.log(name);
}
//function generator kompleks
function* buatGanjil(value) {
    for (let i=1; i<=value; i++) {
        if (i%2 === 1) {
            yield i;
        }
    }
}
const angkaGanjil = buatGanjil(100);
for (const angka of angkaGanjil) {
    console.log(angka);
}
// generator itu sifatnya lazy
//jadi artinya jika datanya belum kita ambil dari generator, maka yield selanjutnya tidak akan dieksekusi
function* buatGanjil1(value) {
    for (let i=1; i<=value; i++) {
        if (i%2 === 1) {
            console.log(`perulanagan ke ${i}`);
            yield i;
        }
    }
}
const angkaGanjil1 = buatGanjil1(100);
console.log(angkaGanjil1.next().value)
console.log(angkaGanjil1.next().value)
console.log(angkaGanjil1.next().value)
