'use strict';

var SpiderDancer = class SpiderDancer extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);

    this.$node.append('<img class="spiderMan" src="images/spiderman.gif" />');  
    this.$node.css({
      backgroundColor: 'transparent'
    }); 
  }
};