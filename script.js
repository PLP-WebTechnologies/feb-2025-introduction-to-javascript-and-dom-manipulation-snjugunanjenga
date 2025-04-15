// Function to change the text content dynamically
function changeText() {
    const heading = document.getElementById("change-me");
    heading.textContent = "🎉 Text has been changed using JavaScript!";
  }
  
  // Function to modify the background color using JS
  function changeColor() {
    document.body.style.backgroundColor = "#ffd700"; // Light yellow
  }
  
  // Function to add an element dynamically
  function addElement() {
    const container = document.getElementById("dynamic-container");
  
    // Check if the element already exists
    if (!document.getElementById("info")) {
      const newDiv = document.createElement("div");
      newDiv.id = "info";
      newDiv.textContent = "🧠 This content was added using JavaScript!";
      container.appendChild(newDiv);
    }
  }
  
  // Function to remove the dynamically added element
  function removeElement() {
    const info = document.getElementById("info");
    if (info) {
      info.remove();
    }
  }
  
  // Function to handle form submission and display data
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    const output = document.getElementById("formOutput");
    output.innerHTML = `
      <h3>Form Submitted ✅</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;
  
    // Optionally clear the form
    document.getElementById("studentForm").reset();
  }
  
 

// Toggle Dark/Light Mode using event listener
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Mouseover & Mouseout Example
  const mouseText = document.getElementById("mouseTarget");
  mouseText.addEventListener("mouseover", () => {
    mouseText.style.color = "tomato";
  });
  mouseText.addEventListener("mouseout", () => {
    mouseText.style.color = "black";
  });
  
  // Animate box on click (not just hover)
  document.getElementById("animateBox").addEventListener("click", () => {
    const box = document.getElementById("animateBox");
    box.style.transform = "scale(1.3)";
    setTimeout(() => {
      box.style.transform = "scale(1)";
    }, 500);
  });
  
  // Create dynamic cards on button click
  document.getElementById("addCard").addEventListener("click", () => {
    const container = document.getElementById("cardContainer");
  
    const card = document.createElement("div");
    card.classList.add("card");
  
    const randomId = Math.floor(Math.random() * 1000);
    card.innerHTML = `
      <h4>👤 Student #${randomId}</h4>
      <p>Generated using JS</p>
      <button onclick="alert('Student #${randomId} says hello!')">Say Hi</button>
    `;
  
    container.appendChild(card);
  });
  