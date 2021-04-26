(() => {
  const menuBtnRef = document.querySelector('[data-menu-button-burger]');1
  const mobileMenuRef = document.querySelector('[data-menu-burger]');2
  const menuNavLink = [...document.querySelectorAll('.drop-menu__link ')];
  menuNavLink.forEach(e => {
    e.addEventListener('click', () => {
      menuBtnRef.classList.toggle('is-open');
      mobileMenuRef.classList.toggle('is-open');
    });
  });
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
})();
