// Initialize variable to keep track of currently open dropdown
let currentDropdown = null;

// Select all dropdown buttons
const dropBtns = document.querySelectorAll(".dropdown-btn");

// Function to check if the screen width is larger than 625 pixels
const isLargeScreen = () => window.innerWidth > 625;

// Function to handle dropdown toggle
const handleDropdownToggle = (item) => {
  const dropdownContent = item.nextElementSibling;
  // Close the currently open dropdown if it's different from the clicked one
  if (currentDropdown && currentDropdown !== dropdownContent) {
    currentDropdown.style.display = "none";
  }
  // Toggle the display of the clicked dropdown
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
  currentDropdown = (dropdownContent.style.display === "block") ? dropdownContent : null;
};

// Function to close dropdown when mouse leaves dropdown area or container
const closeDropdown = () => {
  if (isLargeScreen() && currentDropdown) { // Added a check for currentDropdown
    currentDropdown.style.display = "none";
    currentDropdown = null;
  }
};




// Add click event listener to dropdown buttons
dropBtns.forEach(item => {
  item.addEventListener("click", event => {
    if (isLargeScreen()) {
      handleDropdownToggle(item);
    }
  });
});

// Add mouseleave event listeners to close dropdown when mouse leaves dropdown area or container
dropBtns.forEach(item => {
  const dropdownContent = item.nextElementSibling;
  dropdownContent.addEventListener("mouseleave", closeDropdown);
  const dropdownContainer = item.parentElement;
  dropdownContainer.addEventListener("mouseleave", closeDropdown);
});
