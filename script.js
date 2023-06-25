// script.js
// Get the input and output elements
var input = document.getElementById("input");
var output = document.getElementById("output");
// Get the copy button element
var copy = document.getElementById("copy");
// Get the notification element
var notification = document.getElementById("notification");
// Create a new Showdown converter
var converter = new showdown.Converter();
// Define a function to convert the input to HTML
function convert() {
  // Get the input value
  var md = input.value;
  // Convert it to HTML using Showdown
  var html = converter.makeHtml(md);
  // Set the output innerHTML to the HTML value
  output.innerHTML = html;
}
// Define a function to copy the output to clipboard
function copyOutput() {
  // Create a temporary element to hold the HTML content
  var temp = document.createElement("div");
  temp.innerHTML = output.innerHTML;

  // Append it to the body
  document.body.appendChild(temp);

  // Select all the content inside the element
  var range = document.createRange();
  range.selectNodeContents(temp);

  // Copy it using execCommand('copy')
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');

  // Remove the temporary element
  document.body.removeChild(temp);

  // Show the notification text
  notification.style.display = "block";

  // Hide the notification text after 2 seconds
  setTimeout(function() {
    notification.style.display = "none";
  }, 2000);
}
// Call the convert function when the input changes
input.addEventListener("input", convert);
// Call the copyOutput function when the copy button is clicked
copy.addEventListener("click", copyOutput);
// Call the convert function once at the start
convert();
