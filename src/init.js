$(document).ready(function() {
  window.dancers = [];
  var $remember;

  var $bodyWidth = $("body").width();

  $(".addDancer").on("click", function(event) {
    event.preventDefault();

    var $dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var $dancerMakerFunction = window[$dancerMakerFunctionName];

    var $dancer = new $dancerMakerFunction(
      $("body").height() * Math.random(),
      $bodyWidth * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push($dancer);
    
    $('body').append($dancer.$node);
  });

  $('.lineUp').on('click', function(event){
    event.preventDefault();
    $remember = window.dancers;
    var initialWidthPosition = 0;

    var width = $bodyWidth / window.dancers.length;

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].left = initialWidthPosition / $bodyWidth * 100 + '%';
      window.dancers[i].top = '50%';
      window.dancers[i].setPosition();
      initialWidthPosition += width;
    }
  });

});

