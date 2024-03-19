const myLibrary = [];

function Book(book_name, author, page_count, read) {
  this.book_name = book_name;
  this.author = author;
  this.page_count = page_count;
  this.read = read;
}


const container = document.querySelector(".container");


function addBookToLibrary() {
  book_name = prompt("What is the name of the book you want to add?");
  author = prompt("Who wrote the book you want to add?");
  page_count = prompt("What is the total number of pates of the book you want to add?");
  read = prompt("Did you read the book you want to add yet?");
  const new_book = new Book(book_name, author, page_count, read);
  myLibrary.push(new_book);

  const card = document.createElement("div");
  card.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = new_book.book_name;

  const h3 = document.createElement("h3");
  h3.textContent = new_book.author;

  const p = document.createElement("p");
  p.textContent = new_book.page_count;

  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(p);
  container.appendChild(card);
}


// const new_book_button = document.querySelector("add_book_button");
// new_book_button.classList.add("new_book_button");
// new_book_button.textContent = "Add New Book";
// new_book_button.addEventListener("click", () => {
//   addBookToLibrary();
// })

// container.appendChild(new_book_button);