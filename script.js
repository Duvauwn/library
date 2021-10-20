// My Array of objects
let myLibrary = [
    {
        title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: '245 pages',
        read: false,
    },
    {
        title: 'The Shining', author: 'Hitchcock', pages: '322 pages',
        read: false,
    },
    {
        title: 'Lord of the Rings', author: 'J.R.R. Tolkien', pages: '456 pages',
        read: true,
    }
];

// The Book Object Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
// The Add Book Function
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary.push(book);
}
// functions for pop-up form
function openForm() {
    document.getElementById('bookForm').style.display = 'block';
}
function closeForm() {
    document.getElementById('bookForm').style.display = 'none';
}
let bookArray;

let submit = document.querySelector('#submit')
submit.addEventListener('click', function () {
    let titles = document.querySelector('#title');
    let authors = document.querySelector('#author');
    let page = document.querySelector('#pages');
    let reads = document.querySelector('#read');
    let stri = [{ 'title': titles.value, 'author': authors.value, 'pages': page.value, 'read': reads.value }];
    let newBook = JSON.stringify(stri);
    localStorage.setItem('newBook', newBook);
},
    function () {
        let obje = localStorage.getItem('newBook');
        bookArray = JSON.parse(obje);
        console.log(bookArray);
        myLibrary.push(bookArray[0]);
    })



//Creates a dynamic table that is able to change based on user input
let myTable = document.querySelector('#table');
let headers = ['Title', 'Author', 'Pages', 'Read', 'Remove'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
})
table.appendChild(headerRow);

let i = 0;

myLibrary.forEach(novel => {
    let row = document.createElement('tr');
    row.classList.add('data-' + i);
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.id = i;
    remove.textContent = 'Remove';
    i++;
    Object.values(novel).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    row.appendChild(remove);

    table.appendChild(row);
});

myTable.appendChild(table);

let del = document.querySelectorAll('.remove');
del.forEach(button => {
    let row1 = document.querySelector('.data-' + button.id);
    button.addEventListener('click', function () {
        myLibrary.splice(button.id, 1);
        table.removeChild(row1);
        localStorage.setItem('Library', JSON.stringify(myLibrary))
    })
})

//Implementing localStorage
let str = JSON.stringify(myLibrary);

localStorage.setItem('Library', str);

let obj = JSON.parse(str);