var BlinkyDancer = class extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step() {
    super.step.call(this);
    this.$node.toggle();
  }
}

