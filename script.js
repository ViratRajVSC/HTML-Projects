// Toggle theme between light and dark
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

// Typewriter effect
const words = ["Front-End Developer", "Student", "Cheerful Person"];
let wordIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
  if (charIndex < words[wordIndex].length) {
    typewriterElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, Math.random() * (150 - 50) + 50); // Random typing speed between 100ms and 200ms
  } else {
    setTimeout(erase, 2000); // Delay before starting to erase
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, Math.random() * (100 - 25) + 25); // Random erasing speed between 50ms and 100ms
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500); // Delay before starting to type the next word
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (typewriterElement) {
    setTimeout(type, 1000); // Initial delay before starting to type
  }
});

function card1() {
  window.open("C:/Users/VIRAT RAJ/OneDrive/Pictures/Images/Sign In.png")
};

function card2() {
  window.open("C:/Users/VIRAT RAJ/OneDrive/Pictures/Images/Glowing Button.png")
};

function card3() {
  window.open("C:/Users/VIRAT RAJ/OneDrive/Pictures/Images/Portfolio.png")
};

function card4() {
  window.open("C:/Users/VIRAT RAJ/OneDrive/Pictures/Images/VS Code.png")
};

document.getElementById('sendEmail').addEventListener('click', function () {
  const subject = document.getElementById('subject').value;
  const body1 = document.getElementById('body1').value;
  const body2 = document.getElementById('body2').value;

  const mailtoLink = `mailto:viratraj50@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body1 + "\n\n" + body2)}`;

  window.location.href = mailtoLink;
});
