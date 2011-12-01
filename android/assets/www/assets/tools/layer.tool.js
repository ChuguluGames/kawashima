var Layer = function(params) {
  var layer = $("<canvas />", {
    id: params.id
  })[0];
  layer.width = params.width;
  layer.height = params.height;

  layer.context = layer.getContext("2d")

  return layer;
}