export function navToggleFunctionality() {
  const navBox = document.querySelector(".nav-box");
  const navToggleContainer = document.querySelector(".nav-toggle-container");
  const navToggleTitle = document.querySelector(".nav-title");
  const navToggleCut = document.querySelector(".nav-cut");
  const navToggleUl = document.querySelector(".nav-ul");
  const navBoxMinus = document.querySelector(".nav-cut");
  navBox.addEventListener("click", function () {
    navToggleContainer.style.backgroundColor = "rgb(var(--secondary))";
    navToggleUl.style.border = "3px solid rgb(var(--secondary))";
    navToggleUl.style.borderTop = "none";
    setTimeout(() => {
      navToggleContainer.style.backgroundColor = "rgb(var(--primary))";
      navToggleUl.style.border = "3px solid rgb(var(--primary))";
      navToggleUl.style.borderTop = "none";
    }, 200);
  });
  navToggleContainer.addEventListener("click", function () {
    navToggleContainer.classList.toggle("nav-toggle-container-clicked");
    navToggleTitle.classList.toggle("nav-title-clicked");
    navToggleCut.classList.toggle("nav-cut-clicked");
    navToggleUl.classList.toggle("nav-ul-clicked");

    if (navBoxMinus.textContent === "-") {
      navBoxMinus.textContent = "+";
    } else {
      navBoxMinus.textContent = "-";
    }
  });
}
