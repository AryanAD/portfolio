// autotype-top
const typedTextSpan = document.querySelector(".typed-text");

const words = [
	"Web Developer",
	"Graphics Designer",
	"Web Designer",
	"Tech Enthusiast",
	"Student",
];

const typingDelay = 200;
const erasingDelay = 200;

// Delay between current and next text
const newLetterDelay = 1000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
	if (words.length) {
		setTimeout(type, newLetterDelay);
	}
});

function type() {
	if (charIndex < words[index].length) {
		typedTextSpan.textContent += words[index].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		setTimeout(erase, newLetterDelay);
	}
}

function erase() {
	if (charIndex > 0) {
		typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		index++;
		if (index >= words.length) {
			index = 0;
		}
		setTimeout(type, typingDelay + 1100);
	}
}

// to-top-button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// contact-form-bottom
const submit = document.getElementById("sub");
const close = document.getElementById("close");
const open = document.getElementById("open");
const model = document.getElementById("model");

open.addEventListener("click", () => model.classList.add("show-model"));
close.addEventListener("click", () => model.classList.remove("show-model"));
submit.addEventListener("click", () => alert("Submission Completed"));
submit.addEventListener("click", () => model.classList.remove("show-model"));

window.addEventListener("click", (e) => {
	e.target === model ? model.classList.remove("show-model") : false;
});
