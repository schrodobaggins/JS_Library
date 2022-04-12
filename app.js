// Library App
// Created using TOP 
// Michael Schroeder

let myLibrary = [];



function Book(title, author, pages, id) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages; 
  this.id = id;
}

function populateLibrary() {
    myLibrary.push(new Book('testTitle1', 'testAuthor1', '500', 0));
    myLibrary.push(new Book('testTitle2', 'testAuthor2', '500', 1));
    myLibrary.push(new Book('testTitle3', 'testAuthor3', '500', 2));
    console.log("populated library");
  }

 populateLibrary();


 
// TODO: Write a function that loops through the array and displays each 
// book on the page. You can display them in some sort of table, or each on 
// their own “card”. It might help for now to manually add a few books to your 
// array so you can see the display.
function addBookToLibrary() {
    // do stuff here
}



function removeBookfromLibrary() {
    // do stuff here
}