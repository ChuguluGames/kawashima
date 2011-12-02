// http://jsperf.com/object-literal-vs-constructed
function Application(container, router) {
  this.container = container || this.container;
  this.router = router || this.router;
}

Application.prototype.initialize = function() {
  var a = this;
  
  $("body").prepend(a.container);
  a.initializeRouter();
  
  return a;
}

Application.prototype.initializeRouter = function() {
  Backbone.history.start({
    pushState: false // cant use pushState on local? ie: see base with index.html
  });
};