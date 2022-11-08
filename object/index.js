const student = {
  id: 1,
  name: 'Bulan',
  age: 16,
  isGraduate: false,
  address: {
    city: 'Dewata',
    province: 'Bali'
  }
}

function getInfo(address) {
  const job = this.isGraduate ? 'Programmer' : 'Waiting Graduate';
  console.log(`${this.name} is in status ${job}`);
  console.log(this.address);
  console.log(this.address.city);
  console.log(`My address is ${address.city}, ${address.province}`); // error
}

// getInfo(); // undefined
// kita harus menggunakan method bawaan nya dahulu bisa menggunakan 'call' atau 'apply'
getInfo.bind(student)(student.address);
getInfo.bind(student)([student.address]);
// info();
// getInfo.apply(student, [student.address]); // cara kirim argumen menggunakan apply harus []

// student.getInfo();
// const otherStudent = {
//   id: 1,
//   major: 'Teknik Informatika'
// }

// // otherStudent = student; // ERROR
// otherStudent.__proto__ = student; // cara untuk mengambil object yang sudah ada, goal: menjadi nested object
// console.log(otherStudent);
// otherStudent.getInfo();

// Mencetak mahasiswa yang tidak ada kelas
// const absent = [
//     {
//         name: "Fadli",
//         npm: "12345",
//         kelas: true
//     },
//     {
//         name: "Suci",
//         npm: "11223",
//         kelas: true
//     },
//     {
//         name: "Andara",
//         npm: "11122",
//         kelas: true
//     },
//     {
//         name: "Nagita",
//         npm: "22211",
//         kelas: true
//     },
//     {
//         name: "Rafathar",
//         npm: "22233",
//     }
// ];

// absent.forEach(mhs => {
//     if (mhs.kelas === undefined) {
//         console.log('Mahasiswa tidak ada kelas')
//         // akan muncuk log dua kali karena ada dua mhs yang tidak ada kelas
//         // bagaimana jika yang tercetak hanya 1 saja?
//     }
// });

// Solusi
// absent.some(element => {
//     if (element.kelas == undefined){
//         console.log('Mahasiswa tidak ada kelas')
//         return 1;
//     }
// });

// const user = {
//     firstName: 'Rifqi',
//     lastName: 'Ramadhan',
//     age: 22,
//     isActive: true,
//     sayHello(name) {
//         console.log(`Hello ${name}`);
//     },
//     // dengan arrow function
//     sayHello2: (name) => {
//         console.log(`Hello ${name}`);
//     }
// }
//
// user.sayHello('Jution')
// user.sayHello2('Bulan')

// const routes = {
//     POST_LOGIN: '/auth/login',
//     RESET_LOGIN: '/auth/reset',
//     LOGOUT: '/auth/logout',
//     FORGOT_PASSWORD: '/auth/forgot',
// }
//
// const routeKey = Object.keys(routes);
// const routeAssign = Object.assign(routes);
// const routeDestructuring = {...routes} // kekurangan ketika ada nested object
// console.log(routeKey)
// console.log(routeAssign)
// console.log(routeDestructuring)

// Object Method
// const student = {
//     id: '123',
//     name: 'Bulan',
//     major: 'Teknik Informatika',
//     isGraduate: false,
//     address : {
//         street: 'Jl. H Dahlan No 75',
//         districts: 'Pasar Minggu',
//         province: 'Jakarta Selatan'
//     },
//     getInfo() {
//         const job = this.isGraduate ? 'Programmer' : 'Waiting Graduate';
//         console.log(`${this.name} is in status ${job}`);
//     }
// }

// const bulan = student;
// bulan.isGraduate = true;
// bulan.getInfo();

// const bulan = Object.create(student);
// bulan.isGraduate = true;
// bulan.getInfo();
//
// const studentKeys = Object.keys(student);
// const studentKeyLength = Object.keys(student).length;
// console.log(studentKeys);
// console.log(studentKeyLength);
//
// const studentValue = Object.values(student);
// console.log(studentValue);

// const car = {
//     name: 'terrios',
//     color: 'white',
//     seats: {
//         count: 4,
//         type: 'leather'
//     }
// }
// const newCar = {...car, seats: {...car.seats}}
// newCar.name = 'Avanza';
// newCar.color = 'black';
// newCar.seats.type = 'plastic';

// console.log(`newCar:${JSON.stringify(newCar)}`)
// console.log('car:',car)

