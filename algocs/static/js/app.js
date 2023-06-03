// revealAnimation = () => {
//   const btn = document.querySelector(".btn-reveal");
//   btn.addEventListener("click", function () {
//     console.log(1);
//     gsap.to(".btn-reveal", 1, {
//       opacity: 0,
//       y: -50,
//       ease: Expo.easeInOut,
//     });

//     gsap.to(".text-wrapper > div", 1, {
//       x: "500",
//       ease: Expo.easeInOut,
//       delay: 1,
//       stagger: 0.1,
//     });

//     gsap.to(".text-wrapper", 3, {
//       y: -400,
//       scale: 4.5,
//       rotate: -90,
//       ease: Expo.easeInOut,
//       delay: 1.5,
//     });

//     gsap.to(".text", 1, {
//       opacity: 1,
//       ease: Expo.easeInOut,
//       delay: 3,
//     });

//     gsap.to(".text-wrapper > div", 4, {
//       x: "-4000",
//       ease: Expo.easeInOut,
//       delay: 3.5,
//       stagger: 0.05,
//     });

//     gsap.to(".text-container li", {
//       duration: 0.5,
//       scaleY: 0,
//       transformOrigin: "bottom left",
//       stagger: 0.1,
//       delay: 6.5,
//       onComplete: function () {
//         const elementsToHide = document.querySelectorAll(
//           ".btn-reveal, .text-wrapper > div, .text-wrapper, .text, .text-container"
//         );
//         elementsToHide.forEach((element) => {
//           element.style.display = "none";
//         });
//       },
//     });
//   });
// };

// mainAnimation = () => {
//   const timeline = gsap.timeline();
//   const gallery = document.getElementById("gallery-container");
//   const btn = document.querySelector(".btn");
//   const btnBgSlide = document.querySelector(".btn-bg-slide");
//   const pictureLib = document.querySelector(".picture-lib");
//   const pictures = document.querySelectorAll(".mg-box");
//   let scrollX = 0;
//   let scrollY = 0;

//   let cursorScrollY = 0;

//   if (gallery)
//     function onMouseMove(e) {
//       scrollX = e.clientX;
//       scrollY = e.clientY;
//       const xDecimal = scrollX / window.innerWidth,
//         yDecimal = scrollY / window.innerHeight;

//       const maxX = gallery.offsetWidth - window.innerWidth,
//         maxY = gallery.offsetHeight - window.innerHeight;

//       const posX = maxX * xDecimal * -1,
//         posY = maxY * yDecimal * -1;

//       gsap.to(gallery, {
//         x: posX,
//         y: posY,
//         ease: "power2.out",
//       });
//     }

//   // if (pictureLib) {
//   //   let currentLastIndex = 2;
//   //   let zIndexPicture = 5;
//   //   pictureLib.addEventListener("click", () => {
//   //     currentLastIndex = (currentLastIndex + 1) % 3;
//   //     pictures[currentLastIndex].style.zIndex = ++zIndexPicture;
//   //   });
//   // }

//   // Add the mousemove event listener
//   // window.addEventListener("mousemove", onMouseMove);

//   timeline
//     .to(".logo object", {
//       duration: 0.7,
//       y: 0,
//       ease: "power2.out",
//     })
//     .to(".hero h4 div.overflow div.slide-in", {
//       duration: 0.5,
//       y: 0,
//       ease: "power2.out",
//       stagger: 0.05,
//       delay: 0.5,
//     })
//     .to(".hero h1 div.overflow div.slide-in-in", {
//       duration: 0.5,
//       y: 0,
//       ease: "power2.out",
//       stagger: 0.05,
//       delay: 0.5,
//     })
//     .to(".color", {
//       duration: 0.3,
//       ease: "power2.out",
//       color: "rgb(var(--background))",
//       rotation: -3,
//     })
//     .from(".check", {
//       duration: 0.3,
//       ease: "power2.out",
//       scaleY: 0,
//       transformOrigin: "center",
//     })
//     .to(".check", {
//       scaleY: 1,
//     })
//     .set(".color-svg", {
//       scale: 0,
//       opacity: 1,
//     })
//     .to(".color-svg", {
//       duration: 1,
//       ease: Linear.easeNone,
//       scale: 1,
//       opacity: 1,
//       rotation: 720,
//     })
//     .to(".color-svg", {
//       duration: 2,
//       ease: Linear.easeNone,
//       repeat: -1,
//       rotation: 360,
//     });
// };

const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  autoWidth: true,
  gap: 80,
  pagination: false,
  arrows: false,
  autoScroll: {
    speed: 2,
  },
});
splide.mount(window.splide.Extensions);
