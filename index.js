const myLibrary = [];

function Book(book_name, author, page_count, read) {
    this.book_name = book_name;
    this.author = author;
    this.page_count = page_count;
    this.read = read;
}

const container = document.querySelector(".container");
const modal = document.getElementById("myModal");
const showFormBtn = document.getElementById("showFormBtn");
const closeBtn = document.getElementsByClassName("close")[0];

function addBookToLibrary() {
    modal.style.display = "block";
    const form = document.getElementById("addBookForm");
    form.style.display = "block";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

    

        const book_name = document.getElementById("book_name").value;
        const author = document.getElementById("author").value;
        const page_count = document.getElementById("page_count").value;
        const read = document.getElementById("read").checked ? "Yes" : "No";

        const new_book = new Book(book_name, author, page_count, read);
        myLibrary.push(new_book);

        renderBook(new_book); // Render the new book card

        modal.style.display = "none"; // Hide the modal after adding the book
        form.reset(); // Reset the form fields
    });
}

function renderBook(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = book.book_name;

  const h3 = document.createElement("h3");
  h3.textContent = book.author;

  const p = document.createElement("p");
  p.textContent = book.page_count;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", function() {
      removeBook(card, book);
  });

  const readSwitchLabel = document.createElement("label");
  readSwitchLabel.classList.add("switch");
  const readSwitchInput = document.createElement("input");
  readSwitchInput.type = "checkbox";
  readSwitchInput.checked = book.read === "Yes"; // Set initial state based on book.read value
  readSwitchInput.addEventListener("change", function() {
      book.read = this.checked ? "Yes" : "No"; // Update book status based on switch state
  });
  const readSwitchSpan = document.createElement("span");
  readSwitchSpan.classList.add("slider", "round");
  readSwitchLabel.appendChild(readSwitchInput);
  readSwitchLabel.appendChild(readSwitchSpan);

  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(readSwitchLabel);
  card.appendChild(removeBtn);
  container.appendChild(card);
}


function removebookbtn(card, book) {
  container.removeChild(card);
  const index = myLibrary.indexOf(book);
  if (index !== -1) {
      myLibrary.splice(index, 1);
  }

}

// When the user clicks on the button, open the modal
showFormBtn.addEventListener("click", addBookToLibrary);

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
