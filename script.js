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
  title:  "Dynamic Message Board",
  description:  "Users can type and post messages live to the page.",
  image:  "images/fsd_img_3.webp"
},
{
  title:  "Simple Portfolio",
  description:  "A personal site with my resume and GitHub links.",
  image:  "images/fsd_img_4.jpg"
},
{
  title:  "Js Clock",
  description:  "A digital clock built purely with Javascript",
  image:  "images/fsd_img_5.jpg"
}
];

//Declaramos el contenedor de las tarjetas y le referenciamos el elemento correspondiente en el DOM 
// en este caso referenciando por ID al elemento projectCards
const projectCardsContainer = document.getElementById("projectCards");

//Uilizamos nuestro Array projects y decimos que por cada objecto en el array ejecute la siguiente funcion
projects.forEach((project) => {

  //We declare the object card and assign it the value of a newly created element in our DOM, in this case a div 
  const card = document.createElement("div");
  
  //We assign the class "project-card" to our new card
  card.classList.add("project-card");

  //We assign an innerHTML to our card object. 
  card.innerHTML = 
  
  //here we build the inner HTML that will be added to the card object.
  //first we start with a string that makes reference to an image location.
  //then dinamically inject the value of our array object in reference to the 
  // image element which reference an image location in the folder project
  //Same with title and description. Both loaded from our array object.
  `<img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  //Finally we append our Card object to our DOM container. 
  projectCardsContainer.appendChild(card);
});