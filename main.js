// Button hover - colour change

const shareButton = document.getElementById('button');
const shareImage = document.getElementById('image');

shareButton.addEventListener('mouseover', () => {
    shareImage.classList.add('about-section__swap-image--secondary');
    shareButton.style.cursor = 'pointer';
})

shareButton.addEventListener('mouseleave', () => {
    shareImage.classList.remove('about-section__swap-image--secondary');
})

// Button click - UI change

const aboutSection = document.getElementById('about');
const marginText = document.getElementById('text');
const profileSection = document.getElementById('profile');
const profileContainer = document.querySelector('.profile__text-container');
const profileImage = document.querySelector('.profile__image');
const secondaryElements = document.getElementsByClassName('profle__element--secondary');

shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('about-section__swap-button--secondary');
    shareImage.classList.toggle('image--secondary');
    aboutSection.classList.toggle('card__about-section--secondary');
    marginText.classList.toggle('text__margin--extra');
    profileSection.classList.toggle('about-section__profile--secondary');
    profileContainer.classList.toggle('profile__element--hidden');
    profileImage.classList.toggle('profile__element--hidden');
    for (let i=0; i < secondaryElements.length; i++) {
        secondaryElements[i].classList.toggle('profile__element--hidden');
    }
})

