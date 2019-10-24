// import "@babel/polyfill"
import frameFn from "./frame/frame"
import homeFn from "./business/home"
//效果
window.onload=function () {
  frameFn();
  homeFn();
}

// 处理用户缩放操作
window.onresize=function () {
  var liNodes = document.querySelectorAll("html body #app .head .headMain .nav .item");
  var homeNode = liNodes[0];
  var arrow = document.querySelector("html body #app .head .headMain .arrow");
  var contentLiNodes = document.querySelectorAll("html body #app .content > .list > li");
  var contentNode = document.querySelector("html body #app .content");
  var pointNodes = document.querySelectorAll("html body #app .content .points li");

  contentLiNodes.forEach((liNode)=>{
    liNode.style.height = contentNode.offsetHeight + "px";
  })

  arrow.style.left = (homeNode.offsetLeft + (homeNode.offsetWidth/2) - (arrow.offsetWidth/2) )+"px";
}


