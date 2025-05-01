// Find the button
const myButton = document.querySelector("button");

// Add a click event
myButton.addEventListener("click", function () {
  myButton.classList.toggle("clicked");
});

// Logic for the Dynamic Message Board

//First we declare our const vars by readin the elements from DOM referencing their ID value
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messagesContainer = document.getElementById("messageContainer");

// First we add a Listener to our sendBtn for the Click Event
//  () => is an arrow function. shorthand for: function() { ... }
sendBtn.addEventListener("click", () => {
  //We get the value from the <input> field, take the actual string and remve any spaces before after
  const msg = messageInput.value.trim();

  // Guard clause. It says: If the message is empty, stop here. Don’t do anything."Prevents creating blank messages.
  if (msg === "") return;

  // Create new message element
  //Create a new <div> in the DOM. Don’t put it on the page yet — just create it in memory
  const newMsg = document.createElement("div");
  // Adding a CSS class called message to the new <div>.
  newMsg.classList.add("message");
  // Filling the <div> with the actual user-typed text.
  newMsg.textContent = msg;

  // inserting the fully customized <div> into the live DOM
  messagesContainer.appendChild(newMsg);

  // Clear input
  messageInput.value = "";
});

//MY JAVASCRIPT PROJECTS SECTION
//First we declare the Array:
const projects = [
  //We start creating the objects:
  {
    title: "Dynamic Message Board",
    description: "Users can type and post messages live to the page.",
    image: "images/fsd_img_3.webp",
  },
  {
    title: "Simple Portfolio",
    description: "A personal site with my resume and GitHub links.",
    image: "images/fsd_img_4.jpg",
  },
  {
    title: "Js Clock",
    description: "A digital clock built purely with Javascript",
    image: "images/fsd_img_5.jpg",
  },
];

// Get the container element from the DOM where project cards will be displayed
const projectCardsContainer = document.getElementById("projectCards");

// Loop through the array of projects and create a visual card for each
projects.forEach((project) => {
  // Create a new <div> element to act as a card
  const card = document.createElement("div");

  // Set the inner HTML of the card with project info
  // This includes an image, title, and description pulled from the object
  card.classList.add("project-card");

  card.innerHTML = `
  <img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  // Append the completed card to the main container in the DOM
  projectCardsContainer.appendChild(card);
});
