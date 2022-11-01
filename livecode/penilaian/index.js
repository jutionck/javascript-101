const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'oktober', 'November', 'Desember'];

let tanggal = 21
let bulan = 4
let tahun = 2021
// functiion kalender(tanggal, bulan, tahun){}
if (bulan > 12 || bulan < 1 || tanggal < 1) {
  console.log(`penganggalan tidak valid`)
} else if (bulan == 1, 3, 5, 7, 8, 10, 12 && tanggal > 31) {
  bulan = namaBulan[bulan - 1]
  console.log(`bulan ${bulan} tahun ${tahun} hanya ada tanggal 1 sampai 31`)
} else if (bulan == 4, 6, 9, 11 && tanggal > 30) {
  bulan = namaBulan[bulan - 1]
  console.log(`bulan ${bulan} tahun ${tahun} hanya ada tanggal 1 sampai 30`)
} else if (bulan == 2 && tanggal > 29 && tahun % 4 === 0) {
  bulan = namaBulan[bulan - 1]
  console.log(`bulan ${bulan} tahun ${tahun} hanya ada tanggal 1 sampai 29`)
} else if (bulan == 2 && tanggal == 29 && tahun % 4 !== 0) {
  bulan = namaBulan[bulan - 1]
  console.log(`tahun kabisat tidak terjadi pada ${tahun}`)
} else if (bulan == 2 && tanggal > 28 && tahun % 4 !== 0) {
  bulan = namaBulan[bulan - 1]
  console.log(`bulan ${bulan} tahun ${tahun} hanya ada tanggal 1 sampai 28`)
} else {
  bulan = namaBulan[bulan - 1]
  console.log(`${tanggal} ${bulan} ${tahun}`)
}
