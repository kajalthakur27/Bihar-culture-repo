
function showInfo() {
    document.getElementById("info").scrollIntoView({
      behavior: "smooth"
    });
  }
  
  // Optional: Add dynamic welcome message (if needed in future)
  window.onload = function () {
    console.log("Welcome to Bihar Culture Web Museum");
  };
  

// Example: Adding a simple click event to each card
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('click', () => {
      alert(`You clicked on ${card.querySelector('h3').textContent}`);
    });
  }); 

 const dropdown = document.getElementById('languageDropdown');
  const display = document.getElementById('selectedLanguage');
  
  dropdown.addEventListener('change', () => {
    const selected = dropdown.options[dropdown.selectedIndex].text;
    display.textContent = `You selected: ${selected}`;
  });
  
function openVideo(url) {
    window.open(url, "_blank");
  }
  
const toggleBtn = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });