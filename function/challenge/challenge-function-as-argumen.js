function isEven(n) {
    return n % 2 === 0;
}

function filter(numbers, func) { // split s into two slices: even and odd
    let odd = [];
    let even = []; // genap
    for (let i = 0; i < numbers.length; i++) {
        if (func(numbers[i])) {
            even.push(numbers[i]);
        } else {
            odd.push(numbers[i]);
        }
    }
   return `Odd: ${odd}\nEven: ${even}`;
}

const numbers = [1,2,3,4,5,7];
console.log(filter(numbers, isEven))
