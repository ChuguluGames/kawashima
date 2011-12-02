yepnope([
  { load: ["tool!layer.tool.js", "tool!animate.tool.js", "src!home/home.style.css"] }, 
  { load: "src!home/home.view.js", complete: function() { new HomeView().initialize(); } }
]);