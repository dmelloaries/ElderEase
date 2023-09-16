// Get references to the popup and close button
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const showPopupButton = document.getElementById('showPopup');

// Function to show the popup
function showPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopupFunction() {
    popup.style.display = 'none';
}

// Event listeners
showPopupButton.addEventListener('click', showPopup);
closePopup.addEventListener('click', closePopupFunction);
