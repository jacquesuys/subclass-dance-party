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

var width = $('body').width();
var height = $('body').height();

var angle = 0;
var increment = 0.1;

function loop() {
  var angle = 2 * Math.PI * Math.random();
  var x = width/2 + width/4  * Math.cos(angle);
  var y = height/2 + width/4 * Math.sin(angle);
  console.log(x, y);
  angle += 0.1;
  //radius += increment;
  //if (radius > 200) increment = -0.1;
  //if (radius < 50) increment = 0.1;
  setTimeout(loop, 1000);
}