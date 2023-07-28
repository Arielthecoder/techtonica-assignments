const boxes = document.querySelectorAll("input[type=checkbox]");

boxes.forEach(checkbox =>{
    checkbox.addEventListener("click", crossOut)
});

function crossOut(event) {
    const parentLabel = event.target.parentElement;
    parentLabel.classList.toggle('checked')
}