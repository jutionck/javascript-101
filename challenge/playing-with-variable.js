let a,b;

a = '20';
b = 25;

console.log(a);
console.log(b);

// destructuring assigment
[a,b] = [b,Number(a)];

console.log(a);
console.log(b);
