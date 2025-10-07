/*
  Full Name: Jian Rexell Codriga
  Section: IT 301
  Description: This program changes the background color of the webpage 
               to a random color whenever the button is clicked. It also 
               displays the color code, which can be copied to clipboard 
               with a single click.
*/

// Select elements
const colorBtn = document.getElementById("colorBtn");
const colorCode = document.getElementById("colorCode");

// Generate random hex color
function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  return randomColor.toUpperCase();
}

// Change color when button is clicked
colorBtn.addEventListener("click", function() {
  const newColor = getRandomColor();
  document.body.style.background = newColor;
  colorCode.textContent = `Current Color: ${newColor}`;
  colorBtn.textContent = "Color Changed!";

  setTimeout(() => {
    colorBtn.textContent = "Change Color";
  }, 1500);
});

// Copy color code when clicked
colorCode.addEventListener("click", function() {
  const textToCopy = colorCode.textContent.match(/#([A-F0-9]{6})/i);
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy[0]).then(() => {
      colorCode.textContent = `Copied: ${textToCopy[0]}`;
      setTimeout(() => {
        colorCode.textContent = `Current Color: ${textToCopy[0]}`;
      }, 1000);
    });
  }
});
