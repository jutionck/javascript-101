// function drinkCoffee(error, output) {
//     if (error) {
//         console.log(`Kecewa ${error}`);
//     } else {
//         console.log(`Terimakasih. Sruput ${output}, ahhh`);
//     }
// }
//
// function drinkOrder(order, sendOrder) {
//     console.log(`Menunggu pesanan, ${order} sedang proses`);
//     setTimeout(() => {
//         if (order.toLowerCase() === "teh") sendOrder(`Pesanan ${order} tidak ada`)
//         else {
//             const hasil = `Kopi ${order}`
//             sendOrder(null, hasil)
//         }
//     }, 2000)
// }
//
// drinkOrder("Teh", drinkCoffee)

function minumKopi(error, output) {
    if (error) {
        console.log(`Kecewa ${error}`);
    } else {
        console.log(`Terimakasih. Sruput ${output}, ahhh`);
    }
}

function pesanMinuman(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan, ${pesanan} sedang proses`);
    setTimeout(() => {
        if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`)
        else {
            setTimeout(() => {
                console.log("Pesanan sedang dibuat");
                const hasil = `Kopi ${pesanan}`
                kirimPesan(null, hasil)
            }, 3000)
        }
    }, 2000)
}

// pesanMinuman("Americano", minumKopi)
let pesan = ['latte', 'teh', 'americano', 'cappuccino'];

pesanMinuman(pesan[0], (error, pesanan) => {
    console.log(pesanan);
    pesanMinuman(pesan[1], (error, pesanan) => {
        console.log(pesanan);
        pesanMinuman(pesan[2], (error, pesanan) => {
            console.log(pesanan);
            pesanMinuman(pesan[3], (error, pesanan) => {
                console.log(pesanan);
            })
        })
    })
});
