const { lendBook, viewBooks } = require("./src/books");

const testLendingSystem = () => {
    
   

    lendBook("book1", "abc", "xyz", "2026-07-04", "Fiction");

    lendBook("1999", "abc", "xyz", "2026-05-9", "NonFiction");

    const fictionBooks = viewBooks({ category: "Fiction" });

    console.log("Fiction Books:", fictionBooks);

   
};

testLendingSystem();
