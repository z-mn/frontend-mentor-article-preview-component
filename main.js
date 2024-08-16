// Button hover - colour change

const shareButton = document.getElementById('button');
const shareImage = document.getElementById('image');

shareButton.addEventListener('mouseover', () => {
    shareImage.style = 'fill: #FFFFFF; transition: 200ms fill ease-in';
    shareButton.style.cursor = 'pointer';
})

shareButton.addEventListener('mouseleave', () => {
    shareImage.style = 'fill: #6E8098; transition: 200ms fill ease-out';
})