const searchButton = document.querySelector('.search-button-brown');
const modal = document.querySelector('.modal-container');
const close = document.querySelector('.close-button') ;

searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('.close-button')
});

closeModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('.close-button')
})
