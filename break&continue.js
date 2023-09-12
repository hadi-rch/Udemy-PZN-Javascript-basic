/*
pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case pada switch
sama dengan perulangan, break juga digunakan untuk menghentikan seluruh perulangan.
namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini. lalu melanjutkan
ke perulangan selanjutnya.
*/
let counter = 1;
while (true) {
    console.log(counter);
    counter++;

    if (counter > 10) {
        break;
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`perulangan ganjil ${i}`)
}
