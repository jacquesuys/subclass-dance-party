'use strict';

var ElaineDancer = class ElaineDancer extends Dancer {
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
    step () {
    super.step();
    var randomNum = new Date().getTime() % 10; 
    if(randomNum===1){
      this.$node.toggleClass('flipImage');
    }
  }
};