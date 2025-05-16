// === DOM & Calculation ===
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
document.getElementById("calculateBtn").addEventListener("click", () => {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);
  result.textContent = isNaN(sum) ? "Please enter valid numbers" : sum;
});

// === SVG Drawing ===
document.getElementById("drawSVGBtn").addEventListener("click", () => {
  const svg = document.getElementById("demoSVG");
  svg.innerHTML = ""; // Clear previous
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", 100);
  circle.setAttribute("cy", 100);
  circle.setAttribute("r", 50);
  circle.setAttribute("fill", "blue");
  svg.appendChild(circle);
});

// === External API Fetch ===
document.getElementById("fetchWord").addEventListener("click", async () => {
  const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
  const data = await res.json();
  document.getElementById("word").textContent = data.value;
});
