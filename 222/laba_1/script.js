
const title = document.querySelector('#main-title');

title.textContent = "Hello world!";

//доступ до кнопки
const btn = document.querySelector('#action-button');

//onmousemove
btn.onmousemove = function() {
    console.warn("Студент: Коля");
};