const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","cerrar menu");
        
    } else{
        navToggle.setAttribute("aria-label", "Abri menu");
    }
})

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}