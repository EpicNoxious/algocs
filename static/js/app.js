// .............................scroll
// .............................scroll
// .............................scroll
// .............................scroll
// .............................scroll

const locomotivescroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 0.5,
  smartphone: {
    smooth: true,
    multiplier: 0.5,
  },
});

// .............................responsive grid
// .............................responsive grid
// .............................responsive grid
// .............................responsive grid
// .............................responsive grid

barba.hooks.after(() => {
  locomotivescroll.destroy();
  updateGrid();
  locomotivescroll.init();
  btn.removeEventListener("mouseenter", handleMouseEnter);
  btn.removeEventListener("mouseleave", handleMouseLeave);

  btn.addEventListener("mouseenter", handleMouseEnter);
  btn.addEventListener("mouseleave", handleMouseLeave);
});

// .............................tile
// .............................tile
// .............................tile
// .............................tile
// .............................tile

const container = document.getElementById("tile-container");
function updateGrid() {
  const tileSize = Math.floor(window.innerWidth * 0.04); // Set tile size to 5% of screen width

  const bodyHeight = document.body.offsetHeight;
  const scrollBarWidth = window.innerWidth - document.body.clientWidth;
  const numRows = Math.ceil((bodyHeight + scrollBarWidth) / tileSize);
  const numCols = Math.ceil(container.offsetWidth / tileSize);

  // THIS CODE IS CREATING AN ISSUE WITH SCROLL
  const totalHeight = numRows * tileSize;
  container.style.height = totalHeight + "px";

  const totalWidth = numCols * tileSize;
  container.style.width = totalWidth + "px";
  container.style.boxSizing = "border-box";
  container.style.maxWidth = "100%"; // Set max-width to 100%

  const root = document.documentElement;
  root.style.setProperty("--tile-size", tileSize + "px");

  container.innerHTML = "";

  for (let i = 0; i < numRows * numCols; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
  }
}

updateGrid(); // Call the function for the first time

window.addEventListener("resize", () => {
  updateGrid(); // Call function whenever window is resized
});

// .............................imgbox zindex
// .............................imgbox zindex
// .............................imgbox zindex
// .............................imgbox zindex
// .............................imgbox zindex

function incrementZIndex() {
  let zIndex = 5;
  const boxes = document.querySelectorAll(".img-box");
  if (boxes) {
    boxes.forEach((box) => {
      box.addEventListener("click", function () {
        // Increment the z-index of the clicked img-box
        this.style.zIndex = ++zIndex;

        // Change the background color of the toggle-container element for 1 second
        const toggleContainer = this.querySelector(".toggle-container");
        const toggleContainer2 = this.querySelector(".img-content");
        toggleContainer.style.backgroundColor = "rgb(var(--secondary))";
        toggleContainer2.style.backgroundColor = "rgb(var(--secondary))";
        setTimeout(() => {
          toggleContainer.style.backgroundColor = "";
          toggleContainer2.style.backgroundColor = "";
        }, 200);
      });
    });
  }
}

incrementZIndex();

// .............................barba
// .............................barba
// .............................barba
// .............................barba
// .............................barba

barba.init({
  cache: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        locomotivescroll.scrollTo(0, 0);
        await delay(1000);
        // window.scroll(0, 0);
        done();
      },

      async enter(data) {
        mainAnimation();
        incrementZIndex();
        rotateImages();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});

pageTransition = () => {
  var timeline = gsap.timeline();
  timeline.to("ul.transition li", {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.1,
  });

  timeline.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.5,
  });
};

mainAnimation = () => {
  const timeline = gsap.timeline();
  const gallery = document.getElementById("gallery-container");
  const cursorText = document.querySelector(".cursor-hover");
  const hoverable = document.querySelectorAll(".hoverable");
  const btn = document.querySelector(".btn");
  const btnBgSlide = document.querySelector(".btn-bg-slide");
  let scrollX = 0;
  let scrollY = 0;
  let X = 0;
  let Y = 0;
  let cursorScrollY = 0;
  let randomRotation = 0;
  let rotateValue = 0;
  // .............................gallery hover
  // .............................gallery hover
  // .............................gallery hover
  // .............................gallery hover
  // .............................gallery hover
  if (gallery) {
    function onMouseMove(e) {
      scrollX = e.clientX;
      scrollY = e.clientY;
      const xDecimal = scrollX / window.innerWidth,
        yDecimal = scrollY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

      const posX = maxX * xDecimal * -1,
        posY = maxY * yDecimal * -1;

      gsap.to(gallery, {
        x: posX,
        y: posY,
        ease: "power2.out",
      });
    }
  }

  // Add the mousemove event listener
  window.addEventListener("mousemove", onMouseMove);

  timeline
    .to(".hero h4 div.overflow div.slide-in", {
      duration: 0.5,
      y: 0,
      ease: "power2.out",
      stagger: 0.05,
      delay: 0.5,
    })
    .to(".hero h1 div.overflow div.slide-in-in", {
      duration: 0.5,
      y: 0,
      ease: "power2.out",
      stagger: 0.05,
      delay: 0.5,
    })
    .to(".color", {
      duration: 0.3,
      ease: "power2.out",
      color: "rgb(var(--background))",
      rotation: -3,
    })
    .from(".check", {
      duration: 0.3,
      ease: "power2.out",
      scaleY: 0,
      transformOrigin: "center",
    })
    .to(".check", {
      scaleY: 1,
    })
    .set(".color-svg", {
      scale: 0,
      opacity: 1,
    })
    .to(".color-svg", {
      duration: 0.5,
      ease: Linear.easeNone,
      scale: 1,
      opacity: 1,
      rotation: 720,
    })
    .to(".color-svg", {
      duration: 2,
      ease: Linear.easeNone,
      repeat: -1,
      rotation: 360,
    });
  // .............................btn-hover
  // .............................btn-hover
  // .............................btn-hover
  // .............................btn-hover
  // .............................btn-hover
  function handleMouseEnter() {
    btnBgSlide.setAttribute("style", "height: 100%; top:0; bottom:unset;");
  }

  function handleMouseLeave() {
    btnBgSlide.setAttribute("style", "height: 0;bottom:0; top:unset;");
  }
  // .............................cursor text
  // .............................cursor text
  // .............................cursor text
  // .............................cursor text
  // .............................cursor text

  // not working after navigating to other page
  function onMouseMove2(e) {
    if (cursorText) {
      locomotivescroll.on("scroll", (args) => {
        cursorScrollY = args.delta.y;
      });
      X = e.clientX - cursorText.clientWidth / 2;
      Y = e.clientY + cursorScrollY - cursorText.clientHeight;
      gsap.to(cursorText, {
        x: X,
        y: Y,
        duration: 0.1,
      });
      if (hoverable) {
        hoverable.forEach((item) => {
          item.addEventListener("mousemove", (e) => {
            cursorText.style.opacity = "1";
            cursorText.innerText = item.dataset.trailerContent;
          });
          item.addEventListener("mouseout", () => {
            cursorText.style.opacity = "0";
          });
        });
      }
    }
  }

  // calling of above function to ensure animations work after navigation
  btn.addEventListener("mouseenter", handleMouseEnter);
  btn.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("mousemove", onMouseMove2);
};

delay = (n) => {
  n = n || 1100;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

// .............................toggle mail img box
// .............................toggle mail img box
// .............................toggle mail img box
// .............................toggle mail img box
// .............................toggle mail img box

function rotateImages() {
  const pictureLib = document.querySelector(".picture-lib");
  const pictures = document.querySelectorAll(".mg-box");
  let currentLastIndex = 2;
  let zIndexPicture = 5;
  if (pictureLib) {
    pictureLib.addEventListener("click", () => {
      currentLastIndex = (currentLastIndex + 1) % 3;
      pictures[currentLastIndex].style.zIndex = ++zIndexPicture;
    });
  }
}
rotateImages();

// .............................cursor text display
// .............................cursor text display
// .............................cursor text display
// .............................cursor text display
// .............................cursor text display
