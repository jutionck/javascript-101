const giveTips = restaurant => {
    let tip = 0;
    let tips = [];
    let totalTips = 0;
    for (let i=0; i < restaurant.length; i++) {
        if (restaurant[i] >= 250000 && restaurant[i] <= 500000) {
            tip = restaurant[i] * 0.15;
            tips.push(tip);
        } else if (restaurant[i] > 500000) {
            tip = restaurant[i] * 0.10;
            tips.push(tip);
        } else {
            tip = restaurant[i] * 0.20;
            tips.push(tip);
        }
    }

    for (let i = 0; i < tips.length; i++) {
        totalTips += tips[i];
    }
    return totalTips
}

const payment = restaurant => {
    let totalBill = 0;
    for (let i = 0; i < restaurant.length; i++) {
        totalBill += restaurant[i];
    }
    return totalBill;
}

const formatMoney = (money, currency) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: currency }).format(money)
}

const formatRupiah = (angka, prefix) => {
    var number_string = angka.toString(),
        split   		= number_string.split(','),
        sisa     		= split[0].length % 3,
        rupiah     		= split[0].substr(0, sisa),
        ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

// Restaurant Bill
const restaurant = [250000, 710000, 125000];
const tips = giveTips(restaurant);
const bill = payment(restaurant);

console.log(`Total Tagihan : ${formatRupiah(tips, 'Rp.')}`);
console.log(`Total Tips : ${formatMoney(tips, 'IDR')}`);
console.log(`Total Tagihan dan Tips : ${formatMoney(bill + tips, 'IDR')}`);
