var SquareDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);

  //Apply custom styling
  this.$node.css({
      borderRadius: 0
    }); 
};

SquareDancer.prototype = Object.create(BlinkyDancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this, arguments);

};