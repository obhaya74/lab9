const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/events.json");

// Function to load books data
function loadBooks() {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
}

// Function to save books data
function saveBooks(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// 1. Lend a book
function lendBook(title, author, borrower, dueDate, category) {
  let books = loadBooks();
  books.push({ title, author, borrower, dueDate, category });
  saveBooks(books);
  return "Book lent successfully!";
}

// 2. Categorize books
function categorizeBooks(category) {
  let books = loadBooks();
  return books.filter(book => book.category === category);
}

// 3. View borrowed books (with optional filters)
function viewBorrowedBooks(filterType, filterValue) {
  let books = loadBooks();
  if (filterType === "dueDate") {
    return books.filter(book => book.dueDate === filterValue);
  } else if (filterType === "category") {
    return books.filter(book => book.category === filterValue);
  } else if (filterType === "borrower") {
    return books.filter(book => book.borrower === filterValue);
  }
  return books;
}

module.exports = { lendBook, categorizeBooks, viewBorrowedBooks };


