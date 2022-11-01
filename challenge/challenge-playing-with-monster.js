console.log('Soal 3');

let Nama='www';
let Peran='monster';
if (!Nama&&!Peran){
    console.log('Nama dan Peran Harus diisi');
} else if(!Nama&&Peran){
    console.log('Nama Harus diisi');
} else if(Nama&&!Peran){
    console.log('Peran Harus diisi');
} else if(Nama&&Peran=='Superhero'){
    console.log('Selamat Datang Superhero '+Nama+', Kalahkan Semua Monster Di Muka Bumi');
} else if(Nama&&Peran=='Monster'){
    console.log('Selamat Datang Monster '+Nama+', Hancurkan Semua Superhero Yang Ada');
} else if(Nama&&Peran!='Superhero'||Peran!='Monster'){
    console.log('Selamat Datang '+Nama+', Pilih Peranmu Untuk Melanjutkan Game Ini');
}
