// Object pada dasarnya bersifat mutable
// Contoh berikut: newCar di ambil dari car ketika newCar diubah name nya maka car.name juga ikut berubah.
const car = {
  name: 'terrios'
}

const newCar = car;
newCar.name = 'BMW';

console.log('car', car);
console.log('newCar', newCar);

// Penerapan immutable
const otherCar = Object.assign({}, car); // Tidak di rekomendasikan
otherCar.name = 'Ferrari';
console.log('car', car);
console.log('otherCar', otherCar);

// Rekomendasi menggunakan spread operator -> ...object
const otherCar02 = { ...car }
otherCar02.color = 'white';
console.log('car', car);
console.log('otherCar02', otherCar02);

// Bagaimana jika kita mempunya object yang nested
const students = {
  id: 1,
  name: 'Jack',
  major: 'Engineering',
  address: {
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta'
  }
}

// spread operator
const students02 = { ...students }
console.log(students);
console.log(students02);

// Sekarang kita coba ubah name dan address.city
students02.name = 'Bulan';
students02.address.city = 'Dewata';
console.log(students); // city ikut berubah
console.log(students02);

// Solusiny adalah
const students03 = { ...students, address: { ...students.address} }

// Sekarang kita coba ubah name dan address.city
students03.name = 'Marina';
students03.address.city = 'Banten Kota';
console.log(students); // city tidak berubah
console.log(students03);

// Delete properti
delete students03.address;
console.log(students);
console.log(students03);