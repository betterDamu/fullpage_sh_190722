var homeList = document.querySelector("#app .home-list");
var homePoints = document.querySelector("#app .home-points");
homeList.style.transition = "transform 1s , opacity 1s";
homePoints.style.transition = "transform 1s , opacity 1s";

var plane1 =document.querySelector("#app .course .plane1")
var plane2 =document.querySelector("#app .course .plane2")
var plane3 =document.querySelector("#app .course .plane3")

var pencel1 =document.querySelector("#app .works .pencel1")
var pencel2 =document.querySelector("#app .works .pencel2")
var pencel3 =document.querySelector("#app .works .pencel3")

var about3 =document.querySelector("#app .about-3")
var about4 =document.querySelector("#app .about-4")

var team1 =document.querySelector("#app .team-1")
var team2 =document.querySelector("#app .team-2")



export default [
  {
    inAn(){
      homeList.style.opacity = 1;
      homePoints.style.opacity = 1;
      homeList.style.transform="translateY(0px)";
      homePoints.style.transform="translateY(0px)";
    },
    outAn(){
      homeList.style.opacity = 0;
      homePoints.style.opacity = 0;
      homeList.style.transform="translateY(-250px)";
      homePoints.style.transform="translateY(250px)";
    },
  },
  {
    inAn(){
      plane1.style.transform = "translate(100px,100px)"
      plane2.style.transform = "translate(100px,-100px)"
      plane3.style.transform = "translate(-100px,100px)"
    },
    outAn(){
      plane1.style.transform = "translate(0px,0px)"
      plane2.style.transform = "translate(0px,0px)"
      plane3.style.transform = "translate(0px,0px)"
    },
  },
  {
    inAn(){
      pencel1.style.transform = "translateY(20px)"
      pencel2.style.transform = "translateY(-20px)"
      pencel3.style.transform = "translateY(-20px)"
    },
    outAn(){
      pencel1.style.transform = "translateY(0px)"
      pencel2.style.transform = "translateY(0px)"
      pencel3.style.transform = "translateY(0px)"
    },
  },
  {
    inAn(){
      about3.style.transform="rotate(0deg)"
      about4.style.transform="rotate(0deg)"
    },
    outAn(){
      about3.style.transform="rotate(45deg)"
      about4.style.transform="rotate(-45deg)"
    },
  },
  {
    inAn(){
      team1.style.transform="translateX(0px)"
      team2.style.transform="translateX(0px)"
    },
    outAn(){
      team1.style.transform="translateX(-100px)"
      team2.style.transform="translateX(100px)"
    },
  }
]

