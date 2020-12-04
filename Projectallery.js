var slide = document.getElementsByClassName("slideshow");

for(i=1;i<7;i++){
  slide[i].style.display = "none";
}

function plusSlides(n){
  for(i=0;i<7;i++){
    slide[i].style.display="none";
  }
  slide[n].style.display="inline-block";
}

function showmore(){
  var smallnav = document.getElementsByClassName("navsm");
  if(smallnav[0].style.display === "none"){
  smallnav[0].style.display = "block";
  }
  else{
    smallnav[0].style.display = "none";

  }

}