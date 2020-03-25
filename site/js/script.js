const right = document.querySelector(".header-right");
const table = document.querySelector(".table");
const block = document.querySelector(".block");

right.addEventListener("mouseover", () => {
  block.style.display = "none";
  table.style.display = "flex";
});

right.addEventListener("mouseout", () => {
  block.style.display = "flex";
  table.style.display = "none";
});


const name = document.querySelector(".product-title");
const form = document.querySelector('.form');

name.addEventListener('click', () => {
  form.classList.add('open');
});

  $( function() {
    $( ".block" ).sortable();
    $( ".block" ).disableSelection();
  } );