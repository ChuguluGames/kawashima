(function () {
  var prefixes = [
        {name: "lib", path: "assets/libs/"},
        {name: "plugin", path: "assets/plugins/"},
        {name: "acss", path: "assets/stylesheets/"},
        {name: "tool", path: "assets/tools/"},
        {name: "src", path: "src/"},
        {name: "app", path: "src/app/"}
      ], 
      i = prefixes.length;
  
  function generatePrefix(prefix) {
    yepnope.addPrefix(prefix.name, function (resource) {
      resource.url = prefix.path + resource.url;
      return resource;
    });
  };

  while (i--) { generatePrefix(prefixes[i]); };
})();

// console loading notification
yepnope.addFilter(function (resource) { console.log("loading " + resource.url + "..."); return resource; });