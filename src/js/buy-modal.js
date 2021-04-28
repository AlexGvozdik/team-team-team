(() => {
  const refs = {
    openTwoModalBtn: document.querySelector('[header-data-modal-open-two]'),
    closeTwoModalBtn: document.querySelector('[header-data-modal-close-two]'),
    modalTwo: document.querySelector('[header-data-modal-two]')
  };

  refs.openTwoModalBtn.addEventListener('click', toggleModal);
  refs.closeTwoModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modalTwo.classList.toggle('is-hidden');
  }
})();