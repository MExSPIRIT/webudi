document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const moreText = this.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            this.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});
