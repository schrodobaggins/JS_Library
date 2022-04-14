// Library App
// Created using TOP 

"use strict";

let myLibrary = [ 
  {
    title: 'Gates Of Fire',
    author: 'Stephen Pressfield',
    pages: '490',
    read: false,
    id: 0
  },
  {
    title: 'A Game Of Thrones',
    author: 'George R.R. Martin',
    pages: '694',
    read: true,
    id: 1
  },
  {
    title: 'Is this WiFi Organic',
    author: 'Dave Farina',
    pages: '286',
    read: false,
    id: 2
  },
];
const id = 3;
const form = document.getElementById("main-form");
const body = document.querySelector('body');
const grid = document.querySelector('#bookTable');

form.addEventListener("submit", addBookToLibrary)


function Book(title, author, pages, read, id) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
};


// handles the prototype push of a new book to the original array
function addBookToLibrary(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('alreadyread').checked;
    const submittedBook = new Book(title, author, pages, read, id++);

    myLibrary.push(submittedBook);
    console.log(submittedBook);
    addCard();
    form.reset();
};

// handles building the initial library
function makeCard() {
    
    myLibrary.forEach((Object) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const completionStatus = document.createElement('h3');
      completionStatus.setAttribute('id', 'readicon');
      if(Object.read == false){
          completionStatus.textContent = `❌ `
      } else {
          completionStatus.textContent = `✅ `
      }

      const bookTitle = document.createElement('h3');
      bookTitle.textContent = `${Object.title}`;

      const auth = document.createElement('p');
      auth.textContent = `${Object.author}`;

      const pageNum = document.createElement('p');
      pageNum.textContent = `Pages: ${Object.pages}`;

      // const status = document.createElement('button');
      // status.textContent = 'Read';
      // status.classList.add('readstatus');

      const remove = document.createElement('button');
      remove.setAttribute('id', 'removebtn');
      remove.textContent = 'Remove';

      grid.appendChild(card);
      card.appendChild(completionStatus);
      card.appendChild(bookTitle);
      card.appendChild(auth);
      card.appendChild(pageNum);
      // card.appendChild(status);
      card.appendChild(remove);
    });
}

//handles adding new cards
function addCard() {

    myLibrary.slice(myLibrary.length - 1).forEach((Object) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const completionStatus = document.createElement('h3');
        completionStatus.setAttribute('id', 'readicon');
        if(Object.read == false){
            completionStatus.textContent = `❌ `
        } else {
            completionStatus.textContent = `✅ `
        }

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = `${Object.title}`;
  
        const auth = document.createElement('p');
        auth.textContent = `${Object.author}`;
  
        const pageNum = document.createElement('p');
        pageNum.textContent = `Pages: ${Object.pages}`;
  
        // const status = document.createElement('button');
        // status.textContent = 'Read';
        // status.classList.add('readstatus');
  
        const remove = document.createElement('button');
        remove.setAttribute('id', 'removebtn');
        remove.textContent = 'Remove';
  
        grid.appendChild(card);
        card.appendChild(completionStatus);
        card.appendChild(bookTitle);
        card.appendChild(auth);
        card.appendChild(pageNum);
        // card.appendChild(status);
        card.appendChild(remove);
        console.log("addCard()");
      });
}

// const remove = document.getElementById("delete");

body.addEventListener('click', (event) => delReadButton(event));

function delReadButton(event) {
  let element = document.getElementById("readicon");
    // TODO: Add read/unread checkbox
    if (event.target.id == "readicon"){
        if(element.textContent == `❌ `){
          console.log("read");
          element.textContent = `✅ `
        } else {
          element.textContent = `❌ `
          console.log("unread");
        }
    }
    else if (event.target.id == "removebtn") {
        console.log("deleting..");
        event.target.parentElement.remove();

    }
}

window.onload = makeCard();