$(function(){

  /*
  $('.yes').click(function(){
    console.log("you have clicked yes");
  */
    /*
    $.ajax({
        url: url_for("about"),
        type: 'GET'
    });
    */
/*
    $.ajax({
        url:"/about",
        type: 'POST',
        data: json,
        contentType: 'application/json;charset=UTF-8',
        success: function(evt) {
            $("#results").html = evt.data;
        }
    }); 
  });
*/
  
  $('.yes').click = (function(){
    console.log("hey");
    $.ajax({
        url:"/about",
        type: 'POST',
        data: json,
        contentType: 'application/json;charset=UTF-8',
        success: function(evt) {
            $("#results").html = evt.data;
        }
    }); 


  });





  $('.no').click(function(){
    console.log("you have clicked no");

  });





  $('#myCanvas').click(function(event) {
    console.log("what");
    coords = myCanvas.relMouseCoords(event);
    console.log("wow");
    console.log(coords);


    if (coords.x > (x - 20) && coords.x < (x + 20) && coords.y > (y - 20) && coords.y < (y + 20)){
      console.log("you hit");


    }
    else{
      console.log("you didn't hit");
    }



    // Determine if coordinates are inside the circle that is the ball
  });

  function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    console.log(currentElement);
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


