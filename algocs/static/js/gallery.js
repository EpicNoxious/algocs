export function hoverGallery() {
  const gallery = document.getElementById("gallery-container");
  if (gallery)
    window.addEventListener("mousemove", function (e) {
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
    });
}
