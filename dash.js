const profileContainer = document.getElementById("profile-container");
const dropdownMenu = document.getElementById("dropdown-menu");

profileContainer.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

// Close the dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!profileContainer.contains(e.target)) {
    dropdownMenu.classList.remove("active");
  }
});