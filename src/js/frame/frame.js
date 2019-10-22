import move from "./move/move"
window.onload=function () {
  var liNodes = document.querySelectorAll("html body #app .head .headMain .nav .item");
  var homeNode = liNodes[0];
  var arrow = document.querySelector("html body #app .head .headMain .arrow");
  arrow.style.left = (homeNode.offsetLeft + (homeNode.offsetWidth/2) - (arrow.offsetWidth/2) )+"px";
  for(var i=0;i<liNodes.length;i++){
    liNodes[i].index = i;
    liNodes[i].onclick=function () {
      move(this.index);
    }
  }
}
