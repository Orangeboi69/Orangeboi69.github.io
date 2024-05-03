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
function getRandomColor(mode) {
    if (mode == 'hex' ){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    return color;
    }} else if (mode == 'rgb'){
        let color = 'rgb(';
        for (let i = 0; i < 3; i++) {
            color += Math.floor(Math.random() * 256) + ',';
        }
        color = color.slice(0, -1) + ')';
        return color;
    }
}
function getGermanGrade(grade) {
    const DgradeDict = {
        '1+': 100,
        '1': 95,
        '1-': 90,
        '2+': 85,
        '2': 80,
        '2-': 75,
        '3+': 70,
        '3': 65,
        '3-': 60,
        '4+': 55,
        '4': 50,
        '4-': 45,
        '5+': 35,
        '5': 20,
        '5-': 10,
        '6': 0
    };
    return DgradeDict[grade];
}

function getAmericanGrade(grade) {
    const AgradeDict = {
        'A+': 100,
        'A': 93,
        'A-': 90,
        'B+': 87,
        'B': 83,
        'B-': 80,
        'C+': 77,
        'C': 73,
        'C-': 70,
        'D+': 67,
        'D': 65,
        'D-': 40,
        'F':10
    };
    return AgradeDict[grade];
}
    // Function to draw the graph
    function drawGraph() {

        const grades = [];
        const inputContainer = document.querySelector('.input-container');
        const objectCount = inputContainer.querySelectorAll('input').length;
        const subjects = [];
        // Get subject names
        for (let i = 1; i <= objectCount; i++) {
            console.log(`subject${i}`)
            const subjectInput = document.getElementById(`${i}L`).textContent;
            subjects.push(subjectInput.slice(0, -1));
        }
        console.log(subjects);
        // Get Grades
        for (let i = 1; i <= objectCount; i++) {
            if (document.getElementById(`subject${i}`).value != '') {
                // Float/Percentage
                if (document.getElementById(`subject${i}`).value.includes('%')) {
                    console.log(`subject${i} + value`)
                    const gradeInput = document.getElementById(`subject${i}`).value;
                    grades.push(parseFloat(gradeInput));
                }
                // American
                else if (['A', 'B', 'C', 'D', 'F'].some(letter => document.getElementById(`subject${i}`).value.includes(letter))) {
                    console.log(`subject${i} + value(American)`)
                    const gradeInput = document.getElementById(`subject${i}`).value;
                    grades.push(getAmericanGrade(gradeInput));
                }
                // German
                else {
                    console.log(`subject${i} + value(German)`)
                    const gradeInput = document.getElementById(`subject${i}`).value;
                    grades.push(getGermanGrade(gradeInput));
                }
            }
            else {
                grades.push(0);
                console.error('No grade for subject ' + i)
            }
        }
        console.log(grades);

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 400;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 150;

        ctx.beginPath();
        ctx.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));

        // Loop through each subject
        for (let i = 1; i <= objectCount; i++) {
            const grade = grades[i - 1] || 0;

            // Calculate the angle for the current subject
            const angle = (i * Math.PI * 2) / objectCount;
        
            // Calculate the end point of the line based on the grade
            const percent = grade / 100;
            const endX = centerX + radius * percent * Math.cos(angle);
            const endY = centerY + radius * percent * Math.sin(angle);
        
            // Save the coordinates of the first and last points
            if (i == 1) {
                firstX = endX;
                firstY = endY;
            }
            lastX = endX;
            lastY = endY;
        
            // Draw the line from the center to the end point
            ctx.lineTo(endX, endY);
            // Label for each subject
            const labelX = centerX + (radius + 20) * Math.cos(angle);
            const labelY = centerY + (radius + 20) * Math.sin(angle);
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(subjects[i - 1], labelX, labelY);
            console.log(`subject: ${subjects[i - 1]}`);
        }
        // Draw a line from the center to the first grade
        ctx.lineTo(firstX, firstY);
    
        //Color fill
        var c = getRandomColor('rgb').slice(0, -1) + ',0.5)';
        ctx.closePath();
        ctx.fillStyle = c; // Add transparency here
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

        // Draw outline for the entire graph
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw ultine
        ctx.beginPath();
        ctx.arc(centerX, centerY, 2 * radius / 3, 0, 2 * Math.PI);
        ctx.strokeStyle = '#808080';
        ctx.lineWidth = 1;
        ctx.stroke();

        document.getElementById('graph-container').innerHTML = '';
        document.getElementById('graph-container').appendChild(canvas);
    }