// Button hover - colour change

const shareButton = document.getElementById('button');
const shareImage = document.getElementById('image');
const profileSection = document.getElementById('profile')

shareButton.addEventListener('mouseover', () => {
    shareImage.style = 'fill: #FFFFFF; transition: 200ms fill ease-in';
    shareButton.style.cursor = 'pointer';
})

shareButton.addEventListener('mouseleave', () => {
    shareImage.style = 'fill: #6E8098; transition: 200ms fill ease-out'; // this is stopping the button click image colour change.
})

// Button click - UI change

shareButton.addEventListener('click', () => {
    shareButton.classList.toggle('about-section__swap-button--secondary');
    shareImage.classList.toggle('image--secondary');
    profileSection.classList.toggle('about-section__profile--secondary');
})

