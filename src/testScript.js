const { lendBook, categorizeBooks, viewBorrowedBooks } = require("./events");

// Test lendBook
console.log(lendBook("1984", "George Orwell", "Charlie", "2025-04-10", "Fiction"));

// Test categorizeBooks
console.log("Categorized Books (Fiction):", categorizeBooks("Fiction"));

// Test viewBorrowedBooks by due date
console.log("Books due on 2025-04-01:", viewBorrowedBooks("dueDate", "2025-04-01"));

// Test viewBorrowedBooks by category
console.log("Science Books:", viewBorrowedBooks("category", "Science"));

// Test viewBorrowedBooks by borrower
console.log("Books borrowed by Alice:", viewBorrowedBooks("borrower", "Alice"));

