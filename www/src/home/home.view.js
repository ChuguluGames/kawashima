function HomeView() {
  this.current = 0;
  this.screen = {};
  this.frequence_refresh = (1000/30);
  this.curve_speed = 1000;
};

HomeView.prototype.initialize = function () {
  this.getScreen();
  this.render();
};

HomeView.prototype.getScreen = function() {
  this.screen.width = $(window).width();
  this.screen.height = $(window).height();
  this.screen.paddingLeft = Math.round(this.screen.width * 0.04)
  this.screen.paddingBottom = Math.round(this.screen.height * 0.04)
  this.screen.amplitudeCurve = Math.round(this.screen.height * 0.3)
  this.screen.widthPadded = this.screen.width - this.screen.paddingLeft
  this.screen.heightPadded = this.screen.height - this.screen.paddingBottom;
};

HomeView.prototype.render = function() {
  // create the grid layer
  this.grid = new Layer("canvas-grid", this.screen.width, this.screen.height);

  // create the curve layer
  this.curve = new Layer("canvas-curve", this.screen.widthPadded, this.screen.heightPadded);
  $(this.curve).css({ left: this.screen.paddingLeft + "px" });

  application.container.append(
    $("<div />", { id: "page_home" }).append(this.grid)
                                     .append(this.curve)
  );

  this.createGrid();
  this.createCurve();
};

HomeView.prototype.createGrid = function() {
  var context = this.grid.context;

  // background
  context.fillStyle = "#56585a";
  context.fillRect(0, 0, this.screen.width, this.screen.height);

  context.fillStyle = "#222222";
  context.fillRect(this.screen.paddingLeft, 0, this.screen.widthPadded, this.screen.heightPadded);

  context.moveTo(this.screen.paddingLeft, 0);
  context.lineTo(this.screen.paddingLeft, this.screen.heightPadded);
  context.lineTo(this.screen.width, this.screen.heightPadded);
  context.lineWidth = 5;
  context.strokeStyle = "#888888";
  context.stroke();
  
  var for_one = Math.round(this.screen.heightPadded / 10),
      y = this.screen.heightPadded;

  for (var i = 0; i < 9; i++) {
    
    y -= for_one;
    context.moveTo(this.screen.paddingLeft, y);
    context.lineTo(this.screen.width, y);
    context.lineWidth = 2;
    context.strokeStyle = "#888888";
    context.stroke();
  }
};

HomeView.prototype.createCurve = function() {
  this.current = 0;

  // clear canvas curve
  this.curve.context.clearRect(0, 0, this.screen.widthPadded, this.screen.heightPadded);
  this.curve.width = this.curve.width;

  // get the points of the curve
  this.generatePoints();
  // add the point to the curve
  this.addPoint();
};

HomeView.prototype.generatePoints = function() {
  var for_one = Math.round(this.screen.widthPadded / 10),
      x = 0,
      y = 0;

  this.points = [];
       
  for(var i = 0; i <= 10; i++) {
    y = Math.floor(Math.random() * this.screen.heightPadded - this.screen.amplitudeCurve) + this.screen.amplitudeCurve;

    this.points.push({
      x: x,
      y: y
    });

    x += for_one;
  }
};

HomeView.prototype.updateCurve = function() {
  var context = this.curve.context,
      clearFrom = this.currentPosition.y > this.newPosition.y ? this.newPosition.y : this.currentPosition.y;

  // clear specific zone
  this.curve.context.clearRect(
    this.currentPosition.x,
    clearFrom,
    this.newPosition.x - this.currentPosition.x,
    this.screen.heightPadded - clearFrom
  );

  context.fillStyle = 'rgb(50,108,36)';
  context.beginPath();

  context.moveTo(this.currentPosition.x, this.currentPosition.y);
  context.lineTo(this.newPosition.x, this.newPosition.y);
  context.lineWidth = 3;
  context.strokeStyle = "rgb(199,108,23)";
  context.stroke();
  context.lineTo(this.newPosition.x, this.screen.heightPadded);
  context.lineTo(this.currentPosition.x, this.screen.heightPadded);
  context.closePath();
  context.fill();
};

HomeView.prototype.addPoint = function() {
  var self = this;

  this.currentPosition = this.points[this.current];
  this.newPosition = $.extend(true, {}, this.currentPosition);

  animate(this.newPosition, this.points[this.current + 1], {
    duration: self.curve_speed,
    frames:   self.frequence_refresh,
    easing: "easeInOutQuad",
    step: function() {
      self.updateCurve();
    },
    complete: function() {
      self.current++;

      // curve finished
      if(self.current == self.points.length - 1) {
        self.createCurve(); // create a new one
      } else {
        self.addPoint(); // add the next point
      }
    }
  });
};