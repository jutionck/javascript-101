function pesanMinuman(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan, ${pesanan} sedang proses`);
    setTimeout(() => {
        if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`)
        else {
            const hasil = `Kopi ${pesanan}`
            kirimPesan(null, hasil)
        }
    }, 2000)
}

function minumKopi(reject, resolve) {
    return (error, output) => {
        if (error)
            reject(`Kecewa ${error}`);
        else
            resolve(`Terimakasih. Sruput ${output}, ahhh`);
    };
}

function pesanMinumanAsync(pesanan) {
    return new Promise((resolve, reject) => {
        pesanMinuman(pesanan, minumKopi(reject, resolve))
    });
}

async function orderKopi() {
    try {
        const order = await pesanMinumanAsync('americano');
        console.log(order);
    } catch(err) {
        console.log(err);
    }
}

orderKopi();
