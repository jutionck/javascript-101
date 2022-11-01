// Tambah teman & validasi
let listFriendA = ['Ferdi'];
let listFriendB = ['Budi'];
const addFriendA = 'Ferdi';
const addFriendB = 'Bulan';
if (listFriendA.includes(addFriendA)) {
    console.log(`${addFriendA} sudah ada di listTemanA tidak boleh menambahkan nama yang sama`)
} else if (listFriendB.includes(addFriendB)) {
    console.log(`${addFriendB} sudah ada listTemanB tidak boleh menambahkan nama yang sama`)
} else {
    console.log(`Tambah teman A dengan nama ${addFriendA}`)
    console.log(`Tambah teman B dengan nama ${addFriendB}`)
    listFriendA.push(addFriendA)
    listFriendB.push(addFriendB)
    console.log(`Tambah teman berhasil`)
}

// Lihat daftar teman dengan minimal 2
if (listFriendA.length < 2 || listFriendB.length < 2) {
    console.log('Teman belum ada silahkan tambahkan...')
} else {
    console.log(`List teman A yang ada: ${listFriendA}`)
    console.log(`List teman B yang ada: ${listFriendB}`)
}

// Cek mutual
let mutualFriend = [];
listFriendA.push('Andi', 'Siwi', 'Ani', 'Fadli')
listFriendB.push('Andi', 'Fadli', 'Anggar', 'Adi')
for (let i = 0; i < listFriendA.length; i++) {
    for (let j = 0; j < listFriendB.length; j++) {
        if (listFriendA[i] === listFriendB[j]) {
           mutualFriend.push(listFriendA[i])
        }
    }
}
console.log(`Teman yang sama: ${mutualFriend}`)
