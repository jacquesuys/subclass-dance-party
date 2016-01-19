var ElaineDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  this.$node.css({
    backgroundImage: 'url(elaine.gif)',
    backgroundColor: 'transparent',
    borderRadius: 0,
    width: '100px',
    height: '155px'
  });
};

ElaineDancer.prototype = Object.create(Dancer.prototype);
ElaineDancer.prototype.constructor = ElaineDancer;

ElaineDancer.prototype.step = function() {
  // BlinkyDancer.prototype.step.call(this, arguments);
};

