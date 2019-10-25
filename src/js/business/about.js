function createLi(ul) {
  for(var i=0;i<4;i++){
    var w = ul.offsetWidth/2;
    var h = ul.offsetHeight/2;
    var liNode = document.createElement("li");
    var imgNode = document.createElement("img");
    imgNode.src = ul.dataset.src;
    imgNode.style.left =  `${-i%2*w}px`;
    imgNode.style.top =   `${-Math.floor(i/2)*h}px`;
    liNode.style.width = `${w}px`;
    liNode.style.height = `${h}px`;
    liNode.appendChild(imgNode)
    ul.appendChild(liNode)
  }
}

export default function () {
  var list = document.querySelectorAll("#app .content .list li.about > div .box > ul");
  var boxes = document.querySelectorAll("#app .content .list li.about > div .box");
  var h = list[0].offsetHeight/2;
  var w = list[0].offsetWidth/2;
  list.forEach((item)=>{
    createLi(item)
  })
  boxes.forEach((box)=>{
    /*
      i   left  top
      0   0      0
      1  -w      0
      2  0       -h
      3  -w      -h

    */
    /*
             i  left  top
             0   0      h
             1  -2w      0
             2  w       -h
             3  -w      -2h
    */
    box.onmouseenter=function () {
      var imgNodes = this.querySelectorAll("ul > li > img")
      imgNodes.forEach((imgNode,index)=>{
        switch (index){
          case 0:
            imgNode.style.top = `${h}px`;
            break;
          case 1:
            imgNode.style.left = `${-2*w}px`;
            break;
          case 2:
            imgNode.style.left = `${w}px`;
            break;
          case 3:
            imgNode.style.top = `${-2*h}px`;
            break;
        }
      })
    }
    box.onmouseleave=function () {
      var imgNodes = this.querySelectorAll("ul > li > img")
      imgNodes.forEach((imgNode,index)=>{
        switch (index){
          case 0:
            imgNode.style.top = `${0}px`;
            break;
          case 1:
            imgNode.style.left = `${-w}px`;
            break;
          case 2:
            imgNode.style.left = `${0}px`;
            break;
          case 3:
            imgNode.style.top = `${-h}px`;
            break;
        }
      })
    }
  })
}
