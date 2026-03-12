
function findMinMax(arr) {
    if (arr.length === 0) return "Масив порожній";
    let min = arr[0];
    let max = arr[0];
    for (let x of arr) {
        if (x < min) min = x;
        if (x > max) max = x;
    }
    return { min, max };
}

function compareObjects(obj1, obj2) {
    return obj1.brand === obj2.brand && obj1.model === obj2.model;
}


function isInRange(num, start, end) {
    return num >= start && num <= end;
}

let isTired = false;
let needRest = !isTired;


function getGrade(score) {
    if (score >= 90) return "Відмінно";
    else if (score >= 75) return "Добре";
    else if (score >= 60) return "Задовільно";
    else return "Незадовільно";
}


function getSeason(month) {
    return (month === 12 || month <= 2) ? "Зима" :
           (month >= 3 && month <= 5) ? "Весна" :
           (month >= 6 && month <= 8) ? "Літо" :
           (month >= 9 && month <= 11) ? "Осінь" : "Невідомий місяць";
}


console.log("Результати лабораторної:");
console.log("Min/Max:", findMinMax([10, 2, 35, -5]));
console.log("Чи 25 в [10, 50]:", isInRange(25, 10, 50));
console.log("Оцінка 78:", getGrade(78));
console.log("Сезон для травня:", getSeason(5));