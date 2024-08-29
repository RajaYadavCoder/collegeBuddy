document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const menu = this.nextElementSibling;
        // Toggle visibility
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                if (otherMenu !== menu) otherMenu.style.display = 'none';
            });
            menu.style.display = 'block';
        }
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});



