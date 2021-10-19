
// My Array of objects
let myLibrary = [
    {
        title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: '245 pages',
        read: 'not read yet',
    },
    {
        title: 'The Shining', author: 'Hitchcock', pages: '322 pages',
        read: 'not read yet',
    },
    {
        title: 'Lord of the Rings', author: 'J.R.R. Tolkien', pages: '456 pages',
        read: 'read it',
    }
];
// The Book Object Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        //this.info = function () {
        //    return title + ' by ' + author + ', ' + pages + ', ' + read;
        //};
    }
}
// The Add Book Function
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
// functions for pop-up form
function openForm() {
    document.getElementById('bookForm').style.display = 'block';
}
function closeForm() {
    document.getElementById('bookForm').style.display = 'none';
}
const form = document.getElementById('form-container');
form.addEventListener('submit', function () {
    console.log('testin');
})

addBookToLibrary('test', 'me', '23 pages', 'read it');

//Creates a table that displays my array of objects
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
    })
})