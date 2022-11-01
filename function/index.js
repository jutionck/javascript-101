// Pembuatan function
// function sayHello() {
//     console.log('Hai.....');
// }
// // Memanggil function yang dibuat
// sayHello();

// Bagaimana jika function mendapati sebuah argumen di dalamnya?
// function sayHello(name) {
//     console.log('Hai', name)
//     console.log(`Hai ${name} salam kenal ya...`)
// }
// // Memanggil function dengan argumen name
// sayHello('Fadli'); // Hai Fadli
//
// // Bagaimana jika tidak memasukkan argumen kedalam function ?
// sayHello(); // Hai undefined

// Function dengan argumen lebih dari 1 (satu)
// function sayHello(name, address) {
//     console.log(`Hai ${name} salam kenal kamu tinggal di ${address} ya`);
// }
// sayHello('Fadli', 'Jagakarsa');
// // Jika yang di masukkan hanya 1 argumen hasilnya ?
// sayHello( 'Jagakarsa'); // Hai Jagakarsa salam kenal kamu tinggal di undefined ya

// Penggunaan keyword return
// return disini bertugas untuk keluar dari function tersebut dan mengentikan program
// function sayHello(name, address) {
//     return `Hai ${name} salam kenal kamu tinggal di ${address} ya`;
// }
// // Pemanggilan nya pun tidak langsung sayHello
// sayHello('Fadli', 'Jagakarsa'); // tidak akan tercetak (tidak ada console.log())
// console.log(sayHello('Fadli', 'Jagakarsa')) // baru bisa
//
// // atau bisa di tampung di variabel dahulu
// const printSayHello = sayHello('Fadli', 'Jagakarsa');
// console.log(printSayHello);

// Jika dari contoh diatas return dibuat 1 baris, bagaimana jika ingin lebih dari 1 baris ?
// function sayHello(name, address) {
//     return `Hai ${name} salam kenal kamu tinggal di ${address} ya` +
//         `Bagaimana pendapatmu tentang training ini?`
//
// }
// const printSayHello = sayHello('Fadli', 'Jagakarsa');
// console.log(printSayHello);

// Jika kita membuat sebuah function dengan argumen kemudian kita tidak mengisinya maka akan menghasilkan undefined
// Di JavaScript ada sebuah fitur yaitu default argumen
// function sayHello(name = 'Fadli', address = 'Jagakarsa') {
//     return `Hai ${name} salam kenal kamu tinggal di ${address} ya`;
// }
// console.log(sayHello());
// console.log(sayHello('Bulan', 'Bali'));

// Optional argumen
// function sayHello(name, address) {
//     address = address || '' // menggunakan LOGICAL OR
//     return `Hai ${name} salam kenal kamu tinggal di ${address} ya`;
// }
// console.log(sayHello('Bulan'));

// Coba latihan dulu untuk membuat sebuah function:
// 1. Mencetak biodata diri
// 2. Mencetak luas bangun datar menggunakan function
// 3. Looping Sederhana (misalnya mencetak angka genap dan ganjil)


// Function as Expression
// expression adalah kode atau instruksi yang mengembalikan nilai
// contoh:
// const add = 5 + 5;
// console.log(add);
// // Jika dalam function seperti apa ?
// const getAddValue = function add(number1, number2) {
//     return number1 + number2;
// }
// // Cara pemanggilan nya adalah
// console.log(getAddValue(10, 5)); // 15

// Hoisting
// Pemanggilan function sebelum di deklarasikan
// sayHello();
// function sayHello() {
//     console.log('Hai.....');
// }

// Hoisting tidak berlaku saat membuat menggunakan expression function
// sayHello();
// const sayHello = function test() { // error
//     console.log('Hai.....');
// }

// Recursive function
// Memanggil nama function di dalam block scope function
// Contohnya mungkin bisa d praktikkan mencari bilangan factorial
// function factorial(x) {
//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }
//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }
// const num = 10;
//
// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }


// // Mengerti penggunaan melempar function ke dalam sebuah function melalui parameter
// // Di bawah ini adalah hanya contoh pemanggilan sebuah function dalam parameter function
// function showName(name, func) {
//     if (typeof func === 'function') {
//         name = func.call(this, name)
//     }
//     return name
// }
//
// // Buat contoh sebuah function misalnya untuk uppercase
// function toUpper(name) {
//     return name.toUpperCase()
// }
// // Memanggil showName bisa dua cara
// // 1. Pertama memanggil dengan function sebagai argumen
// console.log(showName('bulan', toUpper));
// // 2. Tanpa argumen function
// console.log(showName('bintang'));
//
// // Atau jika tidak mau dibuat terlebih dahulu bisa seperti ini
// const result = showName('Jamal', function (name) {
//     return name.toUpperCase();
// })
// console.log(result);
// // Beritahukan trainee, untuk lebih jelas nanti di TOPIC: Callback

// function multiply(num1, num2) {
//     return num1*num2;
// }
//
// // jika function as value bisa seperti ini
// const m = multiply;
// console.log(m(1,2)); // 3
//
// // beritahukan trainee juga ini berlaku di object

// Arrow Function
// ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function.
// Pembuatan nya adalah
// const sum = (numbers) => {
//     let result = 0;
//     for (let i=0;i<numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result;
// }
//
// const numbers = [1,2,3,4,5];
// console.log(sum(numbers));

// Lexical Scope atau Nested Function
// function outer (a){ // This is the outer function
//     console.log("Outer function executed with arg",a);
//     function inner(b){ // This is the inner function
//         console.log("Inner function executed with arg:",b);
//         return; // Exit inner function
//     }
//     inner(a); // Call inner function declared above
//     return; // Exit outer function
// }
// outer(1); // Call outer function declared above

// // Jika tidak menggunakan lexical scope/nested function
// function outer (a){ // This is the outer function
//     console.log("Outer function executed with arg",a);
//     a++; // Do computation
//     return a; // Exit outer function
// }
// function inner(b){ // This is the inner function
//     console.log("Inner function executed with arg:",b);
//     return; // Exit inner function
// }
// var outerReturn = outer(1); // invoke outer and assign the output to outerReturn
// inner(outerReturn); // invoke inner with the output of outer

// Melanjutkan Lexicope (functio didalam function)
// const connectDb = () => {
//     const dbHost = 'localhost';
//     const dbPort = '5432';
//     const dbUser = 'pascal';
//     const dbPassword = 'pascal@2022';
//     const dbName = 'db_enigma';
//     const dsn = `mysql://${dbHost}:${dbPort}/${dbUser}:${dbPassword}/${dbName}`;
//
//     const isConnect = () => {
//         console.log(`Database connected to ${dsn}`); // lexical scope -> dapat mengakses variable diluar scope
//     }
//
//     isConnect();
// }
// connectDb();

// Pemanfaatan sebuah closure untuk membatasi akses
// let counter = 1;
// const increment = () => {
//     return counter++;
// }
//
// console.log(increment())
// console.log(increment())
// // bagaimana jika kita assign si counter = 20
// counter = 20;
// // apa yang terjadi ketika kita memanggil function increment() ?
// console.log(increment()) // 20
// console.log(increment()) // 21

// const increment = () => {
//     let counter = 1;
//     // gak bisa langsung gini
//     // return counter++
//     return () => { // annonymous function
//         return counter++;
//     }
//
// }
// const ic = increment();
// console.log(ic())
// console.log(ic())

// Lexical Scope Again
// let a = 10;
// const foo = () => {
//     console.log(`get variable outer a ${a}`);
//     let b = 10;
//     const todo = () => {
//         console.log(`get variable b inner ${b}`);
//     }
//     // panggil todo
//     todo();
// }
// foo();
// // todo() // gak akan bisa
// // console.log(`get variable on foo() ${b}`); // ERROR

// Module
// const users =  require('../model/user');
//
// console.log(users.firstName);

// Multiple Return
const foo = () => {

}
