const searchButton = document.querySelector('.search-button-brown');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close-button') ;

searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-container-close')
});

closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-container-close')
});
