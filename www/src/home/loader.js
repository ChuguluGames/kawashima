loader.load([
  { load: "tool!layer.tool.js"},  
  { load: "tool!animate.tool.js"},    
  { load: "src!home/home.style.css"},  
  { load: "src!home/home.view.js", complete: function() { new HomeView().initialize(); } }
]);