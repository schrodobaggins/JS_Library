// Library App
// Created using TOP 
// Michael Schroeder
"use strict";

let myLibrary = [];

const submit = document.getElementById('mainform');


submit.addEventListener('click', event => {
    const { target } = event;
    // const { value } = target;
    if(!target.matches('button')) {
        return;
      }
      console.log('drawing library');
      drawLibrary();
});

function Book(title, author, pages, read) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


// forcing a few test books to display table and test function addBookToLibrary
function populateLibrary() {
    myLibrary.push(new Book('Ulysses', 'James Joyce', '347', 'yes'));
    myLibrary.push(new Book('Don Quixote', 'Miguel de Cervantes', '500', 'yes'));
    myLibrary.push(new Book('Moby Dick', 'Herman Melville', '500', 'no'));
}

function addBookToLibrary() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('alreadyread').checked;

    // e.preventDefault();
    let submittedBook = new Book(title, author, pages, read);
    myLibrary.push(submittedBook);
    console.log('pushing');
    drawLibrary();
}

// draws the table and adds all array elements to the table
function drawLibrary() {
    let html = "<table border='1|1'>";
    
    for (let i = 0; i < myLibrary.length; i++) {
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
window.onload = drawLibrary();