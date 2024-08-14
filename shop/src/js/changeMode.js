function changeMode() {
    const elementsToToggle = ['body'];
    elementsToToggle.forEach(element => {
        const elements = document.querySelectorAll(element);
        elements.forEach(el => el.classList.toggle('dark-mode'));
    });

    const button = document.querySelector('.mode');
    button.innerHTML = button.innerHTML === 'Dark mode' ? 'Light mode' : 'Dark mode';
    button.classList.toggle('dark-mode');
}