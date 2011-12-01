yepnope([
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