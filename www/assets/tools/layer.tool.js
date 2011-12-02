function Layer(id, width, height) {
  this.canvas  = $("<canvas />", { id: id })[0];
  this.canvas.width   = width;
  this.canvas.height  = height;
  this.canvas.context = this.canvas.getContext("2d");

  return this.canvas;
}