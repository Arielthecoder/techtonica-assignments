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
  
