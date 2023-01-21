let openPopup = document.querySelector('.open-popup');
let closePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');


openPopup.addEventListener('click', function(event){
    event.preventDefault();
    popup.classList.add('active');

});
closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
});