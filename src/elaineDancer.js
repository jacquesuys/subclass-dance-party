// var ElaineDancer = function(top, left, timeBetweenSteps) {
//   Dancer.apply(this, arguments);

  
// };

// ElaineDancer.prototype = Object.create(Dancer.prototype);
// ElaineDancer.prototype.constructor = ElaineDancer;

// ElaineDancer.prototype.step = function() {
//   // BlinkyDancer.prototype.step.call(this, arguments);
// };


var ElaineDancer = class extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);

    this.$node.css({
      backgroundImage: 'url(elaine.gif)',
      backgroundColor: 'transparent',
      borderRadius: 0,
      width: '100px',
      height: '155px'
    });  
  }
};