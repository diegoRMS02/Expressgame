document.addEventListener('DOMContentLoaded', () => {
    const gameItems = document.querySelectorAll('.game-item');
    const featuredImg = document.getElementById('featured-img');
    const featuredTitle = document.getElementById('featured-title');
    const featuredButton = document.getElementById('featured-button');

    gameItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const price = item.getAttribute('data-price');
            const img = item.getAttribute('data-img');

            featuredImg.src = img;
            featuredTitle.textContent = title;
            featuredButton.textContent = `COMPRAR - ${price}`;
        });
    });
});
