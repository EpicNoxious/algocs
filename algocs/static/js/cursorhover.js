// export function cursorHover() {
//   const cursorText = document.querySelector(".cursor-hover");
//   const hoverable = document.querySelectorAll(".hoverable");
//   let mouseX = 0;
//   let mouseY = 0;
//   let randomNumber = Math.random() * 14 - 7;
//   let leaveTimeout;

//   gsap.set(cursorText, {
//     rotation: randomNumber,
//     x: mouseX,
//     y: mouseY,
//     opacity: 0,
//     display: "none",
//   });

//   document.addEventListener("mousemove", function (e) {
//     mouseX = e.clientX - cursorText.clientWidth / 2;
//     mouseY = e.clientY - cursorText.clientHeight;

//     gsap.to(cursorText, {
//       x: mouseX,
//       y: mouseY,
//       duration: 0.5,
//     });
//   });

//   hoverable.forEach((item) => {
//     item.addEventListener("mouseover", () => {
//       cursorText.style.opacity = "1";
//       cursorText.style.display = "inline-block";
//       cursorText.innerText = item.dataset.trailerContent;
//     });
//     item.addEventListener("mouseout", () => {
//       cursorText.style.opacity = "0";
//       cursorText.innerText = item.dataset.trailerContent;
//     });
//   });
// }

export function cursorHover() {
  tippy(".hoverable", {
    content(reference) {
      const tooltipContent = reference.getAttribute("data-trailer-content");
      return tooltipContent;
    },
    followCursor: true,
    arrow: false,
    hideOnClick: true,
    theme: "custom",
  });
}
