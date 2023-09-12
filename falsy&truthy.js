/*
Falsy adalah valueyang ketikadalam konteks boolean, dia dianggap false
ini adalah salah satu fiur unik di javascript, yg berguna, numun kadang juga sering membingungkan
jadi di javascript, kondisi itu tidak hanya bisa boolean, tapi di luar boolean pun bisa, namun
kita harus tahu beberapa data falsy, atau dianggap false
*/

/*
data dianggap falsy             keterangan
false                           Boolean false
0, -0                           Number 0 dan -0 dianggap false
"",'',``                        semua string kosong dianggap false
null                            null dianggap false
undefined                       undefined dianggap false
NaN                             Not a Number dianggap false
*/
// {},[] object kosong dan array kosong dianggap true
let data = "";
if (data) {
    console.log("true");
} else {
    console.log("false");
}