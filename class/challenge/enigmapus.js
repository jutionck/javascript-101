/**
 * Ani dan Anton adalah mahasiswa dari Enigma Academy
 * mereka diangkat menjadi seorang perpustakawan di enigma univeristy
 * mereka mendapat tugas membuat aplikasi untuk menambahkan buku
 * buku memiliki info code,title,publisher,publicationyear,dan author
 * kriteria :
 * - buat class buku dengan constructor dan propertynya
 * - lalu buatlah sebuah class yang mempunyai method add(untuk menambahkan buku), getAll(untuk melihat semua buku), dan searchByTitle(untuk mencari buku) , dan deleted(untuk menghpus buku)
 * - buatlah validasi dimana ketika buku kosong , buku ditambahkan ,buku di search tidak ditemukan
 * - tambahkan minimal 5 buku
 */

class Book {
    constructor(code, title, publisher, publicationYear, author
    ) {
        this.code = code;
        this.title = title;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.author = author;
    }
}

const commonResponse = {
    successCode: '00',
    successMessage: 'Success',
    defaultErrorCode: 'XX',
    defaultErrorMessage: 'Something went wrong',
    dataExist: 'Data already exists',
    dataNotExist: 'Data not exist',
    isRequire: 'Can\'t add, there is missing property',
}

class Response {
    constructor() {
        this.response = {
            code: '',
            message: '',
            data: ''
        }
    }

    successMessage(data, msg = commonResponse.successMessage) {
        this.response.code = commonResponse.successCode;
        this.response.message = msg;
        this.response.data = data;
        return this.response;
    }

    errorMessage(msg = commonResponse.defaultErrorMessage) {
        this.response.code = commonResponse.defaultErrorCode;
        this.response.message = msg;
        this.response.data = null;
        return this.response;
    }
}

class Validate {
    constructor() {}
    isExist(books) {
        if (books.length === 0) {
            return false;
        }
        return true;
    }

    require(book) {
        if (!book.code || !book.title || !book.publisher || !book.publicationYear || !book.author) {
            return false;
        }
        return true;
    }
}

class BookService extends Validate{
    constructor() {
        super();
        this.books = [];
        this.response = new Response();
    }

    add(book) {
        if (this.require(book)) {
            this.books.push(book);
            return this.response.successMessage(book)
        } else {
            return this.response.errorMessage(commonResponse.isRequire);
        }
    }

    list() {
        if (this.isExist(this.books)) {
            return this.response.successMessage(this.books)
        } else {
            return this.response.errorMessage(commonResponse.dataNotExist);
        }
    }

    findByTitle(title) {
        for (let book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                return this.response.successMessage(book);
            } else {
                return this.response.errorMessage(`${title} not found`);
            }
        }
    }

    delete(code) {
        if (this.isExist(this.books)){
            let i = 0;
            for (let book of this.books){
                if (book.code.toLowerCase() == code.toLowerCase()){
                    this.books.splice(i, 1);
                    return this.response.successMessage(code, 'Success deleted');
                }
                i++;
            }
        } else {
            return this.response.errorMessage(`${code} not found`);
        }
    }
}

// const main = () => {
//     console.log(`Enigma Perpustakaan`);
//     const bookService = new BookService();
//     console.log(`-=========== Tambah Buku`)
//     const book01 = new Book('B001');
//     const book02 = new Book('B001', 'Book 01', 'PT ABC', 2022, 'Juju');
//     const book03 = new Book('B002', 'Book 02', 'PT XYZ', 2022, 'Bulan');
//     const add01 = bookService.add(book02);
//     const add02 = bookService.add(book03);
//     console.log(add01);
//     console.log(add02);
//     console.log(`-=========== List Buku`);
//     const list = bookService.list();
//     console.log(list);
//     console.log(`-=========== Filter Buku Berdasarkan Judul`);
//     const findBook01 = bookService.findByTitle('book 0');
//     console.log(findBook01);
//     console.log(`-=========== Hapus Buku Berdasarkan Code`);
//     const delBook01 = bookService.delete('B001')
//     console.log(delBook01);
//     console.log(`-=========== Cari Buku Yang Telah Di Hapus`);
//     const findBook02 = bookService.findByTitle('book 01');
//     console.log(findBook02);
// }
//
// main();

