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
  