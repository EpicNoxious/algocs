let form = document.querySelector("form");
const swup = new Swup({
  cache: false,
  containers: ["#swup"],
  plugins: [new SwupJsPlugin(pageTransition), new SwupFormsPlugin()],
});
