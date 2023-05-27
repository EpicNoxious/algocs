import { resizeCanvas } from "./canvas.js";
import { hoverGallery } from "./gallery.js";

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
      gsap.to(document.querySelector("#swup"), 1, {
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
    console.log("this piece of code is working");
    swup.preloadPage(nextLink).then(() => {
      // Preloading completed, trigger the transition
      swup.loadPage(nextLink.href);
    });
  }
});

// Function Calls
resizeCanvas();
hoverGallery();

// On Swup content replace
document.addEventListener("swup:contentReplaced", () => {
  resizeCanvas();
  hoverGallery();
  window.scrollTo(0, 0);
});
