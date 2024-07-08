const images = [
    { src: 'lion.avif', caption: 'The king of the jungle has arrived' },
    { src: 'eagle2.jpg', caption: 'The eagle has no fear of adversity' },
    { src: 'wolf.jpg', caption: 'Living life on the edge, just like a lone wolf' },
    { src: 'Tiger.jpg', caption: 'In the realm of the Tigers' },
    { src: 'humming.jpg', caption: "Nature's little miracle"},
    { src: 'Elephant.jpg', caption: 'Big love in a small package. 🐘' },
    { src: 'parrot2.jpg', caption: 'Flying high with my colorful companion' },
    { src: 'monkey.avif', caption: 'Caught in the act of being more fun than a barrel of monkeys 🙈' },
    { src: 'panda.webp', caption: "Eating bamboo and feeling fine." },
    { src: 'Kf.jpg', caption: "I'm just a bird-fluencer, doing my thing." },
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    galleryImage.style.opacity = 0;
    setTimeout(() => {
        galleryImage.src = images[index].src;
        caption.textContent = images[index].caption;
        galleryImage.style.opacity = 1;
    }, 500); // match the CSS transition duration
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Add keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    } else if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});

// Initial display
showImage(currentIndex);
