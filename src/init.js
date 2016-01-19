$(document).ready(function() {
  'use strict';
  window._danceGUID = window._danceGUID || 0;
  
  var $bodyWidth = $("body").width();
  var $bodyHeight = $("body").height();

  window.danceFloor = new DanceFloor($('body'));

  $(".addDancer").on("click", function(event) {
    event.preventDefault();

    var $dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var $dancerMakerFunction = window[$dancerMakerFunctionName];

    var $dancer = new $dancerMakerFunction(
      $("body").height() * Math.random(),
      $bodyWidth * Math.random(),
      Math.random() * 1000
    );

    danceFloor.addDancer($dancer);
  });

  $('.lineUp').on('click', function(event){
    danceFloor.lineUp();
  });

  $('body').on('mouseenter', '.dancer', function(event){
    var dancer = danceFloor.getDancerById($(this).data('guid'));
    dancer.mouseEnter();
  });

  $('body').on('mouseleave', '.dancer', function(event){
    var dancer = danceFloor.getDancerById($(this).data('guid'));
    dancer.mouseLeave();
  });

});

