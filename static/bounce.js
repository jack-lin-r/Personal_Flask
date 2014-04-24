$(function(){

  $('.test').click(function(event) {
    console.log("what");
    console.log("common");
    console.log(event.pageX);
  });


  window.what = function(event){
    console.log("hey");
    console.log(event.pageX);
  };

  $('#myCanvas').click(function(event) {
    console.log("what");
    var x = relMouseCoords(event).x;
    var y = relMouseCoords(event).y;


    // Determine if coordinates are inside the circle that is the ball
  });

  function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;


    do{
      console.log(currentElement.offsetLeft);
      console.log(currentElement.offsetTop);
      totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
      totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)
    console.log(event.pageX);
    console.log(totalOffsetX);
    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
  }

  HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

});


