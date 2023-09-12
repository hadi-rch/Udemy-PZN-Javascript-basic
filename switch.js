const nilai = "A";

switch (nilai) {
    case "A":
        console.log("Anda lulus dengan baik");
        break;
    case "B":
    case "C":
        console.log("Anda lulus");
        break;
    case "D":
        console.log("Anda Tidak lulus");
        break;
    default :
    console.log("mungkin anda salah jurusan")
}