// Library App
// Created using TOP 

"use strict";

let myLibrary = [ 
  {
    title: 'Gates Of Fire',
    author: 'Stephen Pressfield',
    pages: '490',
  },
  {
    title: 'A Game Of Thrones',
    author: 'George R.R. Martin',
    pages: '694',
  },
  {
    title: 'Is this WiFi Organic',
    author: 'Dave Farina',
    pages: '286',
  },
];

const form = document.getElementById("main-form");

const grid = document.querySelector('#bookTable');

form.addEventListener("submit", addBookToLibrary)


function Book(title, author, pages, read) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};


// handles the prototype push of a new book to the original array
function addBookToLibrary(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('alreadyread').checked;
    const submittedBook = new Book(title, author, pages, read);

    myLibrary.push(submittedBook);
    addCard();
    form.reset();
};

// handles building the initial library
function makeCard() {
    myLibrary.forEach((Object) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const bookTitle = document.createElement('h3');
      bookTitle.textContent = `${Object.title}`;

      const auth = document.createElement('p');
      auth.textContent = `${Object.author}`;

      const pageNum = document.createElement('p');
      pageNum.textContent = `Pages: ${Object.pages}`;

      const status = document.createElement('button');
      status.textContent = 'Read';
      status.classList.add('readstatus');

      const remove = document.createElement('button');
      remove.setAttribute('id', 'removebtn');
      remove.textContent = 'Remove';

      grid.appendChild(card);
      card.appendChild(bookTitle);
      card.appendChild(auth);
      card.appendChild(pageNum);
      card.appendChild(remove);
    });
}

//handles adding new cards
function addCard() {

    myLibrary.slice(myLibrary.length - 1).forEach((Object) => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = `${Object.title}`;
  
        const auth = document.createElement('p');
        auth.textContent = `${Object.author}`;
  
        const pageNum = document.createElement('p');
        pageNum.textContent = `Pages: ${Object.pages}`;
  
        const status = document.createElement('button');
        status.textContent = 'Read';
        status.classList.add('readstatus');
  
        const remove = document.createElement('button');
        remove.setAttribute('id', 'removebtn');
        remove.textContent = 'Remove';
  
        grid.appendChild(card);
        card.appendChild(bookTitle);
        card.appendChild(auth);
        card.appendChild(pageNum);
        card.appendChild(remove);
        console.log("addCard()");
      });
}

const remove = document.getElementsByTagName('removebtn');
// remove.addEventListener("removebtn", removeCard);

function removeCard(event) {
    if (event.taret.id == 'removebtn'){
        console.log("delete found");
    }
    else {
        console.log("other clicks found");
    }
}

window.onload = makeCard();