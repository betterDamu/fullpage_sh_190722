var intervalTimer = {
  timer1:0,
  timer2:0
}
export default {
  intervalTimer,
  qipaofn:function (oc) {
    clearInterval(intervalTimer.timer1)
    clearInterval(intervalTimer.timer2)

    var arr =[];
    var ctx = oc.getContext("2d");
    intervalTimer.timer1 = setInterval(()=>{
      var radius = Math.round(Math.random()*6) + 4;
      var x =  Math.round(Math.random() * oc.width);
      var y =  oc.height - radius ;

      var r = Math.round(Math.random() * 255);
      var g = Math.round(Math.random() * 255);
      var b = Math.round(Math.random() * 255);
      var a = 1;

      var deg = 0;
      var startX = x;
      var startY = y;
      var stepX = Math.round(Math.random()*40) + 10
      var stepY = Math.round(Math.random()*40) + 10

      arr.push({
        x,
        y,
        radius,
        r,
        g,
        b,
        a,
        deg,
        startX,
        startY,
        stepX,
        stepY
      })
    },50)
    intervalTimer.timer2 = setInterval(()=>{
      ctx.clearRect(0, 0, oc.width, oc.height)

      arr.forEach((item,index)=>{
        item.deg += 10;
        item.x =  item.startX - (Math.sin( (item.deg*Math.PI)/180 )*item.stepX)
        item.y =  item.startY - ((item.deg*Math.PI)/180*item.stepY)

        if(item.y < -item.radius){
          arr.splice(index,1)
        }
      })


      arr.forEach((item)=>{
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = `rgba(${item.r},${item.g},${item.b},${item.a})`;
        ctx.arc(item.x,item.y,item.radius,0,2*Math.PI)
        ctx.fill()
        ctx.restore()
      })
    },1000/60)
  }
}
