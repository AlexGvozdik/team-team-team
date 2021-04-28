(() => {
  const refs = {
      openModalBtn: document.querySelector('[data-modal-open-product]'),
      openModalBtnTwo: document.querySelector('[data-modal-open-product-two]'),
      openModalBtnThree: document.querySelector('[data-modal-open-product-three]'),
      closeModalBtn: document.querySelector('[data-modal-close-product]'),
      closeModalBtnTwo: document.querySelector('[data-modal-close-product-two]'),
      closeModalBtnThree: document.querySelector('[data-modal-close-product-three]'),
      modal: document.querySelector('[data-modal-product'),
      modalTwo: document.querySelector('[data-modal-product-two'),
      modalThree: document.querySelector('[data-modal-product-three'),

  };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnTwo.addEventListener('click', toggleModal);
    refs.openModalBtnThree.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtnTwo.addEventListener('click', toggleModal);
    refs.closeModalBtnThree.addEventListener('click', toggleModal);

  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modalTwo.classList.toggle('is-hidden');
    refs.modalThree.classList.toggle('is-hidden');

  }
})();