var SquareDancer = class SquareDancer extends BlinkyDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.css({
      borderRadius: 0
    }); 
  }
  step() {
    super.step();
  }
};