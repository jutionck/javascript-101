// Global
// 'use strict';
// console.log(this)
// console.log(global); // Editor
// console.log(window); // browser

// call
const foo = {
    id: 1,
    name: 'foo'
}
function getInfo() {
    console.log(`The ${this.id} have a name ${this.name}`);
    console.log(this)
}
getInfo();
// bagaimana jika getInfo() ingin mendapatkan context this
// gunakan method call atau apply

getInfo.call(foo);
getInfo.apply(foo);

// terus perbedaan nya apa call dan apply ?
// call bisa di tambahkan argument, contoh:
function getInfoAddress(address) {
    console.log(`The ${this.id} have a name ${this.name} live in ${address}`);
}
getInfoAddress.call(foo, 'Ragunan');
// getInfoAddress.apply(foo, 'Ragunan'); // error
// solusi
getInfoAddress.apply(foo, ['Ragunan']); // gunakan array
