const domLoaded = () => {
  const boxes = document.querySelectorAll("input[type=checkbox]");
  boxes.forEach(checkbox => {
    checkbox.addEventListener("click", crossOut);
  });
};

function crossOut(event) {
  const checkbox = event.target;
  const parentLabel = checkbox.parentElement;
  parentLabel.classList.toggle("checked", checkbox.checked);
}

document.addEventListener('DOMContentLoaded', domLoaded);

const stars = document.querySelectorAll('.recipe-rating .star');
const ratingMessage = document.getElementById('rating-message');

let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    selectedRating = index + 1;
    updateStars();
    ratingMessage.textContent = `Thank you for rating! You rated this recipe ${selectedRating} stars.`;
  });

  star.addEventListener('mouseover', () => {
    updateStars(index);
  });

  star.addEventListener('mouseout', () => {
    updateStars();
  });
});

function updateStars(index = selectedRating - 1) {
  stars.forEach((star, i) => {
    star.classList.toggle('active', i <= index);
  });
}
