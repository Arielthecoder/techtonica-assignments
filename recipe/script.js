const domLoaded = () => {

    const boxes = document.querySelectorAll("input[type=checkbox]");
  
    boxes.forEach(checkbox => {
      checkbox.addEventListener("click", crossOut)
    });
  
  } 
  
  function crossOut(event) {
    const checkbox = event.target;
    const parentLabel = checkbox.parentElement;
    parentLabel.classList.toggle("checked", checkbox.checked);
  }
  
  document.addEventListener('DOMContentLoaded', domLoaded);
  
  const toggleButton = document.getElementById("toggle-button");
  const toggleContent = document.getElementById("toggle-content");
  
  toggleButton.addEventListener("click", () => {
    toggleContent.classList.toggle("show");
  })

  

const stars = document.querySelectorAll('.star');
const ratingMessage = document.querySelector('.recipe-rating p');

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

function updateStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}
