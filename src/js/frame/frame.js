import move from "./move/move"
import wheelCallback from "./wheel/callback.js"
window.onload=function () {
  var liNodes = document.querySelectorAll("html body #app .head .headMain .nav .item");
  var homeNode = liNodes[0];
  var arrow = document.querySelector("html body #app .head .headMain .arrow");
  var contentLiNodes = document.querySelectorAll("html body #app .content .list li");
  var contentNode = document.querySelector("html body #app .content");
  var pointNodes = document.querySelectorAll("html body #app .content .points li");

  //头部逻辑 小圆点逻辑
  arrow.style.left = (homeNode.offsetLeft + (homeNode.offsetWidth/2) - (arrow.offsetWidth/2) )+"px";
  if(liNodes.length === pointNodes.length){
    for(var i=0;i<liNodes.length;i++){
      liNodes[i].index = i;
      pointNodes[i].index = i;
      liNodes[i].onclick = pointNodes[i].onclick = function () {
        move(this.index);
      }
    }
  }

  //内容区逻辑
  contentLiNodes.forEach((liNode)=>{
    console.log(contentNode.offsetHeight);
    liNode.style.height = contentNode.offsetHeight + "px";
  })


  //鼠标滚轮
  var tiemr = 0;
  contentNode.index = 0;
  if(contentNode.addEventListener){
    contentNode.addEventListener("DOMMouseScroll",(event)=>{
      clearTimeout(tiemr)
      tiemr = setTimeout(()=>{
        wheelCallback(event,contentNode.index)
      },50)
    })
  }
  contentNode.onmousewheel = (event)=>{
    clearTimeout(tiemr)
    tiemr = setTimeout(()=>{
      wheelCallback(event,contentNode.index)
    },50)
  }

}
