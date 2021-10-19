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

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return title + ' by ' + author + ', ' + pages + ', ' + read;
    }
}
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
function openForm() {
    document.getElementById('bookForm').style.display = 'block';
}
function closeForm() {
    document.getElementById('bookForm').style.display = 'none';
}
addBookToLibrary('test', 'me', '23 pages', 'read it');

let books = document.querySelector('#books');

let html = '<table border="1|1">';
html += '<thead>';
html += '<th>Title</th>';
html += '<th>Author</th>';
html += '<th>Pages</th>';
html += '<th>Read</th>';
html += '</thead>';
for (let i = 0; i < myLibrary.length; i++) {
    html += "<tr>";
    html += "<td>" + myLibrary[i].title + "</td>";
    html += "<td>" + myLibrary[i].author + "</td>";
    html += "<td>" + myLibrary[i].pages + "</td>";
    html += '<td>' + myLibrary[i].read + '</td>';
    html += '<td>' + '<button>' + 'Remove' + '</button>' + '</td>';

    html += "</tr>";
}
html += '</table>';
document.getElementById('books').innerHTML = html;