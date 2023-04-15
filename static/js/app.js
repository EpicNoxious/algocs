// .............................scroll
// .............................scroll
// .............................scroll
// .............................scroll
// .............................scroll

const locomotivescroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 0.7,
  smartphone: {
    smooth: true,
    multiplier: 0.7,
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
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      this.style.zIndex = ++zIndex;
    });
  });
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
  let scrollX = 0;
  let scrollY = 0;
  // .............................gallery hover
  // .............................gallery hover
  // .............................gallery hover
  // .............................gallery hover
  // .............................gallery hover
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
      duration: 1,
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
};

delay = (n) => {
  n = n || 1100;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};
