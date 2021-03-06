var canvas=Raphael(10,10,1200,600);
var rx=Math.floor(Math.random()*1000+50);
var ry=Math.floor(Math.random()*500+50);
reset();

function reset() {
  canvas.clear();
  var text = canvas.text(rx,ry, 'Click to restore order');
  for (var i=0;i<70;i++){
   for (var j=0; j<35;j++) {
  var myCircle=canvas.circle(50+i*15,50+j*15,7);
    myCircle.attr("fill","blue");  
    myCircle.hover(pearl);
    }
  }
}

function pearl() {
  var x = Math.floor(Math.random()*1200+1);
  var y = Math.floor(Math.random()*600+1);
  var r=Math.floor(Math.random()*20+1);
  var animation=Raphael.animation({cx:x,cy:y},1000,"bounce");
  this.attr("r",r);
  this.animate(animation);
}

function fade() {
  this.attr("opacity",0.3);
}
