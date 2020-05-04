const tooglebut = document.getElementsByClassName("toogleb")[0]
const navlinks = document.getElementsByClassName("links")[0]

tooglebut.addEventListener("click" , () => {
	navlinks.classList.toggle("active")
})

var i = 0;
var images = [];
var time = 3500;
	 
images[0] = "images/zozo1.jpg";
images[1] = "images/zozo2.jpg";
images[2] = "images/zozo3.jpg";

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;