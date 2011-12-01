var Application = function() {
  var container = null;
  var router = null;

  var initialize = function() {
    var a = this;

    // on dom ready
    $(function() {

      // create container
      a.container = $("<div />", {
        id: "container"
      });
      $("body").prepend(a.container);     
      
      a.initializeRouter();     
    });
    
    return a;
  };

  var initializeRouter = function() {
    this.router = new Router();
    
    // let's start the history
    Backbone.history.start({
      pushState: false // cant use pushState on local? ie: see base with index.html
    });
  };

  return {
    initialize: initialize,
    initializeRouter: initializeRouter
  }
};