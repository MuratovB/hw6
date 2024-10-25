document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const fullImageSrc = `task3-images/${this.getAttribute('data-full')}`;

        lightboxImage.src = fullImageSrc;
        lightbox.style.display = 'flex';
    });
});

document.getElementById('close').addEventListener('click', function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
});

document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target !== document.getElementById('lightboxImage')) {
        this.style.display = 'none';
    }
});