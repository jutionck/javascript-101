// Synchronous
// console.log('Start');
// console.log('Process');
// console.log('Finish');

// ini pasti akan menghasilkan output
/**
 * Start
 * Process
 * Finish
 */


// Lalu, bagaimana kita mencontohkan yang asynchronous ?
// Simulasi bisa menggunakan built-in function js yaitu setTimeout
// console.log('start');
// setTimeout(() => console.log('process'), 1000);
// console.log('finish')

// ini pasti akan menghasilkan output
/**
 * start
 * finish
 * Proses
 */

// Yang terjadi adalah baris yang mencetak process akan seolah-olah tercetak paling akhir
// karena dibuat menunggu (delay) Selama 1 detik

// Lalu kita akan mencontohkan penggunaan sebuah function
// Contoh di bawhah ini masih menggunakan konsep synchronous
// const sayHello = () => {
//     console.log(`Log from sayHello()`);
//     return `Hi everyone...`;
// }
//
// console.log('start----');
// console.log(sayHello());
// console.log('finish');

// Output
/**
 * start----
 * Log from sayHello()
 * Hi everyone...
 * finish
 */

// Lalu bagaimana menggunakan konsep asynchronous ?
// const sayHelloAsync = () => {
//     console.log(`Log from sayHello()`);
//     setTimeout(() => {
//         return `Hi everyone...`;
//     }, 1000);
// }
//
// console.log('start----');
// console.log(sayHelloAsync());
// console.log('finish');

// Output
/**
 * start----
 * Log from sayHello()
 * undefined
 * finish
 */

// Biarkan ada pertanyaan dahulu
// Praktik nya coba lanjutkan menggunakan sebuah parameter
// const sayHelloAsync = () => {
//     console.log(`Log from sayHello()`);
//     let name = null;
//     setTimeout(() => {
//         name = 'Joni';
//         name = `Hi everyone..., i am ${name}`;
//     }, 1000);
//     return name;
// }
//
// console.log('start----');
// const sayHl = sayHelloAsync()
// console.log(sayHl);
// console.log('finish');

// Hasilnya pun akan sama
// Output
/**
 * start----
 * Log from sayHello()
 * null
 * finish
 */

// Solusinya bagaimana ? Lanjut ke topik callback
