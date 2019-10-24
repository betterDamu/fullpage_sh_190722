export default function (ponitNodes,currentIndex) {
  //小圆点的同步
  ponitNodes.forEach((item)=>{
    item.classList.remove("active")
  })
  ponitNodes[currentIndex].classList.add("active")
}
