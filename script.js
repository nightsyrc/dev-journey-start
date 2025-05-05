//TOGGLEABLE BUTTON
// Find the button
const myButton = document.querySelector("button");
// Add a click event
myButton.addEventListener("click", function () {
  myButton.classList.toggle("clicked");
});

// Logic for the Dynamic DOM Message Board

//First we declare our const vars by readin the elements from DOM referencing their ID value
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messagesContainer = document.getElementById("messageContainer");

//"Enter" key support for the inbox
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    message_generator();
  }
});

// First we add a Listener to our sendBtn for the Click Event
//  () => is an arrow function. shorthand for: function() { ... }
sendBtn.addEventListener("click", () => {
  message_generator();
});

function message_generator() {
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
}

//PROJECTS CARD GENERATOR
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

const projectCardsContainer = document.getElementById("projectCards");
projects.forEach((project) => {
  const card = card_generator(
    project.title,
    project.description,
    project.image
  );
  projectCardsContainer.append(card);
});

// // Get the container element from the DOM where project cards will be displayed
// const projectCardsContainer = document.getElementById("projectCards");

// // Loop through the array of projects and create a visual card for each
// projects.forEach((project) => {
//   // Create a new <div> element to act as a card
//   const card = document.createElement("div");

//   // Set the inner HTML of the card with project info
//   // This includes an image, title, and description pulled from the object
//   card.classList.add("project-card");

//   card.innerHTML = `
//   <img src="${project.image}" alt="${project.title}" />
//     <h3>${project.title}</h3>
//     <p>${project.description}</p>
//   `;
//   // Append the completed card to the main container in the DOM
//   projectCardsContainer.appendChild(card);
// }
// );

//CARD GENERATOR FUNCTION
function card_generator(title, description, image) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <img src="${image}" alt="${title}"/>
  `;
  return card;
}

//GET PENDING TASKS FUNCTION

const projects_data = [
  {
    name: "Website Redesign",
    collaborators: ["Ana", "Luis", "Carlos"],
    deadline: "2024-06-01",
    tasks: [
      { title: "Build wireframes", done: true },
      { title: "Setup hosting", done: false },
    ],
  },
  {
    name: "Marketing Landing Page",
    collaborators: ["María"],
    deadline: "2024-05-10",
    tasks: [
      { title: "Write copy", done: true },
      { title: "Design CTA", done: true },
      { title: "Implement form", done: false },
    ],
  },
];

//PENDING TASKS FUNCTION
function get_pending_tasks(projects_data) {
  let projectNames = [];

  projects_data.forEach((project) => {
    const has_pending = project.tasks.some((task) => !task.done);

    if (has_pending) {
      projectNames.push(project.name);
    }

    //alert(projectNames);
  });
  console.table(projectNames);
  return projectNames;
}


const personalityTraits = [
  {
    title: "🧠 Strategic Thinker",
    description:
      "I love solving problems with logic and creativity. My ENTP brain thrives when exploring systems and patterns in tech.",
  },
  {
    title: "💬 Adaptable Communicator",
    description:
      "As an extroverted intuitive, I connect ideas quickly and communicate them clearly — great for teamwork and user-centric dev.",
  },
  {
    title: "⚡ Fast Learner & Challenger",
    description:
      "I question assumptions and adapt fast. This makes me naturally drawn to innovation and pushing boundaries in code.",
  },
];

const personalityContainer = document.getElementById("personalityCards");

personalityTraits.forEach((trait) => {
  const card = document.createElement("div");
  card.classList.add("personality-card");

  card.innerHTML = `
    <h3>${trait.title}</h3>
    <p>${trait.description}</p>
  `;

  personalityContainer.appendChild(card);
});