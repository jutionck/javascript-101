const Validate = require('../utils/validate');
const {Response, commonResponse} = require('../utils/response');

class BookService extends Validate{
    constructor() {
        super();
        this.books = [];
        this.response = new Response();
    }

    add(book) {
        console.log(`[ADD] Tambah buku.....`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.require(book)) {
                    this.books.push(book);
                    resolve(this.response.successMessage(book));
                } else {
                    reject(this.response.errorMessage(commonResponse.isRequire));
                }
            }, 1000)
        })
    }

    list() {
        console.log(`[LIST] Melihat list buku.....`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isExist(this.books)) {
                    resolve(this.response.successMessage(this.books));
                } else {
                    reject(this.response.errorMessage(commonResponse.dataNotExist));
                }
            }, 1000)
        })
    }

    findByTitle(title) {
        console.log(`[LIST] Mencari buku dengan judul ${title}`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const book = this.books.filter((book) => book.title.toLowerCase() === title.toLowerCase());
                if (book.length === 0) {
                    reject(this.response.errorMessage(`${title} not found`));
                } else {
                    resolve(this.response.successMessage(book));
                }
            }, 1000)
        })
    }

    delete(code) {
        console.log(`[LIST] Menghapus buku dengan code ${code}`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.isExist(this.books)){
                    let i = 0;
                    for (let book of this.books){
                        if (book.code.toLowerCase() === code.toLowerCase()){
                            this.books.splice(i, 1);
                            resolve(this.response.successMessage(code, 'Success deleted'));
                        }
                        i++;
                    }
                } else {
                    reject(this.response.errorMessage(`${code} not found`));
                }
            })
        })
    }
}

module.exports = BookService;
