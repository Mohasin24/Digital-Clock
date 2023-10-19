// Get references to HTML elements by their IDs
const hr = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

// Function to format a time value (add leading zero if < 10)
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

// Function to update the time in the HTML elements
function time() {
    // Create a new Date object to get the current time
    const currentDate = new Date();

    // Update the content of the 'hr' element with the formatted hours
    hr.textContent = formatTime(currentDate.getHours());

    // Update the content of the 'min' element with the formatted minutes
    min.textContent = formatTime(currentDate.getMinutes());

    // Update the content of the 'sec' element with the formatted seconds
    sec.textContent = formatTime(currentDate.getSeconds());
}

// Call the 'time' function every 1000 milliseconds (1 second) to update the time
setInterval(time, 1000);
