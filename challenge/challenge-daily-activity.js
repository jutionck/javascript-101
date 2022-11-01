let time = 3;

if (typeof time == 'string') {

    console.log('Nilai yang di masukkan hanya boleh angka')

}else if(time > 24 ){

    console.log('Hanya ada 24 jam dalam sehari')
}
else if (time < 0) {

    console.log('Angka Tidak Boleh Negatif')

} else if(time >= 4 && time < 6){

    console.log('Bangun Pagi')

}else if(time >= 6 && time < 8 ){

    console.log('Mandi dan Sarapan')

}else if(time >= 8 && time < 12){

    console.log('Berangkat Sekolah')

}else if (time == 12) {
    console.log('Pulang Sekolah');
}else{
    console.log('Waktu bebas dan istirahat');
}
