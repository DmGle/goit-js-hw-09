document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('[data-start]').addEventListener('click', startColorChange);
    document.querySelector('[data-stop]').addEventListener('click', stopColorChange);
    
    // Встановлення початкового стану кнопок при завантаженні сторінки
    document.querySelector('[data-start]').disabled = false;
    document.querySelector('[data-stop]').disabled = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

let colorChangeInterval;

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function startColorChange() {
    document.querySelector('[data-start]').disabled = true;
    document.querySelector('[data-stop]').disabled = false;
    changeBackgroundColor();
    colorChangeInterval = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
    document.querySelector('[data-start]').disabled = false;
    document.querySelector('[data-stop]').disabled = true;
    clearInterval(colorChangeInterval);
}
