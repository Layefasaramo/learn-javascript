let noname = ["John", "Jane", "Doe"];
const saveButton = document.getElementById("saveButton");
const delbutton = document.getElementById("delbutton");
const displaybutton = document.getElementById("displaybutton");

// Save a value to localStorage
saveButton.addEventListener("click", function() {
    localStorage.setItem("myName", JSON.stringify(noname));
    console.log("Value saved to localStorage");
});

delbutton.addEventListener("click", function() { 
    localStorage.removeItem("myName", JSON.stringify(noname));
    console.log("Value deleted from localStorage");
});
displaybutton.addEventListener("click", function() {
    
    displaybutton.textContent = JSON.parse(localStorage.getItem("myName"));});


// Delete your code and refresh the page
// Fetch your value from localStorage and log it out