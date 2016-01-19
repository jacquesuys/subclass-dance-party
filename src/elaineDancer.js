'use strict';

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