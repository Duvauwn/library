let myLibrary = [
    {
        title: 'Dune', author: 'Frank Herbert', pages: '412', read: false
    },
    {
        title: 'The Hobbit', author: 'J. R. R. Tolkien', pages: '310', read: true
    },
    {
        title: '1Q84', author: 'Haruki Murakami', pages: '928', read: true
    },
    {
        title: 'Blood Meridian', author: 'Cormac McCarthy', pages: '337', read: true
    },
    {
        title: 'No Country for Old Men', author: 'Cormac McCarthy', pages: '320', read: false
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.add = { title, author, pages, read };
    }
    addBookToLibrary() {
        myLibrary.push(this.add);
    }
}

const creatDisplay = (() => {
    let display = document.querySelector('#display');
    for (let i = 0; i < myLibrary.length; i++) {


        let content = document.createElement('p');
        content.classList.add('content');


        for (let property in myLibrary[i]) {

            let box = document.createElement('div');
            let head = document.createElement('h2');
            let lower = document.createElement('p');

            head.textContent = property;
            lower.textContent = myLibrary[i][property];

            head.classList.add('head');
            lower.classList.add('lower');

            box.appendChild(head);
            box.appendChild(lower);
            box.classList.add('box');
            content.appendChild(box);
            display.appendChild(content);
        }
    }
})();


const addNew = (() => {

    let newBook = document.querySelector('#new');

    newBook.addEventListener('click', openForm);

    function openForm() {
        document.getElementById('myForm').style.display = 'block';
    }


})();

function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}

const cancel = (() => {
    let close = document.querySelector('#close');

    close.addEventListener('click', closeForm);


})();

const addition = (() => {

    let submit = document.querySelector('#submit');

    submit.addEventListener('click', submitForm);

    function submitForm() {
        let t = document.querySelector('#title');
        let a = document.querySelector('#author');
        let p = document.querySelector('#pages');
        let r = document.querySelector('#read');

        let book = new Book(t.value, a.value, p.value, r.value);
        book.addBookToLibrary();
        closeForm();
        updateDisplay();

    }

    function updateDisplay() {
        let content = document.createElement('p');
        content.classList.add('content');


        for (let property in myLibrary[myLibrary.length - 1]) {

            let box = document.createElement('div');
            let head = document.createElement('h2');
            let lower = document.createElement('p');

            head.textContent = property;
            lower.textContent = myLibrary[myLibrary.length - 1][property];

            head.classList.add('head');
            lower.classList.add('lower');

            box.appendChild(head);
            box.appendChild(lower);
            box.classList.add('box');
            content.appendChild(box);
            display.appendChild(content);
        }
    }

})();