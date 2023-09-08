document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            // Toggle the "is-hidden-touch" class on the "Our Standards" and icon elements
            const $StandardsMenu = document.querySelector('.navbar-item.is-hidden-touch');
            const $icons = Array.prototype.slice.call(document.querySelectorAll('.navbar-item.is-hidden-touch'));
            $StandardsMenu.classList.toggle('is-hidden-touch');
            $icons.forEach(icon => {
                icon.classList.toggle('is-hidden-touch');
            });
        });
    });
});
