function short(el) {
  el.style.width= "90%";
  
  var myElements = document.querySelectorAll(".tbshort");
  for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 1;
  }
  var bye=document.getElementById("long");
  bye.parentNode.removeChild(bye);
  var bye1=document.getElementById("CM");
  bye1.parentNode.removeChild(bye1);
  var bye2=document.getElementById("CAPS");
  bye2.parentNode.removeChild(bye2);
  var bye3=document.getElementById("DO");
  bye3.parentNode.removeChild(bye3);
  var bye4=document.getElementById("SDAO");
  bye4.parentNode.removeChild(bye4);
}


function long(el) {
  el.style.color="red";
  el.style.width= "90%";
  
  var myElements = document.querySelectorAll(".tblong");
  for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 1;
  }
  var bye=document.getElementById("short");
  bye.parentNode.removeChild(bye);
  var bye1=document.getElementById("STINF");
  bye1.parentNode.removeChild(bye1);
  var bye2=document.getElementById("pharm");
  bye2.parentNode.removeChild(bye2);
}
