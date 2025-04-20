const buttons = document.querySelectorAll('.tab-btn');
const items = document.querySelectorAll('.portfolio__content .column');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.textContent.toLowerCase();

        items.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all' || category === itemCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});