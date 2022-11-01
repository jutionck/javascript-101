// Foundation
const orderCoffee = (coffeeName, cbError, cbSuccess) => {
    let coffee = null
    console.log("Sedang membuat pesanan, silahkan tunggu...");
    setTimeout(() => {
        if(coffeeName === 'Teh') {
            cbError(`Kami tidak menjual ${coffeeName}`)
        } else {
            coffee = `Pesanan untuk ${coffeeName} kamu sudah jadi`;
            cbSuccess(coffee)
        }
    }, 5000)
}

const cbError = (result) => console.log(result);
const cbSuccess = (result) => console.log(result);

// Callback
// console.log('Callback ====================================');
// orderCoffee('Teh', cbError, coffee => {
//     cbSuccess(coffee);
// });
//
// // Callback Hell
// // Untuk pesanan yang lebih dari 1
// console.log('CallbackHell =================================');
// orderCoffee('Air Mineral', cbError, coffee => {
//     cbSuccess(coffee);
//     orderCoffee('Capucino', cbError, coffee => {
//         cbSuccess(coffee);
//         orderCoffee('Americano', cbError, coffee => {
//             cbSuccess(coffee);
//             orderCoffee('Teh', cbError, coffee => {
//                 cbSuccess(coffee);
//             })
//         })
//     });
// });

// Promise
console.log('Promise ====================================');
const myOrderPromise = new Promise((success, err) => {
    orderCoffee('Kopi ABC', success, err);
    orderCoffee('Kopi Tarik', success, err);
});

// Kalo pake promise untuk mencetak outout harus menggunakan then (success) catch (error)
// Kalo gak dikasih then pasti kena pending
myOrderPromise.then((coffe) => {
    console.log(coffe);
}).catch((error) => {
    console.log(error);
});

// console.log('Promise All ====================================');
// const myOrderPromiseAll = (order) => {
//     return new Promise((resolve, reject) => {
//         orderCoffee(order, reject, resolve)
//     })
// }
//
// Promise.all([
//     myOrderPromiseAll('Kopi Tarik'),
//     myOrderPromiseAll('Kopi ABC'),
//     myOrderPromiseAll('Kopi Susu Kambing'),
//     // myOrderPromiseAll('Teh')
// ]).then((allOrder) => {
//     for (const order of allOrder) {
//         console.log(order);
//     }
// }).catch(error => console.log(error))
//
// // Async - Await
// console.log('Async-Await ====================================');
// const myOrderAsyncAwait = order => {
//     return new Promise((resolve, reject) => {
//         orderCoffee(order, reject, resolve)
//     })
// }
//
// const listOrderCoffe = async () =>  {
//     try {
//         const kopiTarik = await myOrderAsyncAwait('Kopi Tarik');
//         const kopiABC = await myOrderAsyncAwait('Kopi ABC');
//         const kopiSusuKambing = await myOrderAsyncAwait('Kopi Susu Kambing');
//         console.log(kopiTarik);
//         console.log(kopiABC);
//         console.log(kopiSusuKambing);
//         const teh = await myOrderAsyncAwait('Teh')
//         console.log(teh);
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// listOrderCoffe()
