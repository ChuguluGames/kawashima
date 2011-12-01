var FPS = function(container) {
  return {
    frames:   50,
    start:    (new Date)*1 - 1,
    value:    0,
    
    update: function() {
      var f = this,
          now,
          thisFrameFPS = 1000 / ((now = new Date) - f.start);
          
      f.value += (thisFrameFPS - f.value) / f.frames;
      f.start = now;
      
      //container.html(Math.round(f.value * 100) / 100)
    }
  }
};