const fs = require("fs");

const filePath = "./Data/books.json";

// Load existing data
const loadBooks = () => {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }
    return [];
};

// Save book data
const saveBooks = (books) => {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};

// Add a new book
const lendBook = (title, author, borrower, dueDate, category) => {
    const books = loadBooks();
    books.push({ title, author, borrower, dueDate, category });
    saveBooks(books);
    return "Book added successfully!";
};

// View books
const viewBooks = (filter = {}) => {
    let books = loadBooks();

    if (filter.category) {
        books = books.filter(book => book.category === filter.category);
    }
    if (filter.borrower) {
        books = books.filter(book => book.borrower === filter.borrower);
    }
    return books;
};

module.exports = { lendBook, viewBooks };
