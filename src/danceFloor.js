
var DanceFloor = function($dom) {
  this.dancers = {};
  this.height = $dom.height();
  this.width = $dom.width();
  this.$dom = $dom;
};


DanceFloor.prototype.addDancer = function (dancer) {
  this.dancers[dancer.guid] = dancer;
  this.$dom.append(dancer.$node);
}; 

DanceFloor.prototype.lineUp = function () {
  event.preventDefault();
  
  var initialWidthPosition = 0;

  var width = this.width / Object.keys(this.dancers).length;
  var height = this.height / 2;
  for (var key in this.dancers) {
    danceFloor.dancers[key].setPosition(height, initialWidthPosition);
    initialWidthPosition += width;
  }
};

DanceFloor.prototype.circleDance = function () {
  for (var key in this.dancers) {
    danceFloor.dancers[key].circleDance(this.width/2,this.height/2,this.width/4);
  }
};

DanceFloor.prototype.stopCustomDance = function () {
  for (var key in this.dancers) {
    danceFloor.dancers[key].stopCustomDance();
  }
};

DanceFloor.prototype.getDancerById = function(id) {
  return this.dancers[id];
};

