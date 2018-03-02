/* 3D Perspective on perspective-effect class */

var rotate = 40;

var pageX = $(document).width();
var pageY = $(document).height();
var mouseY=0;
var mouseX=0;

  $(document).mousemove(function(event) {
    mouseX = event.pageY;
    mouseY = event.pageX;
    if (mouseX < 1080) {
      rotateY = -(pageY/3-mouseY)/pageY*rotate;
      rotateX = (pageX/3-mouseX)/pageX*rotate;
      $('.perspective-effect').css({ 'webkit-transform' : 'perspective( 1980px )' + 
      'rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)' });
    }
  });
