$(document).ready(function () {
  window.application = new Application($("<div />", { id: "container" }), new Router()).initialize();
});