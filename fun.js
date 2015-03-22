var canvas=Raphael(10,10,300,300);

for (var i=0;i<17;i++){
  for (var j=0; j<17;j++) {
  var myCircle=canvas.circle(50+i*15,50+j*15,6);
  myCircle.attr("fill","blue");  
  myCircle.hover(pearl);
  myCircle.click(hi);
  }
}

function hi() {
  this.attr("fill","red");
}


function pearl() {
  var x = Math.floor(Math.random()*300+1);
  var y = Math.floor(Math.random()*300+1);
  var r=Math.floor(Math.random()*20+1);
  var animation=Raphael.animation({cx:x,cy:y},1000,"bounce");
  this.attr("r",r);
  this.animate(animation);
}

function fade() {
  this.attr("opacity",0.3);
}
