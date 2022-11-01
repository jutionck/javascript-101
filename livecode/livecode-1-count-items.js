let input =
    "Pensil:5, Penghapus:3, Pulpen:4, Pensil:2, Buku:5, Meja:7, Pulpen:5,Pensil:10";
input = input.toLowerCase();
let barang = [];
let namaBarang = "";
let jumlahBarang = "";
let jumlah = [];
let jumlahItem = [];

//if (input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122)

for (let i = 0; i < input.length; i++) {
    if (
        isNaN(Number(input[i])) &&
        input[i] != ":" &&
        input[i] != "," &&
        input[i] != " "
    ) {
        namaBarang += input[i];
    } else if (input[i] === ":") {
        barang.push(namaBarang);
        namaBarang = "";
    } else if (!isNaN(Number(input[i]))) {
        jumlahBarang += input[i];
    } else if (input[i] === ",") {
        jumlah.push(Number(jumlahBarang));
        jumlahBarang = "";
    }

    if (i == input.length - 1) {
        jumlah.push(Number(jumlahBarang));
    }
}
console.log(barang);
let namaItem = [];
let indexItemSama = [];
let index = 0;

for (const item of barang) {
    indexItemSama[index] = [];
    if (!namaItem.includes(item)) {
        namaItem.push(item);
        for (let i = 0; i < barang.length; i++) {
            if (item === barang[i]) {
                indexItemSama[index].push(i);
            }
        }
    } else {
        continue;
    }
    index++;
}

for (let i = 0; i < indexItemSama.length; i++) {
    jumlahItem[i] = 0;
    for (let j = 0; j < indexItemSama[i].length; j++) {
        let indexJumlah = indexItemSama[i][j];
        jumlahItem[i] += jumlah[indexJumlah];
    }
}

let output = "";
for (let i = 0; i < namaItem.length; i++) {
    if (i === namaItem.length - 1) {
        output += `${namaItem[i]} = ${jumlahItem[i]}`;
    } else {
        output += `${namaItem[i]} = ${jumlahItem[i]}, `;
    }
}
console.log(output);
