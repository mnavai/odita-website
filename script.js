const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebarMenu = document.getElementById('sidebar-menu');

function toggleSidebarMenu() {
  hamburgerMenu.classList.toggle('active');
  sidebarMenu.classList.toggle('active');
}

hamburgerMenu.addEventListener('click', toggleSidebarMenu);
