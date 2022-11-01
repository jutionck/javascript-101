const num2 = 1;
let odd=Number('');
let oddarray=[];
for(let c=0;c<num2;c++){
    if(c%2==1){
        odd=odd+c;
        oddarray.push(c);
    }
}
let listodd=oddarray.join(" + ");

let even=Number('');
let evenarray=[];
for(let h=1;evenarray.length<num2;h++){
    if(h%2==0){
        even=even+h;
        evenarray.push(h);
    }
}
let listeven=evenarray.join(" + ");

console.log(`Hasil penjumlahan bilangan ganjil : ${listodd} = ${odd}`);
console.log(`Hasil penjumlahan bilangan genap : ${listeven} = ${even}`);
