'use strict';

var Dancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {

    this.$node = $('<span class="dancer"></span>');
    this.left = left;
    this.top = top;
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
    this.color = this.randomRGB();

    this.guid = window._danceGUID++;
    this.$node.data('guid', this.guid);
    this.$node.css('backgroundColor', 'rgb('+ this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ')');

    this._timeoutRef = null;
  }
  step () {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition (top, left) {
    this.top = top;
    this.left = left;

    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  }
  randomRGB () {
    var results = [];
    for(var i = 0; i<3; i++){
      results.push(Math.floor(Math.random() * 255));
    }

    return results;
  }
  mouseEnter() {
    this.setPosition(this.top - 50, this.left);
  }
  mouseLeave() {
    this.setPosition(this.top + 50, this.left);
  }
  circleDance(x, y, radius, optionalRadian) {
    var angle = optionalRadian !==undefined ? 
      optionalRadian : 2 * Math.PI * Math.random();

    var increment = 0.1;
    var self = this;

    var loop = function () {
      var left = x + radius * Math.cos(angle);
      var top = y + radius * Math.sin(angle);
      self.setPosition(top,left);
      angle += 0.1;
      self._timeoutRef = setTimeout(loop, 200);
    };

    loop();
  }
  stopCustomDance() {
    clearTimeout(this._timeoutRef);
  }
};
