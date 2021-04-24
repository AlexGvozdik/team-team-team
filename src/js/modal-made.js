(() => {
  const refs = {
    openModalBtn: document.querySelector('[made-data-modal-open]'),
    closeModalBtn: document.querySelector('[made-data-modal-close]'),
    modal: document.querySelector('[made-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();