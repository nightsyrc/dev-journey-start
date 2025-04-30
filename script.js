// Find the button
const myButton = document.querySelector('button');

// Add a click event
myButton.addEventListener('click', function() {
    myButton.classList.toggle('clicked');
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