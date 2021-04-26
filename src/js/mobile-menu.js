(() => {
    const menuBtnRef = document.querySelector("[data-menu-button-burger]");
    const mobileMenuRef = document.querySelector("[data-menu-burger]");
    const mobileBtnClose = document.querySelector("[data-menu-close-burger]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    })

    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
    });
})()