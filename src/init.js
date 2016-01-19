$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancer.$node.css('backgroundColor', 'rgb('+ dancer.color[0] + ',' + dancer.color[1] + ',' + dancer.color[2] + ')'); 
    $('body').append(dancer.$node);
  });
});

