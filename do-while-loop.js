/*
do while loop adalah perulangan yang mirip dengan while
perbedaan hanya pada pengecekan kondisi
pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakkukan,
 sedangkan di do while loop dilakukan setelah perulangan dilakukan
oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak 
 bernilai true
*/
let counter = 1;
do {
    console.log(counter);
    counter++;
}
while (counter <= 10);