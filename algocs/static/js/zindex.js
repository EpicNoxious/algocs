export function incrementZIndex() {
  let zIndex = 5;
  const boxes = document.querySelectorAll(".img-box");
  boxes.forEach((box) => {
    const imgBoxContainer = box.querySelector(".img-box-container");
    const toggleContainer = box.querySelector(".toggle-container");
    const imgBoxImage = box.querySelector(".img");
    const imgBoxMinus = box.querySelector(".img-cut");
    const toggleContainer2 = box.querySelector(".img-content");
    box.addEventListener("click", function () {
      // Increment the z-index of the clicked img-box
      this.style.zIndex = ++zIndex;

      // Change the background color of the toggle-container element for 1 second
      toggleContainer.style.backgroundColor = "rgb(var(--secondary))";
      toggleContainer2.style.backgroundColor = "rgb(var(--secondary))";
      setTimeout(() => {
        toggleContainer.style.backgroundColor = "";
        toggleContainer2.style.backgroundColor = "";
      }, 100);
    });
    toggleContainer.addEventListener("click", function () {
      box.classList.toggle("img-box-clicked");
      imgBoxContainer.classList.toggle("img-box-container-clicked");
      toggleContainer.classList.toggle("toggle-container-clicked");
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
