let count = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomNumber() {
    const range = 1000000;
    if (count <= 2) {
        count++;
        return getRandomInt(range);
    } else {
        return Math.random();
    }
}
