const BookService = require('../service/book.service');
const Book = require('../model/book');

const main = async () => {
    try {
        console.log(`Enigma Perpustakaan`);
        const bookService = new BookService();
        const book01 = new Book('B001');
        const book02 = new Book('B001', 'Book 01', 'PT ABC', 2022, 'Juju');
        const add01 = await bookService.add(book02);
        console.log(add01);
        const list = await bookService.list();
        console.log(list);
        const findBook01 = await bookService.findByTitle('Book 01');
        console.log(findBook01);
        const delBook01 = await bookService.delete('B001')
        console.log(delBook01);
        const findBook02 = await bookService.findByTitle('Book 01');
        console.log(findBook02);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {main};
