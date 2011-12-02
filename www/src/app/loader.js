yepnope({ 
  load: [
    // stylesheets
    "acss!reset.css", "acss!global.css",
    
    // libraries
    "lib!jquery-1.7.min.js", "lib!underscore-1.2.0.js", "lib!backbone-0.5.3.js",
    
    // sources
    "app!router.js", "app!application.js", "app!main.js"
  ]
});