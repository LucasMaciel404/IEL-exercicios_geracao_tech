function trocarCorBackground(classBackground) {
    document.querySelector('.card').classList = `card text-center text-align-center fw-light ${classBackground + ' text-white'}`
}

function reset() {
    document.querySelector('.card').classList = `card text-center text-align-center fw-light`;
}