
function createButterflies() {
    const butterflyContainer = document.querySelector(".butterflies");
    const butterfly1 = document.createElement("img");
    butterfly1.src = "https://png.pngtree.com/element_pic/12/03/20/1656e3fa305853d.jpg";
    butterfly1.classList.add("butterfly1");
  
    const butterfly2 = document.createElement("img");
    butterfly2.src = "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjEwODEtYmctMTZfMS5wbmc.png?s=BphcnW0w78vogoPXtR28a-joONl0fvNqjwV-Hlf3mCo";
    butterfly2.classList.add("butterfly2");
  
    butterflyContainer.appendChild(butterfly1);
    butterflyContainer.appendChild(butterfly2);
  }
  
  createButterflies();
  