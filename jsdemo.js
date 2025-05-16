// === External API Fetch ===
document.getElementById("fetchJoke").addEventListener("click", async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  document.getElementById("jokeText").textContent = data.value;
});

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
  svg.innerHTML = ""; // Clear previous drawing

  const svgWidth = svg.clientWidth;
  const svgHeight = svg.clientHeight;

  const radius = Math.floor(Math.random() * 50) + 10; // Radius between 10 and 60
  const cx = Math.floor(Math.random() * (svgWidth - 2 * radius)) + radius;
  const cy = Math.floor(Math.random() * (svgHeight - 2 * radius)) + radius;

  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", radius);
  circle.setAttribute("fill", randomColor);

  svg.appendChild(circle);
});

// Internal JSON 
