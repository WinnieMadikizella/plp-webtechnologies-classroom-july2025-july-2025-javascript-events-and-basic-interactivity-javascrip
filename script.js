// ================================
// Part 1: Event Handling & Counter
// ================================
const counterBtn = document.getElementById("counterBtn");
let count = 0;

counterBtn.addEventListener("click", () => {
  count++;
  counterBtn.textContent = `Click Me: ${count}`;
});

// ================================
// Part 2: Light/Dark Mode Toggle
// ================================
const toggleModeBtn = document.getElementById("toggleModeBtn");
const body = document.body;

toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if(body.classList.contains("dark-mode")) {
    toggleModeBtn.textContent = "Switch to Light Mode";
  } else {
    toggleModeBtn.textContent = "Switch to Dark Mode";
  }
});

// ================================
// Part 3: Form Validation
// ================================
const form = document.getElementById("assignmentForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let messages = [];
  if(name === "") messages.push("Name is required.");
  if(email === "" || !/\S+@\S+\.\S+/.test(email)) messages.push("Valid email is required.");
  if(password.length < 6) messages.push("Password must be at least 6 characters.");

  if(messages.length > 0) {
    alert(messages.join("\n"));
  } else {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// ================================
// Part 4: Collapsible FAQ
// ================================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// ================================
// Part 3: Form Validation with Message Div
// ================================
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let messages = [];
  if(name === "") messages.push("Name is required.");
  if(email === "" || !/\S+@\S+\.\S+/.test(email)) messages.push("Valid email is required.");
  if(password.length < 6) messages.push("Password must be at least 6 characters.");

  if(messages.length > 0) {
    formMessage.textContent = messages.join(" ");
    formMessage.className = "form-message error";
    formMessage.style.display = "block";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.className = "form-message success";
    formMessage.style.display = "block";
    form.reset();
  }
});
