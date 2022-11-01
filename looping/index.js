// let sum = 0;
// const n = 100
//
// // looping from i = 1 to n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }
//
// console.log('sum:', sum);

// let sum = 0;
// const n = 100;
//
// // looping from i = n to 1
// // in each iteration, i is decreased by 1
// for(let i = n; i >= 1; i-- ) {
//     // adding i to sum in each iteration
//     sum += i; // sum = sum + i
// }
//
// console.log('sum:',sum);

// for(let i = 1; i <= 10; i++) {
//     if (i%2 === 1) {
//         continue
//     }
//     if (i > 8) {
//         break
//     }
//     console.log(`Number ${i}`)
// }

// const animals = ['Burung', 'Gajah', 'Rusa'];
// for (let i = 0; i < 3; i++) {
//     console.log(animals[i])
// }

// const animals = ['Burung', 'Gajah', 'Rusa'];
// for (let i = 0; i <= animals.length - 1; i++) {
//     console.log(animals[i])
// }

// const animals = ['Burung', 'Gajah', 'Rusa'];
// let i = 0;
// console.log(animals[i])
// let result = "";
//
// for (;animals[i];) {
//     result += animals[i] + ' ';
//     console.log(result)
//     i++;
// }
// console.log(result)

// let temp = ''
// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         temp += j + " "
//     }
//     temp += '\n'
// }
// console.log(temp)

// Kasus membandingkan nilai yang sama
// const numbers1 = [1,1,2];
// const numbers2 = [1,1,2,1];
// let count = 0;
//
// if(numbers1.length != numbers2.length) {
//     console.log('Ukuran array tidak sama')
// }
// else {
//     let result = false;
//     // comparing each element of array
//     for(let i=0; i<numbers1.length; i++) {
//         if(numbers1[i] != numbers2[i]) {
//             result = false
//         }
//         else {
//             result = true;
//         }
//     }
//     console.log(result);
// }

// let counter = 0;
// while (counter < 10) {
//     console.log(counter);
//     counter++; // ini harus ada jika tidak ingin infinity loop
// }

// Perulangan Array dengan while
// const animals = ['Burung', 'Gajah', 'Rusa'];
// let i = 0;
// let result = "";
//
// while (animals[i]) {
//     result += animals[i] + '\n';
//     i++;
// }
//
// console.log(result)

// const people = ['Budi', 'Jeremy', 'Sinta', 'Abdul'];
// for (let person of people) {
//     console.log(person)
//     // output
//     // Budi
//     // Jeremy
//     // Sinta
//     // Abdul
// }
// console.log(people.toString()) // Budi,Jeremy,Sinta,Abdul
//
// const joinPeople = people.join(", ")
// console.log(joinPeople) // Budi, Jeremy, Sinta, Abdul

// const number = [1, 3, 4, 5, 6, 9, 12, 15, 25, 125, 225, 300];
// let sum = 0;
//
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 3 === 0) {
//         sum += number[i]
//     }
// }
// console.log(sum)

// const number = 5;
// let counterOdd = 1;
// let totalOdd = 0;
// let resultOdd = '';
// while (true) {
//     if (counterOdd >= number) {
//         break
//     }
//
//     if (counterOdd % 2 === 1) {
//         totalOdd += counterOdd;
//         resultOdd += `${counterOdd},`
//     }
//     counterOdd++;
// }
// console.log(`Ganjil: ${resultOdd} = ${totalOdd}`)
// let counterEven = 2;
// let i = 0;
// let totalEven = 0;
// let resultEven = '';
// while (true) {
//     if (i >= number) {
//         break
//     }
//
//     if (counterEven % 2 === 0) {
//         totalEven += counterEven;
//         i++;
//         resultEven += `${counterEven},`
//     }
//     counterEven++;
// }
// console.log(`Genap: ${resultEven} = ${totalEven}`)

// const number = 20;
// for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//         console.log(i)
//     }
// }

// const words = 'KATAK';
// const wordsSplit = words.split('');
// const wordsLenght = wordsSplit.length;
// for (let i = 0; i < wordsLenght/2; i++) {
//     if (wordsSplit[i] !== wordsSplit[wordsLenght-1-i]) {
//         console.log(false)
//         break;
//     }
// }
// console.log(true)

