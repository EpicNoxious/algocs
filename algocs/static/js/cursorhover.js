// function cursorHover() {
//   const cursorText = document.querySelector(".cursor-hover");
//   const hoverable = document.querySelectorAll(".hoverable");

//   document.addEventListener("mousemove", function (e) {
//     let X = e.clientX - cursorText.clientWidth / 2;
//     let Y = e.clientY - cursorText.clientHeight;
//     gsap.to(cursorText, {
//       x: X,
//       y: Y,
//       duration: 0.5,
//     });
//   });

//   hoverable.forEach((item) => {
//     item.addEventListener("mousemove", () => {
//       cursorText.style.opacity = "1";
//       cursorText.style.display = "inline-block";
//       cursorText.innerText = item.dataset.trailerContent;
//     });
//     item.addEventListener("mouseout", () => {
//       cursorText.style.display = "none";
//       cursorText.style.opacity = "0";
//     });
//   });
// }

// cursorHover();
