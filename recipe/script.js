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
  
const toggleButton = document.querySelector('.toggle-button');
const toggleContent = document.querySelector('.toggle-content');

toggleButton.addEventListener('click', () => {
  toggleContent.classList.toggle('show');
})