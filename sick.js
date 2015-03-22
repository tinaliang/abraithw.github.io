function short(el) {
  el.style.color="red";
  el.style.width= "100%";
  
  var myElements = document.querySelectorAll(".thrd-block");
  for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 1;
  }
  var bye=document.getElementById("long");
  bye.style.opacity=0;
}
