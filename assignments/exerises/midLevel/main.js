function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book = new Book(" A Tale Of Two Cities"," Charles Dickens", "1859")
const book1 = new Book(" Pride and Prejudice","Jane Austen", "1813")
const book2 = new Book(" The Adventures of Tom Sawyer"," Mark Twain", "1876 ")

Book.prototype.details = function() {
    console.log("Title : " + this.title + "  Author: " + this.author + "  Year : " + this.year)
}

book.details();
book1.details();
book2.details();