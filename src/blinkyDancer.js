// var BlinkyDancer = function(top, left, timeBetweenSteps) {
//   Dancer.apply(this, arguments);
// };

// BlinkyDancer.prototype = Object.create(Dancer.prototype);
// BlinkyDancer.prototype.constructor = BlinkyDancer;

// BlinkyDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this, arguments);
//   this.$node.toggle();
// };

var BlinkyDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    super.step.call(this);
    this.$node.toggle();
  }
}

