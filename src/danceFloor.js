'use strict';

var DanceFloor = class {
  constructor ($dom) {
  this.dancers = {};
  this.height = $dom.height();
  this.width = $dom.width();
  this.$dom = $dom;
  }
  addDancer (dancer) {
    this.dancers[dancer.guid] = dancer;
    this.$dom.append(dancer.$node);
  }
  lineUp () {
    this.stopCustomDance();

    var initialWidthPosition = 0;

    var width = this.width / Object.keys(this.dancers).length;
    var height = this.height / 2;
    for (var key in this.dancers) {
      danceFloor.dancers[key].setPosition(height, initialWidthPosition);
      initialWidthPosition += width;
    }
  }
  circleDance () {
    this.stopCustomDance();
    for (var key in this.dancers) {
      danceFloor.dancers[key].circleDance(this.width/2,this.height/2,this.width/4);
    }
  }

  hoeDown () {
    var alreadyPartnered = {};
    this.stopCustomDance();
    //In the first pass we try to partner w/ other dancer types
    checkDancer1: for (var key1 in this.dancers) {
      checkDancer2: for(var key2 in this.dancers){
        var dancer1 = this.dancers[key1];
        var dancer2 = this.dancers[key2];

        //don't make someone dance alone
        if(dancer1 === dancer2){
          continue checkDancer1;
        }

        if(Object.getPrototypeOf(dancer1) === Object.getPrototypeOf(dancer2)) {
          continue checkDancer2;
        }

        if(key1 in alreadyPartnered){
          continue checkDancer1;
        }

        if(key2 in alreadyPartnered){
          continue checkDancer2;
        }

        var height = Math.random() * this.height;
        var width = Math.random() * this.width;

        dancer1.circleDance(width, height, this.width/8, 0);
        dancer2.circleDance(width, height, this.width/8, Math.PI);

        alreadyPartnered[key1] = true;
        alreadyPartnered[key2] = true;

      }
    }
  }

  stopCustomDance () {
    for (var key in this.dancers) {
      danceFloor.dancers[key].stopCustomDance();
    }
  }
  getDancerById (id) {
    return this.dancers[id];
  }
};
