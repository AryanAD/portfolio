// ABOUT-autotype
const typedTextSpan = document.querySelector(".typed-text");

const words = [
	"Web Developer",
	"Web Designer",
	"Student",
	"Quick Learner",
	"Graphics Designer",
	"Tech Enthusiast",
];

const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;

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

// EMAIL
function sendEmail() {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "aryanhohai@gmail.com",
		Password: "A7DD7303F98586C5CE6D65F1EB7E54892DD9",
		To: "aryanhohai@gmail.com",
		From: document.getElementById("email").value,
		Subject: "Portfolio Contact Message",
		Body:
			"Name: " +
			document.getElementById("name").value +
			"<br> Email: " +
			document.getElementById("email").value +
			"<br> Phone no: " +
			document.getElementById("phone").value +
			"<br> Message: " +
			document.getElementById("message").value,
	}).then((message) => alert("Message Sent Successfully!"));
}