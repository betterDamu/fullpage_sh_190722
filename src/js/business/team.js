import qipaoObj from "./qipao/qipao";
export default function () {
  var qipaoOc = document.querySelector("#app .content .list li.team > div  > .team-3  > .qipaoOc");
  var liNodes = document.querySelectorAll("#app .content .list li.team > div > .team-3 > .list > .item");
  var team3 = document.querySelector("#app .content .list li.team > div  > .team-3");
  qipaoOc.width = liNodes[0].offsetWidth ;
  qipaoOc.height = liNodes[0].offsetHeight;

  liNodes.forEach((liNode)=>{
    liNode.onmouseenter=function () {
      liNodes.forEach((liNode)=>{
        liNode.style.opacity=.5;
      })
      this.style.opacity = 1;

      qipaoOc.style.display = "block";
      qipaoOc.style.left = this.offsetLeft +"px";
      qipaoOc.style.top= this.offsetTop + 20 +"px";

      qipaoObj.qipaofn(qipaoOc);
    }
  })

  team3.onmouseleave=function () {
    console.log(1);
    liNodes.forEach((liNode)=>{
      liNode.style.opacity=1;
    })

    qipaoOc.style.display="none";
    console.log(qipaoObj.intervalTimer.timer1,qipaoObj.intervalTimer.timer2)
    clearInterval(qipaoObj.intervalTimer.timer1)
    clearInterval(qipaoObj.intervalTimer.timer2)
  }
}
