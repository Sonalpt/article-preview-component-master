const shareIcon = document.querySelector('.share');
const shareContent = document.querySelector('.share__bubble');

shareIcon.addEventListener('click', () => {
    shareContent.classList.toggle('undisplayed');
});
