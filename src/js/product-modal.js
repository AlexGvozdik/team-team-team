(() => {
  const refs = {
      openModalBtn: document.querySelector('[data-modal-open-product]'),
      openModalBtnTwo: document.querySelector('[data-modal-open-product-two]'),
      openModalBtnThree: document.querySelector('[data-modal-open-product-three]'),
      openModalBtnFour: document.querySelector('[data-modal-open-product-four]'),
      openModalBtnFive: document.querySelector('[data-modal-open-product-five]'),
      openModalBtnSix: document.querySelector('[data-modal-open-product-six]'),
      closeModalBtn: document.querySelector('[data-modal-close-product]'),
      closeModalBtnTwo: document.querySelector('[data-modal-close-product-two]'),
      closeModalBtnThree: document.querySelector('[data-modal-close-product-three]'),
      closeModalBtnFour: document.querySelector('[data-modal-close-product-four]'),
      closeModalBtnFive: document.querySelector('[data-modal-close-product-five]'),
      closeModalBtnSix: document.querySelector('[data-modal-close-product-six]'),
      modal: document.querySelector('[data-modal-product'),
      modalTwo: document.querySelector('[data-modal-product-two'),
      modalThree: document.querySelector('[data-modal-product-three'),
      modalFour: document.querySelector('[data-modal-product-four'),
      modalFive: document.querySelector('[data-modal-product-five'),
      modalSix: document.querySelector('[data-modal-product-six'),
  };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtnTwo.addEventListener('click', toggleModal);
    refs.openModalBtnThree.addEventListener('click', toggleModal);
    refs.openModalBtnFour.addEventListener('click', toggleModal);
    refs.openModalBtnFive.addEventListener('click', toggleModal);
    refs.openModalBtnSix.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtnTwo.addEventListener('click', toggleModal);
    refs.closeModalBtnThree.addEventListener('click', toggleModal);
    refs.closeModalBtnFour.addEventListener('click', toggleModal);
    refs.closeModalBtnFive.addEventListener('click', toggleModal);
    refs.closeModalBtnSix.addEventListener('click', toggleModal);

  
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modalTwo.classList.toggle('is-hidden');
    refs.modalThree.classList.toggle('is-hidden');
    refs.modalFour.classList.toggle('is-hidden');
    refs.modalFive.classList.toggle('is-hidden');
    refs.modalSix.classList.toggle('is-hidden');
  }
})();