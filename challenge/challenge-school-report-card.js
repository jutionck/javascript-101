let nilai = { Tugas: 85, UTS: 90, UAS: 100 };
const nilaiAkhir = 0.25 * nilai.Tugas + 0.3 * nilai.UTS + 0.45 * nilai.UAS;
let grade = "";

if (nilaiAkhir < 0 || nilaiAkhir > 100) {
  grade = "nilai tidak sesuai";
} else if (nilaiAkhir >= 80) {
  grade = "A";
} else if (nilaiAkhir >= 70) {
  grade = "B";
} else if (nilaiAkhir >= 55) {
  grade = "C";
} else if (nilaiAkhir >= 40) {
  grade = "D";
} else {
  grade = "E";
}
console.log(`Nilai ${nilaiAkhir} dengan hasil akhir adalah ${grade}.`);