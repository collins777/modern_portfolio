// SELECT DOM ITEMS

const elements = {
  menuBtn: document.querySelector(".menu-btn"),
  menu: document.querySelector(".menu"),
  menuNav: document.querySelector(".menu-nav"),
  menuBranding: document.querySelector(".menu-branding"),
  navItems: document.querySelectorAll(".nav-item") // returns node list
};

// SET INITIAL STATE OF MENU

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    elements.menuBtn.classList.add("close");
    elements.menu.classList.add("show");
    elements.menuNav.classList.add("show");
    elements.menuBranding.classList.add("show");
    elements.navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    elements.menuBtn.classList.remove("close");
    elements.menu.classList.remove("show");
    elements.menuNav.classList.remove("show");
    elements.menuBranding.classList.remove("show");
    elements.navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
};

elements.menuBtn.addEventListener("click", toggleMenu);
