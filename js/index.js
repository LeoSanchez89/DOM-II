// Your code goes here

// stop links
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", event => {
	event.preventDefault();
});

// 10 Event Listeners

const beep = document.querySelector("img");

beep.addEventListener("click", event => {
	var audio = new Audio("/sound/Horn.mp3");
	audio.play();
});

const fun = document.querySelector("h1");

fun.addEventListener("mouseover", event => {
	fun.style.color = "red";
	fun.style.fontSize = "7em";
	fun.style.letterSpacing = "2rem";
	fun.style.fontWeight = "bold";
});

fun.addEventListener("mouseleave", event => {
	fun.style.color = "black";
	fun.style.fontSize = "4em";
	fun.style.letterSpacing = "0rem";
	fun.style.fontWeight = "normal";
});

const mouseEnter = document.querySelector(".img-content img");

mouseEnter.addEventListener("mouseenter", event => {
	mouseEnter.style.transform = "rotate(360deg)";
	mouseEnter.style.transition = "transform 0.4s";
});

mouseEnter.addEventListener("mouseleave", () => {
	mouseEnter.style.transform = "rotate(0deg)";
	mouseEnter.style.transition = "transform 0.4s";
});

const dblclick = document.querySelector(".img-fluid");

dblclick.addEventListener("dblclick", event => {
	dblclick.style.transform = "scale(1.2)";
	dblclick.style.transition = "transform 0.4s";
});

dblclick.addEventListener("mouseleave", event => {
	dblclick.style.transform = "scale(1)";
});

const keyPress = document.querySelector("body");

keyPress.addEventListener("keydown", event => {
	alert("OUCH!");
});

const resize = document.querySelector("body");

window.addEventListener("resize", () => {
	resize.style.backgroundImage = "url('/img/bus.jpg')";
	resize.style.color = "white";
});

let noRightClick = document.querySelector("body");

noRightClick.addEventListener("contextmenu", event => {
	event.preventDefault();
});

let drag = document.querySelector("img");

drag.addEventListener("dragstart", () => {
	var clip = new Audio("/sound/wheels.mp3");
	clip.play();
});

let scroll = document.querySelector("body");

scroll.addEventListener("wheel", () => {
	scroll.style.backgroundColor = "yellow";
});

let color1 = document.querySelector(".content-destination");

color1.addEventListener("click", () => {
	color1.style.backgroundColor = "purple";
});

let color2 = document.querySelector(".content-destination h2");

color2.addEventListener("click", event => {
	color2.style.color = "orange";
	event.stopPropagation();
});
