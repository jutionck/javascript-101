// kaya kunci prototype -> akan membuat sebuah object dari sebuah function

// function car() {}
// const car01 = car.prototype;
// const car03 = {};
// console.log(car03);
// console.log(car01); // object kosong
// car01.id = 1;
// car01.name = 'Aavanza';
//
// console.log(car01); // { id: 1, name: 'Aavanza' }
// const car02 = Object.create(car.prototype);
// console.log(car02); // object car kosong
// car02.id = 1;
// car02.name = 'Terios';
// console.log(car02); // car { id: 1, name: 'Terios' }

// class Car {
//     constructor(brand = 'Default Brand', name = 'Default Name') {
//         console.log('Akan di jalankan pertama kali');
//         this.brand = brand;
//         this.name = name
//     }
//
//     static toString(car) {
//         return `This ${car.brand} has a name ${car.name}`;
//     }
// }
//
// const avanza = new Car('Toyota', 'Avanza');
// console.log(avanza);
// console.log(Car.toString(avanza))
// console.log(avanza.Car())

// Private property
// class Car {
//     constructor(brand = 'Default Brand', name = 'Default Name', fuel = 0) {
//         console.log('Akan di jalankan pertama kali');
//         this.brand = brand;
//         this.name = name
//         let _fuel = fuel;
//
//         // peletakan di dalam constructor
//         this.setFuel = newFuel => {
//             console.log(`Set fuel from ${this._fuel} to ${newFuel}`);
//             _fuel = newFuel;
//         }
//
//         this.printInfo = () => {
//             return `This ${this.brand} has a name ${this.name} and fuel ${_fuel}`;
//         }
//     }
// }
//
// const avanza = new Car('Toyota', 'Avanza', 0);
// avanza._fuel = 20// gak akan ngaruh
// console.log('before:',avanza.printInfo())
// avanza.setFuel(20);
// console.log('after:',avanza.printInfo())
