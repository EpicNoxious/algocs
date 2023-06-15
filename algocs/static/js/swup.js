import { resizeCanvas } from "./canvas.js";
import { hoverGallery } from "./gallery.js";
import { splideTransition } from "./splide.js";
import { incrementZIndex } from "./zindex.js";
import { cursorHover } from "./cursorhover.js";
// Page reveal transition
const revealTransition = () => {
  const btn = document.querySelector(".btn-reveal");
  btn.addEventListener("click", function () {
    gsap.to(".btn-reveal", 1, {
      opacity: 0,
      y: -50,
      ease: Expo.easeInOut,
    });

    gsap.to(".text-wrapper > div", 1, {
      x: "500",
      ease: Expo.easeInOut,
      delay: 1,
      stagger: 0.1,
    });

    gsap.to(".text-wrapper", 3, {
      y: -400,
      scale: 4.5,
      rotate: -90,
      ease: Expo.easeInOut,
      delay: 1.5,
    });

    gsap.to(".text", 1, {
      opacity: 1,
      ease: Expo.easeInOut,
      delay: 3,
    });

    gsap.to(".text-wrapper > div", 4, {
      x: "-4000",
      ease: Expo.easeInOut,
      delay: 3.5,
      stagger: 0.05,
    });

    gsap.to(".text-container li", {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: "bottom left",
      stagger: 0.1,
      delay: 6.5,
      onComplete: function () {
        const elementsToHide = document.querySelectorAll(
          ".btn-reveal, .text-wrapper > div, .text-wrapper, .text, .text-container"
        );
        elementsToHide.forEach((element) => {
          element.style.display = "none";
        });
      },
    });
  });
};

// Between page transition
const pageTransition = [
  {
    from: "(.*)",
    to: "(.*)",
    in: (next, infos) => {
      gsap.to("ul.transition li", {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: 0.075,
        delay: 1.2,
        ease: "power2.inOut",
      });
    },
    out: (next, infos) => {
      gsap.to(document.querySelector("#swup"), 1.2, {
        onComplete: next,
      });
      gsap.to("ul.transition li", {
        duration: 0.5,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: 0.075,
        ease: "power2.inOut",
      });
    },
  },
];

// In page transition
const inTransition = () => {
  let timeline = gsap.timeline();
  timeline.to(".logo object", {
    duration: 0.7,
    y: 0,
    ease: "power2.out",
  });
  timeline.to(".hero h4 div.overflow div.slide-in", {
    duration: 0.5,
    y: 0,
    ease: "power2.out",
    stagger: 0.05,
    delay: 0.5,
  });
  timeline.to(".hero h1 div.overflow div.slide-in-in", {
    duration: 0.5,
    y: 0,
    ease: "power2.out",
    stagger: 0.05,
    delay: 0.5,
  });
  timeline.to(".color", {
    duration: 0.3,
    ease: "power2.out",
    color: "rgb(var(--background))",
    rotation: -3,
  });
  timeline.from(".check", {
    duration: 0.3,
    ease: "power2.out",
    scaleY: 0,
    transformOrigin: "center",
  });
  timeline.to(".check", {
    scaleY: 1,
  });
  timeline.set(".color-svg", {
    scale: 0,
    opacity: 1,
  });
  timeline.to(".color-svg", {
    duration: 1,
    ease: Linear.easeNone,
    scale: 1,
    opacity: 1,
    rotation: 720,
  });
  timeline.to(".color-svg", {
    duration: 2,
    ease: Linear.easeNone,
    repeat: -1,
    rotation: 360,
  });
};

// Initialize Swup
const swup = new Swup({
  containers: ["#swup"],
  plugins: [
    new SwupJsPlugin(pageTransition),
    new SwupFormsPlugin(),
    new SwupDebugPlugin(),
  ],
});

// Preload Pages
swup.on("clickLink", () => {
  const nextLink = swup.link;
  if (nextLink) {
    swup.preloadPage(nextLink).then(() => {
      // Preloading completed, trigger the transition
      swup.loadPage(nextLink.href);
    });
  }
});

swup.on("animationInStart", () => {
  if (swup.options.animateHistoryBrowsing) {
    // Run the page transition
    inTransition();
  }
});

swup.on("animationOutDone", () => {
  // Destroy all Tippy tooltips
  tippy.hideAll();
});
// Function Calls For the first time and when page refresh
inTransition();
resizeCanvas();
hoverGallery();
cursorHover();
incrementZIndex();
splideTransition();

// On Swup content replace
document.addEventListener("swup:contentReplaced", () => {
  inTransition();
  resizeCanvas();
  hoverGallery();
  cursorHover();
  incrementZIndex();
  splideTransition();
  window.scrollTo(0, 0);
});
// document.addEventListener("DOMContentLoaded", () => {
//   // Run the once transition on page refresh
//   revealTransition();
// });
