export function incrementZIndex() {
  let zIndex = 5;
  const boxes = document.querySelectorAll(".img-box");
  boxes.forEach((box) => {
    const imgBoxContainer = box.querySelector(".img-box-container");
    const toggleContainer = box.querySelector(".toggle-container");
    const toggleContainer2 = box.querySelector(".img-content");
    const navToggleContainer = box.querySelector(".nav-toggle-container");
    const navToggleTitle = box.querySelector(".nav-title");
    const navToggleCut = box.querySelector(".nav-cut");
    const navToggleUl = box.querySelector(".nav-ul");
    const imgBoxImage = box.querySelector(".img");
    const imgBoxMinus = box.querySelector(".img-cut");
    box.addEventListener("click", function () {
      // Increment the z-index of the clicked img-box
      this.style.zIndex = ++zIndex;

      // Change the background color of the toggle-container element for 1 second
      toggleContainer.style.backgroundColor = "rgb(var(--secondary))";
      // navToggleUl.style.border = "3px solid rgb(var(--secondary))";
      // navToggleUl.style.borderTop = "none";
      toggleContainer2.style.backgroundColor = "rgb(var(--secondary))";
      setTimeout(() => {
        toggleContainer.style.backgroundColor = "";
        toggleContainer2.style.backgroundColor = "";
        // navToggleUl.style.border = "";
      }, 200);
    });
    toggleContainer.addEventListener("click", function () {
      box.classList.toggle("img-box-clicked");
      imgBoxContainer.classList.toggle("img-box-container-clicked");
      toggleContainer.classList.toggle("toggle-container-clicked");
      navToggleContainer.classList.toggle("nav-toggle-container-clicked");
      navToggleTitle.classList.toggle("nav-title-clicked");
      navToggleCut.classList.toggle("nav-cut-clicked");
      navToggleUl.classList.toggle("nav-ul-clicked");
      imgBoxImage.classList.toggle("img-clicked");
      if (imgBoxMinus.textContent === "-") {
        imgBoxMinus.textContent = "+";
      } else {
        imgBoxMinus.textContent = "-";
      }
      toggleContainer2.classList.toggle("img-content-clicked");
    });
  });

  // flip cards ffor picture library
  const pictureLib = document.querySelector(".picture-lib");
  const pictures = document.querySelectorAll(".mg-box");
  if (pictureLib) {
    let currentLastIndex = 2;
    let zIndexPicture = 5;
    pictureLib.addEventListener("click", () => {
      currentLastIndex = (currentLastIndex + 1) % 3;
      pictures[currentLastIndex].style.zIndex = ++zIndexPicture;
    });
  }
}
