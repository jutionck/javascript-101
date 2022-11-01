const number = 2;
let counterOdd = 1;
let totalOdd = 0;
let resultOdd = '';
while (true) {
    if (counterOdd >= number) {
        break
    }

    if (counterOdd % 2 === 1) {
        totalOdd += counterOdd;
        resultOdd += `${counterOdd},`
    }
    counterOdd++;
}
console.log(`Ganjil: ${resultOdd} = ${totalOdd}`)

let counterEven = 2;
let i = 0;
let totalEven = 0;
let resultEven = '';
while (true) {
    if (i >= number) {
        break
    }

    if (counterEven % 2 === 0) {
        totalEven += counterEven;
        i++;
        resultEven += `${counterEven},`
    }
    counterEven++;
}
console.log(`Genap: ${resultEven} = ${totalEven}`)
