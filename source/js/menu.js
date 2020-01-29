let button = document.querySelector(".main-nav__toggle");
let menu = document.querySelector(".page-header");
let menu_list = document.querySelector(".main-nav__wrapper");
let menu_fix = document.querySelector(".page-header + * :first-child:not(.visually-hidden) > header :first-child");

button.classList.add("main-nav__toggle--js");

if (menu.classList.contains("page-header--menu-opened")) {
  if (menu_list.classList.contains("main-nav__wrapper--opened")) {
    menu.classList.remove("page-header--menu-opened");
    menu_list.classList.remove("main-nav__wrapper--opened");
    menu.classList.add("page-header--menu-closed");
    menu_list.classList.add("main-nav__wrapper--closed");
    if (menu_fix.nodeName == "B") {
      menu_fix.classList.add("fix-menu--index");
    }
    if (menu_fix.nodeName == "H1") {
      menu_fix.classList.add("fix-menu");
    }
  }
}

button.addEventListener("click", function(evt) {
  if (menu.classList.contains("page-header--menu-closed") && menu_list.classList.contains("main-nav__wrapper--closed")) {
    evt.preventDefault();
    menu.classList.remove("page-header--menu-closed");
    menu_list.classList.remove("main-nav__wrapper--closed");
    menu.classList.add("page-header--menu-opened");
    menu_list.classList.add("main-nav__wrapper--opened");
    button.classList.remove("main-nav__toggle--closed");
    button.classList.add("main-nav__toggle--opened");
    if (menu_fix.nodeName == "B") {
      menu_fix.classList.remove("fix-menu--index");
    }
    if (menu_fix.nodeName == "H1") {
      menu_fix.classList.remove("fix-menu");
    }
  }
  else {
    evt.preventDefault();
    menu.classList.remove("page-header--menu-opened");
    menu_list.classList.remove("main-nav__wrapper--opened");
    menu.classList.add("page-header--menu-closed");
    menu_list.classList.add("main-nav__wrapper--closed");
    button.classList.remove("main-nav__toggle--opened");
    button.classList.add("main-nav__toggle--closed");
    if (menu_fix.nodeName == "B") {
      menu_fix.classList.add("fix-menu--index");
    }
    if (menu_fix.nodeName == "H1") {
      menu_fix.classList.add("fix-menu");
    }
  }
});
