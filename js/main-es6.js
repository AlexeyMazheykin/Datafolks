(function () {
const btnMore = document.querySelector('.projects__more-btn');
const modal = document.querySelector('.modal');
btnMore.addEventListener('click', () => {
    modal.classList.add('modal__active');
});
modal.addEventListener('click', () => {
    modal.classList.remove('modal__active');
});
document.addEventListener('keydown', (ev) =>  {
    if (modal.classList.contains('modal__active')) {
        if (ev.code === 'Escape') {
            modal.classList.remove('modal__active');
        }
    }
}); 
}());

