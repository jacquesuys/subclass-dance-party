
var DanceFloor = class {
  constructor ($dom) {
  this.dancers = {};
  this.height = $dom.height();
  this.width = $dom.width();
  this.$dom = $dom;
  } 
  addDancer (dancer) {
    this.dancers[dancer.guid] = dancer;
    this.$dom.append(dancer.$node);
  }
  lineUp () {
    event.preventDefault();
    
    var initialWidthPosition = 0;

    var width = this.width / Object.keys(this.dancers).length;
    var height = this.height / 2;
    for (var key in this.dancers) {
      danceFloor.dancers[key].setPosition(height, initialWidthPosition);
      initialWidthPosition += width;
    }
  }
  circleDance () {
    for (var key in this.dancers) {
      danceFloor.dancers[key].circleDance(this.width/2,this.height/2,this.width/4);
    }
  }
  stopCustomDance () {
    for (var key in this.dancers) {
      danceFloor.dancers[key].stopCustomDance();
    }
  }
  getDancerById (id) {
    return this.dancers[id];
  }
};

