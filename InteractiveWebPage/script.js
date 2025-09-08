
// Part 1: Event Handling

// Click event
const heading = document.querySelector("h1");
heading.addEventListener("click", () => {
  alert("You clicked the heading!");
});

// Mouseover event
heading.addEventListener("mouseover", () => {
  heading.style.color = "blue";
});
heading.addEventListener("mouseout", () => {
  heading.style.color = "black";
});

// Light/Dark Mode
const body = document.body;
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Light/Dark Mode";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const counterBtn = document.createElement("button");
counterBtn.textContent = "Click Me: 0";
document.body.appendChild(counterBtn);

let count = 0;
counterBtn.addEventListener("click", () => {
  count++;
  counterBtn.textContent = `Click Me: ${count}`;
});

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let messages = [];

  if(name === "") messages.push("Name is required.");
  if(email === "" || !/\S+@\S+\.\S+/.test(email)) messages.push("Valid email required.");
  if(password.length < 6) messages.push("Password must be at least 6 characters.");

  if(messages.length > 0) {
    alert(messages.join("\n"));
  } else {
    alert("Form submitted successfully!");
    form.reset();
  }
});



