const { lendBook, viewBooks } = require("./books");

const testLendingSystem = () => {
    console.log("Running tests...");

    lendBook("Dune", "Frank Herbert", "Alice", "2025-04-05", "Science Fiction");
    lendBook("1984", "George Orwell", "Bob", "2025-04-10", "Fiction");

    const fictionBooks = viewBooks({ category: "Fiction" });
    console.log("Fiction Books:", fictionBooks);

    console.log("Tests completed successfully!");
};

testLendingSystem();
