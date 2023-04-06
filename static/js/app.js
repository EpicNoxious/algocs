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
  },
});

// .............................tile
// .............................tile
// .............................tile
// .............................tile
// .............................tile

const container = document.getElementById("tile-container");
function updateGrid() {
  const tileSize = Math.floor(window.innerWidth * 0.05); // Set tile size to 5% of screen width

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

updateGrid();

window.addEventListener("resize", () => {
  updateGrid(); // Call function whenever window is resized
});

barba.hooks.after(() => {
  locomotivescroll.destroy();
  updateGrid();
  locomotivescroll.init();
});

// .............................barba
// .............................barba
// .............................barba
// .............................barba
// .............................barba

barba.init({
  cache: false,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        locomotivescroll.scrollTo(0, 0);

        pageTransition();

        await delay(1000);
        // window.scroll(0, 0);
        done();
      },

      async enter(data) {
        mainAnimation();
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
  var timeline = gsap.timeline();

  timeline.from(".container h1, .menu-items li, .logo", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    delay: 0.8,
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
