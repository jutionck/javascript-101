/**
 * kondisi di javaScript terdapat dua bagian:
 * - IF
 * - TERNARY
 * - SWITCH
 */

// IF Statement
/**
 * Kasus: Mencari sebuah nilai/grade, misalnya: nilai 90 mendapat nilai A
 */
let nilai = 90;
if(nilai == 90) {
    console.log('A');
}
//
// // Atau bisa juga seperti ini, untuk grade bisa di tampung disebuah variabel
// // baru ni kepake scope dari sebuah varibel
nilai = 80;
let grade = '';
if(nilai < 90) {
    grade = 'B';
}
console.log(grade)
//
// // Terus bagaimana kalo saya mau keduanya, nilai 90 adalah A, dan di bawah 90 dapet B
// // IF ElSE
nilai = 88
if (nilai === 90) {
    console.log('A')
} else {
    console.log('B')
}
//
// // Terus bagaimana jika nilai lebih dari 2 (dua) ?
// // IF ELSE..IF
// // Kasus: 90 (A) | < 90 (B) | < 80 (C) selain itu D
nilai = 54
if (nilai >= 90) {
    console.log('A')
} else if(nilai >= 80 ) {
    console.log('B')
} else if (nilai > 50) {
    console.log('C')
} else {
    console.log('D')
}
//
// // Terus gimana kalo cari rentang nilai ?
// // Baru disini kepake operator AND
// // Kasus: 90 - 100 (A) | 80 - 89 (B) | 70 - 79 (C) selain itu D
nilai = 69
if (nilai >= 90 && nilai <= 100) {
    console.log('A')
} else if(nilai >= 80 && nilai < 90 ) {
    console.log('B')
} else if (nilai >= 70 && nilai < 80) {
    console.log('C')
} else {
    console.log('D')
}

// Kita juga bisa melakukan nested if
// Dimana selain dia cek nilai dia juga bisa cek jenis grade
// Kasus: 90 - 100 (A) | 80 - 89 (B) | 70 - 79 (C) selain itu D
// Kemudian: competence: 2 dengan nilai 90 - 100 mendapat kesempatan beasiswa, selain itu tidak
nilai = 90;
const competence = 1;
if (competence === 2 && nilai >= 90 && nilai <= 100) {
    console.log('Nilai anda A dan anda mendapat beasiswa');
} else {
    if(nilai >= 90 && nilai <= 100) {
        console.log('Nilai anda A');
    } else if(nilai >= 80 && nilai < 90 ) {
        console.log('Nilai anda B');
    } else if (nilai >= 70 && nilai < 80) {
        console.log('Nilai anda C');
    } else {
        console.log('Nilai anda D');
    }
}

// Selain diatas di JavaScript dapat membuat dua buah kondisi lebih singkat
// Sebenernya kita dapat membuatnya dengan IF..ELSE
// Kasus: Bilangan Genap
let number = 11;
if (number % 2 === 0) {
    console.log(`${number} merupakan bilangan genap`)
} else {
    console.log(`${number} merupakan bilangan ganjil`)
}

// Cara lebih singkat bisa menggunakan TERNARY OPERATOR
// condition ? exprIfTrue : exprIfFalse
// Ingat! hanya untuk dua buah kondisi saja yang direkomendasikan
number = 10;
let result = number % 2 === 0 ? `${number} merupakan bilangan genap` : `${number} merupakan bilangan ganjil`
console.log(result)

// TERNARY lebih dari 2 pilihan
// condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
number = "sepuluh"
result = number % 2 === 0 ? `${number} merupakan bilangan genap` :  number % 2 === 1  ? `${number} merupakan bilangan ganjil` :  `${number} merupakan bukan angka`
console.log(result)

// Cara diatas bisa, tetapi tidak direkomendasikan, hal diatas bisa dibuat seperti IF.. ELSIF saja
if(number % 2 === 0 ) {
    console.log(`${number} merupakan bilangan genap`);
} else if (number % 2 === 1) {
    console.log(`${number} merupakan bilangan ganjil`);
} else {
    console.log(`${number} merupakan bukan angka`);
}

// Truthy & Falsy
let name = '';
if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log('Nama masih kosong');
}

const isNumber = 10;
if(isNaN(isNumber)) {
    console.log(`${isNumber} adalah sebuah number`)
} else {
    console.log('Bukan sebuah number')
}


// SWITCH
// Secara fungsi hampir sama dengan IF, switch ini bisa menjadi pengganti if
// -> switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas

