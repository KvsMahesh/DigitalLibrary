const tooglebut = document.getElementsByClassName("toogleb")[0]
const navlinks = document.getElementsByClassName("links")[0]

tooglebut.addEventListener("click" , () => {
    navlinks.classList.toggle("active")
})

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "images/img1.jpg";
images[1] = "images/img2.jpeg";
images[2] = "images/img3.jpg";
images[3] = "images/img4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;