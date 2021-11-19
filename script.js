let myLibrary = [
    {
        title: 'Dune', author: 'Frank Herbert', pages: '412', read: 'yes',
    },
    {
        title: 'The Hobbit', author: 'J. R. R. Tolkien', pages: '310', read: 'no'
    },
    {
        title: '1Q84', author: 'Haruki Murakami', pages: '928', read: 'no'
    },
    {
        title: 'Blood Meridian', author: 'Cormac McCarthy', pages: '337', read: 'yes'
    },
    {
        title: 'No Country for Old Men', author: 'Cormac McCarthy', pages: '320', read: 'yes'
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.add = { title, author, pages, read };
    }
    addBookToLibrary() {
        myLibrary.push(this.add);
    }
    changeReadStatus() {

    }

}

function updateDisplay(i) {
    let content = document.createElement('p');
    content.classList.add('content');

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.setAttribute('id', i);
    remove.setAttribute('type', 'button');
    remove.textContent = 'remove';

    let change = document.createElement('button');
    change.textContent = 'Change';
    change.addEventListener('click', function () {
        console.log(myLibrary[i]['read'])
        if (change.parentNode.childNodes[1].textContent == 'yes') {
            change.parentNode.childNodes[1].textContent = 'no';
            myLibrary[i]['read'] = 'no';
        }
        else if (change.parentNode.childNodes[1].textContent == 'no') {
            change.parentNode.childNodes[1].textContent = 'yes';
            myLibrary[i]['read'] = 'yes';
        }
    })

    for (let property in myLibrary[i]) {


        let box = document.createElement('div');
        let head = document.createElement('h2');
        let lower = document.createElement('p');

        head.textContent = property;
        lower.textContent = myLibrary[i][property];

        head.classList.add('head');
        lower.classList.add('lower');

        content.setAttribute('data-index', i)

        box.appendChild(head);
        box.appendChild(lower);

        if (property == 'read') {
            box.appendChild(change);
        }

        box.classList.add('box');

        content.appendChild(box);
    }

    content.appendChild(remove);
    display.appendChild(content);

    remove.addEventListener('click', function () {
        myLibrary.splice(remove.id, 1)
        display.innerHTML = ''
        myLibrary.forEach(function (item, index) {
            updateDisplay(index);
        })
    })

}

const createDisplay = (() => {
    myLibrary.forEach(function (item, i) {

        updateDisplay(i);
    })
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
        let r = document.querySelectorAll('.read');
        let read;
        r.forEach(radio => {
            if (radio.checked == true) {
                return read = radio.value;
            }
            else if (radio.checked == false) {
                return;
            }
        })

        let book = new Book(t.value, a.value, p.value, read);
        book.addBookToLibrary();

        closeForm();
        updateDisplay(myLibrary.length - 1);

    }
})();