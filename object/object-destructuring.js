const students = {
  id: 1,
  name: 'Jack',
  major: 'Engineering',
  address: {
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta'
  }
}

// Konsep destructuring adalah kita meng-extract isi / properti dari sebuah object.
// Caranya adalah sebagai berikut.
const { id, name, major, address } = students;

// Cara panggilnya adalah sebagai berikut.
console.log(id, name, major, address);

// Untuk address juga bisa.
const { city, province } = students.address;
console.log(city, province);

// Object destructuring adalah kita meng-extract properti aslinya dari sebuah object dan,
// dicetak sesuai hasil dari destructuring
// Bagaimana jika kita ingin berbeda antara yang di destructuring dan ketika di panggil ?
// Bisa kita lakukan dengan alias -> keyword :
const { name: fullName, major: faculty } = students;

// Pemanggilannya adalah sebagai berikut.
console.log(fullName, faculty);