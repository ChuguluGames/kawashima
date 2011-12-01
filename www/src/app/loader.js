var loader = (new function() {
  return {
    load: function(files) {
      yepnope(files);
    }
  };
});

if(!!navigator.userAgent.match(/iPad/i)) {
  document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
  // gotta wait for the device response
  document.addEventListener("deviceready", function() {
      loadApplication();
  }, false);  
  loader.load({ load: "lib!phonegap-1.2.0.js"});
} else loadApplication();

function loadApplication() {
  loader.load([
    // stylesheets
    { load: "acss!reset.css" },  
    { load: "acss!global.css" },    
    // libraries
    { load: "lib!jquery-1.7.min.js" },
    { load: "lib!underscore-1.2.0.js" },    
    { load: "lib!backbone-0.5.3.js" },  
    // sources
    { load: "app!router.js" },  
    { load: "app!application.js" },
    { load: "app!main.js" },   
  ]);  
}


