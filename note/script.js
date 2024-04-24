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
} //Maybe use an evenlistener? and use variables?
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function drawGraph() {
    const subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'];
    const grades = [];
    for (let i = 1; i <= 5; i++) {
        const gradeInput = document.getElementById(`subject${i}`).value;
        grades.push(parseFloat(gradeInput));
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;

    ctx.beginPath();
    ctx.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));

    for (let i = 1; i <= 5; i++) {
        const grade = grades[i - 1] || 0;
        const angle = (i * Math.PI * 2) / 5;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const percent = grade / 100;
        const endX = centerX + radius * percent * Math.cos(angle);
        const endY = centerY + radius * percent * Math.sin(angle);
        ctx.lineTo(endX, endY);

        // Label for each subject
        const labelX = centerX + (radius + 20) * Math.cos(angle);
        const labelY = centerY + (radius + 20) * Math.sin(angle);
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(subjects[i - 1], labelX, labelY);
    }

    ctx.closePath();
    ctx.fillStyle = getRandomColor();
    ctx.fill();

    // Draw central point as a dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, 1, 0, 2 * Math.PI);
    ctx.fillStyle = '#000';
    ctx.fill();

    // Draw border
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();

    document.getElementById('graph-container').innerHTML = '';
    document.getElementById('graph-container').appendChild(canvas);
}