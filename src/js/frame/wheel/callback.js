import move from "../move/move"
export default function (ev,index) {
  ev = ev || event;
  var pointNodes = document.querySelectorAll("html body #app .content .points li");
  var contentNode = document.querySelector("html body #app .content");
  var length = pointNodes.length;
  var dir = "";

  /*(ev.wheelDelta &&  ev.wheelDelta > 0 ) ? dir = "up": dir = "down";
  (ev.detail &&  ev.detail > 0 ) ? dir = "down":dir ="up";*/

  if(ev.wheelDelta &&  ev.wheelDelta > 0){
    dir = "up"
  }else if(ev.wheelDelta &&  ev.wheelDelta < 0){
    dir = "down";
  }

  if(ev.detail &&  ev.detail > 0){
    dir = "down"
  }else if(ev.detail &&  ev.detail < 0){
    dir ="up"
  }

  switch (dir){
    case "up":
      index > 0 ? index-- : 0;
      move(index)
      break;
    case "down":
      index < (length-1) ? index++ :(length-1) ;
      move(index)
      break;
  }
  contentNode.index = index;
  console.log(index)
}
