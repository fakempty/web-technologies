// 1. Використовуємо querySelector для доступу до h1
const title = document.querySelector('#main-title');

// 2. Виводимо "Hello world!" в елемент h1
title.textContent = "Hello world!";

// 3. Отримуємо доступ до кнопки
const btn = document.querySelector('#action-button');

// 4. Додаємо функцію на івент onmousemove
btn.onmousemove = function() {
    // Виводимо ім'я студента в консоль як warn
    console.warn("Студент: Коля");
};