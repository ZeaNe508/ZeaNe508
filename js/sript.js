document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const burgerCheckbox = document.querySelector('.burger-checkbox');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки
            const targetId = item.getAttribute('href').substring(1); // Получаем id секции (без #)
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Плавная прокрутка к секции
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Закрываем бургер-меню
            burgerCheckbox.checked = false;
        });
    });
});