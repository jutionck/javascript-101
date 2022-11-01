function Car(){
    console.log('create an object');
}

// Taru sini benar
const ProductMethod = {
    info : function() {
        return `product id : ${this.productId}, 
        product Name : ${this.productName}`;
    }
}

const product1 = Product(1,'meja');
const product2 = Product(2,'board');

console.log(product1);
console.log(product2);

// ini jangan taru di bawah saat di panggil, karena pasti error
// const ProductMethod = {
//     info : function() {
//         return `product id : ${this.productId},
//         product Name : ${this.productName}`;
//     }
// }

function Product(id,name){
    let product = Object.create(ProductMethod); // harus di defined dulu
    product.productId = id;
    product.productName = name;
    return product;
}
