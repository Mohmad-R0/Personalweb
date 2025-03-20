var btn = document.getElementById("btn");
var contant = document.getElementById("contant");
contant.style.top = "83px";
btn.onclick = function() {
  if(contant.style.top == "83px"){
    contant.style.top = "220px";
  }
  else{
    contant.style.top = "83px";
  }
}