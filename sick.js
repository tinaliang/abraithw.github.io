function short(el) {
  el.style.color="red";
  el.style.width= "80%";
  
  var myElements = document.querySelectorAll(".tbshort");
  for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 1;
  }
  var bye=document.getElementById("long");
  bye.style.opacity=0;
}


function long(el) {
  el.style.color="red";
  el.style.width= "80%";
  
  var myElements = document.querySelectorAll(".tblong");
  for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 1;
  }
  var bye=document.getElementById("short");
  bye.style.opacity=0;
  
}
