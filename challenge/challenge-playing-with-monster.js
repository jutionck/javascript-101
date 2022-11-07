let namaKarakter = "iqrom";
let peran = "Superhero";
let output = "";
peran = peran.toLowerCase();

if (namaKarakter && peran) {
  if (peran == "superhero") {
    output = `Selamat Datang Superhero ${namaKarakter}, Kalahkan Semua Monster Di Muka Bumi`;
  } else if (peran == "monster") {
    output = `Selamat Datang Monster ${namaKarakter}, Hancurkan Semua Superhero Yang Ada`;
  } else {
    output = `Selamat Datang ${namaKarakter}, Pilih Peranmu Untuk Melanjutkan Game Ini`;
  }
} else {
  if (!peran && !namaKarakter) {
    output = "Nama dan Peran Harus Di Isi";
  } else if (!peran) {
    output = "Peran Harus Di Isi";
  } else {
    output = "Nama Harus Di Isi";
  }
}

console.log(output);