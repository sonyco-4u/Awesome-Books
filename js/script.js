
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');

const titleValue = titleInput.value;
const authorValue = authorInput.value;


const addBtn = document.querySelector('.add-btn');


const titlePop = document.querySelector('.title');
const authorPop = document.querySelector('.author');

addBtn.addEventListener('click', function() {

  titlePop.innerHTML = titleValue;
  authorPop.innerHTML = authorValue;
});
