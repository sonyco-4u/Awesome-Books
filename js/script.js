const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const addBtn = document.querySelector(".add-btn");

const titlePop = document.querySelector(".title");
const authorPop = document.querySelector(".author");
const container = document.getElementById("container");

// addBtn.addEventListener("click", function () {
//   titlePop.innerHTML = titleInput.value;
//   authorPop.innerHTML = authorInput.value;
// });
// console.log(titleValue);

addBtn.addEventListener("click", () => {
  // DECLARING VARIABLE
  let div = document.createElement("div");
  let paraTitle = document.createElement("p");
  let paraAuthor = document.createElement("p");
  let hori = document.createElement("hr");

  div.appendChild(hori);
  div.appendChild(paraTitle);
  div.appendChild(paraAuthor);
  let btn = document.createElement("button");
  btn.innerHTML = "Remove";
  btn.setAttribute("id", "remove-btn");

  btn.addEventListener("click", () => {
    div.style.display = "none";
  });

  div.appendChild(btn);
  paraTitle.textContent = titleInput.value;
  paraAuthor.textContent = authorInput.value;
  container.appendChild(div);

  // ADDING CONSTRUCTOR AND LOCAL STORAGE
  function MyObjects(title, author) {
    this.title = title;
    this.author = author;
  }
  const bookObj = new MyObjects(paraTitle.textContent, paraAuthor.textContent);
  localStorage.setItem("Title", paraTitle.textContent);
  localStorage.setItem("Author", paraAuthor.textContent);
  // end
});
