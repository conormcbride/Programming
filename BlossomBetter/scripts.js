// scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Example: Add event listener for a button (you'll need to add a button in your HTML to make this work)
    const button = document.querySelector('#myButton'); // make sure to add an element with id="myButton" in your HTML
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});
