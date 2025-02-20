// Función para manejar el clic en los elementos del menú
document.addEventListener("DOMContentLoaded", function() {
  // Obtiene todos los elementos del menú desplegable
  const dropdowns = document.querySelectorAll(".dropdown");
  
  dropdowns.forEach(dropdown => {
    const menuItem = dropdown.querySelector(".menu-item");
    const dropdownList = dropdown.querySelector(".dropdown-list");
    
    menuItem.addEventListener("click", function(e) {
      e.preventDefault();
      
      // Si hay otro menú abierto, ciérralo
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("active");
        }
      });
      
      // Alterna el estado del menú desplegable
      dropdown.classList.toggle("active");
    });
  });

  // Cierra el menú si se hace clic fuera de él
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove("active");
      });
    }
  });
});
