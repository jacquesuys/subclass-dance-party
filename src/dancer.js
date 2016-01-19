var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.color = this.randomRGB();

  this.$node.css('backgroundColor', 'rgb('+ this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ')'); 
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.randomRGB = function () {
  var results = [];
  for(var i = 0; i<3; i++){
    results.push(Math.floor(Math.random() * 255));
  }

  return results;
};