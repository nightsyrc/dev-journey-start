// Find the button
const myButton = document.querySelector('button');

// Add a click event
myButton.addEventListener('click', function() {
    myButton.style.backgroundColor = '#28a745'; // Change button color (greenish)
    myButton.style.transform = 'scale(1.2)';    // Slightly grow the button
    myButton.textContent = 'Clicked! 😘';       // Change button text
  });