function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const bars = document.querySelectorAll('.bar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.add('open');
    menuLinks.classList.toggle('menu-open');
    bars.forEach(bar => bar.classList.toggle('change'));
    if (!menuLinks.classList.contains('menu-open')) {
        hamburgerMenu.classList.remove('open');
    }
}