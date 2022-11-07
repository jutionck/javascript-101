let jam = "11";
let jadwal = "";

let validasiNumber = typeof jam === "number" ? true : false;

if (validasiNumber) {
  if (jam > 24) {
    jadwal = "Hanya ada 24 jam dalam sehari";
  } else if (jam < 0) {
    jadwal = "Angka Tidak Boleh Negatif";
  } else if (jam >= 4 && jam <= 5) {
    jadwal = "Bangun Pagi";
  } else if (jam >= 6 && jam <= 7) {
    jadwal = "Mandi dan sarapan";
  } else if (jam >= 8 && jam <= 11) {
    jadwal = "Berangkat Sekolah";
  } else if (jam === 12) {
    jadwal = "Pulang Sekolah";
  } else {
    jadwal = "Waktu bebas dan istirahat";
  }
} else {
  jadwal = "Nilai yang di masukkan hanya boleh angka";
}

console.log(jadwal);