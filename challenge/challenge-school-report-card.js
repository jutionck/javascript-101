let nilaitugaas = 85;
let nilaiUts = 90;
let nilaiUas = 100;
let grade = '';

let totalNilai = (nilaitugaas/100*25) + (nilaiUts/100*30) + (nilaiUas/100*45);

if(totalNilai > 100 || totalNilai < 0 ){
    console.log('nilai tidak valid');
}else if(totalNilai >= 80){
    grade = 'A';
}else if(totalNilai >= 70){
    grade = 'B';
}else if(totalNilai >= 55){
    grade = 'C';
}else if(totalNilai >= 40){
    grade = 'D';
}else{
    grade = 'E';
}
console.log(`Nilai ${totalNilai} dengan hasil akhir adalah ${grade}`)
