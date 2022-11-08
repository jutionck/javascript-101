let numbers = [1, 2, 3, [4,5,6]];
let nums = [...numbers];
nums[0] = 5;
nums[3][0] = 1; // ini pasti akan berubah, solusinya sebenernya sama seperti nested object

console.log('numbers', numbers);
console.log('nums', nums);

// Destructuring Array
let enigma = 'Camp';
let camp = 'Enigma';

// Sebelum
console.log(enigma, camp);

[enigma, camp] = [camp, enigma];

// Setelah
console.log(enigma, camp);