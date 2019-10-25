/*
手动轮播 (不需要无缝)
自动轮播 (要无缝)
手动与自动的同步
    当手动轮播结束后 要告诉自动轮播的逻辑 刚刚手动到了哪一屏
       将 autoIndex 设置为  当前点的那一屏
    当自动轮播进行到一半时 突然手动轮播 自动轮播要告诉手动轮播刚刚自动到了哪一屏
      将 oldautoIndex 修改为 oldIndex
*/
import ponitsFn from "./ponits/ponits"

const rightShow = "rightShow"
const rightHide = "rightHide"
const leftShow = "leftShow"
const leftHide = "leftHide"

var content = document.querySelector("#app .content");
var faceNodes = document.querySelectorAll("#app .content .list li.home > div .home-list .home-item");
var ponitNodes = document.querySelectorAll("#app .content .list li.home > div .home-points .home-point");
var oldIndex = 0;
var timer = 0;
var autoIndex = 0;
// var oldautoIndex = 0;

content.onmouseleave=function () {
  autoMove()
}
content.onmouseenter=function () {
  clearInterval(timer)
}

function clearClass(node) {
  node.classList.remove(rightShow)
  node.classList.remove(rightHide)
  node.classList.remove(leftShow)
  node.classList.remove(leftHide)
}

function autoMove() {
  clearInterval(timer)

  timer = setInterval(()=>{
    autoIndex++;
    if(autoIndex === faceNodes.length){
      autoIndex = 0;
    }

   /*
    autoIndex :    1 2 3  0  1  ...
    oldautoIndex : 0 1 2  3  0  ...
    */


    clearClass(faceNodes[autoIndex])
    clearClass(faceNodes[oldIndex])
    faceNodes[autoIndex].classList.add(rightShow)
    faceNodes[oldIndex].classList.add(leftHide)

    //小圆点
    ponitsFn(ponitNodes,autoIndex)
    oldIndex = autoIndex;

  },2000)
}

export default function f() {
  autoMove();
  ponitNodes.forEach((item,index)=>{
    item.index = index
    item.onclick=function () {
      clearInterval(timer);
      if(this.index === oldIndex){
        return ;
      }

      clearClass(faceNodes[this.index])
      clearClass(faceNodes[oldIndex])
      //点击的是右边
      if(this.index > oldIndex){
        faceNodes[this.index].classList.add(rightShow)
        faceNodes[oldIndex].classList.add(leftHide)
      }

      //点击的是左边
      if(this.index < oldIndex){
        faceNodes[this.index].classList.add(leftShow)
        faceNodes[oldIndex].classList.add(rightHide)
      }

      //小圆点
      ponitsFn(ponitNodes,this.index )

      oldIndex = this.index;
      autoIndex = this.index;
    }
  })
}
