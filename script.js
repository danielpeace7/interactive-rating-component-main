const getNumber = document.getElementsByClassName('number');
const select = document.getElementById('rating');
const submit = document.getElementById('submit');
const hidden = document.querySelector('.hidden');
const card = document.querySelector('.main-card')

for (let i = 0; i < getNumber.length; i++) {
  getNumber[i].addEventListener('click', getRating);  
}

var getValue;

function getRating(e) {  
  getValue = e.target.value
  // console.log(getValue);
  rating.innerHTML = getValue;
}

submit.addEventListener('click', displayRating);

function displayRating() {
  if(hidden.classList.contains("hidden")) {
    hidden.classList.remove("hidden");
    card.style.display = "none";
  } else {
    hidden.classList.add("hidden");
    card.style.display = "block";
  }
}