let myLibrary = [
    { title: 'Dune', author: 'Frank Herbert', pages: '412', read: false },
    { title: 'The Hobbit', author: 'J. R. R. Tolkien', pages: '310', read: true },
    { title: '1Q84', author: 'Haruki Murakami', pages: '928', read: true },
    { title: 'Blood Meridian', author: 'Cormac McCarthy', pages: '337', read: true },
    { title: 'No Country for Old Men', author: 'Cormac McCarthy', pages: '320', read: false }
];

class Book {
    constructor(title, author, pages, read) {
        this.add = { title, author, pages, read };
    }
    addBookToLibrary() {
        myLibrary.push(this.add)
    }
}

let book = new Book('The Last', 'Henry', '500', false);
book.addBookToLibrary();

const cards = (() => {
    let display = document.querySelector('#display');
    myLibrary.forEach((object) => {

        console.log(Object.values(object))

        let card = document.createElement('p');
        card.classList.add('card');

        card.textContent = JSON.stringify(Object.values(object));

        display.appendChild(card);
    })
})();