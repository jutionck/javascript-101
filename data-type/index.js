const fullName =  'Destry Faradila Nur\'avisa'
console.log(fullName)
console.log(typeof fullName)

console.log("4" - 3) // dianggap penggabungan dua data
console.log("4" * 3) // 12 ?
console.log(4 + 3)

const result = "4" * 3
console.log(typeof result) // number
console.log("4" + +3)

let number = 10;
number += 1; // 11
console.log(number) // 11
console.log(number++) // 11
console.log(number) // ini pasti 12
console.log(++number) // 12 + 1


// string manipulation
const bootcampName = 'Enigma Camp'

// toUpperCase()
console.log(bootcampName.toUpperCase()) // ENIGMA
// toLowerCase()
console.log(bootcampName.toLowerCase()) // enigma
// substr()
console.log(bootcampName.substr(1, 2)) // ni (index)
// replace()
console.log(bootcampName.replace("a", "no"))
console.log(bootcampName.replaceAll("a", "no"))
// length => panjang karakter
console.log(bootcampName.length)

// escape
// \' -> untuk memberikan petik 1
let quote = 'Hari ini adalah hari jum\'at'
console.log(quote)
// \n untuk memberikan baris baru
quote = 'Nama: Jution \n Alamat: Ragunan'
console.log(quote)
// \t untuk memberikan tab/spasi
quote = 'Nama: \t Jution'
console.log(quote)


// Array
let animals = []
animals[0] = 'kucing'
console.log(animals)

const animals2 = [] // tidak akan bisa di assign
animals2[0] = 'Burung' // tidak error tetapi ini di abaikan
console.log(animals2)

// push -> menambahkan element array di index berikut | merubah data (array) yang sudah ada.
animals.push("Burung", "Semut", "Kera", "Singa")
console.log(animals)
console.log(animals.length)
// pop -> menghapus last element | merubah data (array) yang sudah ada.
animals.pop()
console.log(animals)
console.log(animals.length)
animals.push("Macan")
console.log(animals)
// shift -> menghapus first element | merubah data (array) yang sudah ada.
animals.shift()
console.log(animals)
console.log(animals.length)
animals.push("Merpati")
console.log(animals)
// unsfhit -> menambahkan element array di awal | merubah data (array) yang sudah ada.
animals.unshift("Kuda", "Jerapah")
console.log(animals)
// splice -> menghapus element dengan index tertentu | merubah data (array) yang sudah ada.
animals.splice(0, 1, "Kalajengking") // akan menambahkan di element pertama
console.log(animals)
animalsClone = animals.slice(1,3) // shallow copy -> clone (tidak merubah aslinya)
console.log(animalsClone)

let fruits = ['Mangga', 'Jeruk', 'Apel']
console.log(fruits)
concatFruits = fruits.concat("Strawberry")
console.log(concatFruits)
sliceFruits = fruits.slice(0,1)
console.log(sliceFruits)
popFruits = fruits.pop()
console.log(popFruits)
popShift = fruits.shift()
console.log(popShift)

// array multidemensi
let matrixs = [[1,2,4], [2,2,3]]
console.log(matrixs.length)
console.log(matrixs[0].length)
console.log(matrixs)
matrixs.push([1,1,1])
console.log(matrixs)
matrixs.pop()
console.log(matrixs)
matrixs[0].pop()
console.log(matrixs)
