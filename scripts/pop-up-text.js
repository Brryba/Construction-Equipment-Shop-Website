const popUpBackground = document.getElementById('pop-up-background');
const popUp = document.getElementById('pop-up')
const popUpButton = document.getElementById('pop-up-button');
const closeIcon = document.getElementsByClassName('close-icon')[0];

popUpButton.addEventListener('click', () => {
    popUpBackground.classList.toggle('active');
    document.body.style.overflow = (popUpBackground.classList.contains('active') ? 'hidden' : 'auto');
})

function close() {
    popUpBackground.classList.remove('active');
    document.body.style.overflow = 'auto';
}

popUpBackground.addEventListener('click', close);
closeIcon.addEventListener('click', close);

popUp.addEventListener('click', (event) => {
    if (event.target !== closeIcon)
        event.stopPropagation();
})