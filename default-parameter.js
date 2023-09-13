/*
sekarang kita tahu bahwa parameeter itu optional, artinya ita bisa tidak
memberi value terhadap parameter.
Parameter juga bisa kita beri default valaue, Artinya jika ketika kita
tidak mengirim data ke parameter atau kita mengirim data undefined, maka s
ecara otomatis parameter akan diisi oleh default value.
*/
function register(name, gender ="UNKNOWN") {
    console.log(name)
    console.log(gender)
}
register();//undefined
register("drogba","male");//drogba, male
register("lampard");//lampard, UNKNOWN
register("essien", undefined);//essien, UNKNOWN
register("essien", null);//essien, null

