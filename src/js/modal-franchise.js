(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeTwoModalBtn: document.querySelector('[data-modal-close-two]'),
    closeThreeModalBtn: document.querySelector('[data-modal-close-three]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeTwoModalBtn.addEventListener('click', toggleModal);
  refs.closeThreeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();