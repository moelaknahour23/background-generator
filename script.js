var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randomColor= document.getElementById("randomColor");


window.onload = setGradient;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function randomColorGenerator(){

var letters = '0123456789ABCDEF';
var color1T = '#'
var color2T = '#'

for(var i = 0 ; i < 6 ; i++){
 
  color1T = color1T + letters[Math.floor(Math.random() * 16)];
  color2T= color2T + letters[Math.floor(Math.random() * 16)];

}


body.style.background = 
	"linear-gradient(to right, " 
	+ color1T
	+ ", " 
	+ color2T
	+ ")";


randomColor.style.background = 
	"linear-gradient(to right, " 
	+ color1T
	+ ", " 
	+ color2T
	+ ")";	

css.textContent = body.style.background + ";";




}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor.addEventListener("click", randomColorGenerator);

