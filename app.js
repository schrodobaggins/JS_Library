// Library App
// Created using TOP 
// Michael Schroeder

let myLibrary = [];



function Book(title, author, pages, read, id) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function populateLibrary() {
    myLibrary.push(new Book('Ulysses', 'James Joyce', '347', 'yes', 0));
    myLibrary.push(new Book('Don Quixote', 'Miguel de Cervantes', '500', 'yes', 1));
    myLibrary.push(new Book('Moby Dick', 'Herman Melville', '500', 'no', 2));
    console.log("populated library");
}


// TODO: Write a function that loops through the array and displays each 
// book on the page. You can display them in some sort of table, or each on 
// their own “card”. It might help for now to manually add a few books to your 
// array so you can see the display.
function addBookToLibrary() {
    // do stuff here
    var html = "<table border='1|1'>";
    
    for (var i = 0; i < myLibrary.length; i++) {
        html+="<tr>";
        html+="<td>"+myLibrary[i].title+"</td>";
        html+="<td>"+myLibrary[i].author+"</td>";
        html+="<td>"+myLibrary[i].pages+"</td>";
        html+="<td>"+myLibrary[i].read+"</td>";
        html+="</tr>";
        myLibrary[i].id++;
}
    html+="</table>";
    document.getElementById("box").innerHTML = html;
}

function removeBook() {
    // do stuff here
}

window.onload = populateLibrary();
addBookToLibrary();