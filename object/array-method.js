let arr = [2,54,57,7,9];

// forEach tidak memiliki return, kode di bawah ini pasti undefined.
let fe = arr.forEach((e)=>{
    return e * 2
})

// ini baru bisa
arr.forEach((e) => {
    console.log(e);
})

let ma = arr.map((e) => {
    return e * 2
})

let fi = arr.filter((e) => { // shallow copy
    return e != arr[1]
})

let finn = arr.find((e) => { // returns the first element
    return e > 55
})

let fiin = arr.findIndex((e) => {
    console.log(e);
    return e === 9
})

console.log(arr);
console.log(fe); // undefined
console.log(ma); // value
console.log(fi); // filtered array
console.log(finn); // hanya mereturn 1 element
console.log(fiin); // index dari value yang dicari