import inOutArr from "./inOutAn.js"
import homeFn from "./home"
export default function () {
  var maskNode = document.querySelector("#app > .mask")
  var upNode = document.querySelector("#app > .mask .up")
  var downNode = document.querySelector("#app > .mask .down")
  var lineNode = document.querySelector("#app > .mask .line")


  //数据加载完  发ajax
  setTimeout(()=>{
    lineNode.style.width = "100%"
  },2000)

  lineNode.addEventListener("transitionend",()=>{
    upNode.style.height = "0px";
    downNode.style.height = "0px";
    lineNode.remove()
  })

  upNode.addEventListener("transitionend",()=>{
    maskNode.remove()
    inOutArr[0].inAn()
    homeFn()
  })
}
