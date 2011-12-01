var prefixes = [
  {name: "lib", path: "assets/libs/"},
  {name: "plugin", path: "assets/plugins/"},
  {name: "acss", path: "assets/stylesheets/"},  
  {name: "tool", path: "assets/tools/"},    
  {name: "src", path: "src/"},
  {name: "app", path: "src/app/"}       
], i = prefixes.length, prefix;

while(i--) {
  prefix = prefixes[i];
  
  // closure pattern "generator function"
  (function(name, path) {
    yepnope.addPrefix(prefix.name, function (resource) {
      resource.url = path + resource.url;
      return resource;
    });
  })(prefix.name, prefix.path);  
  
}

// console loading notification
yepnope.addFilter(function (resource) { console.log("loading " + resource.url + "..."); return resource; });