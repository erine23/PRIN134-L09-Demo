function highlight() {
    const ingredients = document.querySelectorAll('#recipe-ingredients li');
    const highlightBtn = document.getElementById('highlight-btn');

    let index = 0; 

    highlightBtn.addEventListener('click', () => {

    while (index < ingredients.length) {
        if ((index + 1) % 2 !== 0) {
        ingredients[index].classList.add('highlight');
        index++;
        break;
        }
        index++;
    }

    if (index >= ingredients.length) {
        index = 0;
        }
    });
}

function checkInstructions() {
    const instructions = document.querySelectorAll('#recipe-instructions li');
    const checkInstructionsBtn = document.getElementById('check-instructions-btn');

    checkInstructionsBtn.addEventListener('click', () => {
    let index = 0;

    const interval = setInterval(() => {
        if (index < instructions.length) {
        instructions[index].classList.add('is-done');
        index++;
        } else {
        clearInterval(interval);
        }
    }, 3000);
    });
}

function reset() {
    const instructions = document.querySelectorAll('#recipe-instructions li');
    const reset = document.getElementById('reset');

    reset.addEventListener('click', () => {
        instructions.forEach ((item) => {
            item.classList.remove('is-done');
        });
    });
}

function animate() {
    const headers = document.querySelectorAll('.headers');

    headers.forEach(header => {
    header.addEventListener('click', () => {
        header.classList.add('animate__animated', 'animate__bounce');

        setTimeout(() => {
        header.classList.remove('animate__animated', 'animate__bounce');
        }, 1000);
        });
    });
}

function animate_img() {
    const img = document.getElementById('cake');

    img.addEventListener('click', () => {
        img.classList.add('animate__animated', 'animate__bounce');

        setTimeout(() => {
        img.classList.remove('animate__animated', 'animate__bounce');
        }, 1000);
        });
}

highlight();
checkInstructions();
reset();
animate();
animate_img();

