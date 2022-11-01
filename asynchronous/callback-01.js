const sayHelloAsync = cb => {
    console.log(`Log from sayHello()`);
    let name = '';
    setTimeout(() => {
        name = 'Joni';
        cb(`Hi everyone..., i am ${name}`);
    }, 1000);
}

console.log('start----');
sayHelloAsync(name => {
    console.log(name)
})
console.log('finish');

/**
 * start----
 * Log from sayHello()
 * finish
 * Hi everyone..., i am Joni
 */


// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }
//
// const coffee = orderCoffee();
// console.log(coffee);

/* output
Sedang membuat kopi, silakan tunggu...
null
*/

/**
 * fungsi setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode yang ada
 * selanjutnya. Jadi, fungsi orderCoffee() akan selalu mengembalikan nilai null, karena kode return
 * coffee akan dieksekusi terlebih dulu dibandingkan dengan coffee = "Kopi sudah jadi!";.
 * Solusi menggunakan callback, lihat file callback-function-2.js
 */
