function task1_1() {
    let sum = 0;
    let i = 1;
    while (i <= 50) {
        sum += i;
        i++;
    }
    console.log("Завдання 1.1: Сума перших 50 чисел = " + sum);
}


function task1_2(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`Завдання 1.2: Факторіал числа ${n} = ${factorial}`);
}


function task1_3(monthNumber) {
    let monthName;
    switch (monthNumber) {
        case 1: monthName = "Січень"; break;
        case 2: monthName = "Лютий"; break;
        case 3: monthName = "Березень"; break;
        case 4: monthName = "Квітень"; break;
        case 5: monthName = "Травень"; break;
        case 6: monthName = "Червень"; break;
        case 7: monthName = "Липень"; break;
        case 8: monthName = "Серпень"; break;
        case 9: monthName = "Вересень"; break;
        case 10: monthName = "Жовтень"; break;
        case 11: monthName = "Листопад"; break;
        case 12: monthName = "Грудень"; break;
        default: monthName = "Некоректний номер";
    }
    console.log(`Завдання 1.3: Місяць №${monthNumber} - це ${monthName}`);
}


function task1_4(arr) {
    let sum = arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
    console.log("Завдання 1.4: Сума парних у масиві [" + arr + "] = " + sum);
}


const task1_5 = (str) => {
    const vowels = "аеєиіїоуюяАЕЄИІЇОУЮЯaeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    console.log(`Завдання 1.5: Кількість голосних у "${str}" = ${count}`);
};


function task1_6(base, exponent) {
    let result = Math.pow(base, exponent);
    console.log(`Завдання 1.6: ${base} у степені ${exponent} = ${result}`);
}


function task2_1() {
    let sum = 0;
    let a = 0, b = 1;
    let count = 0;
    while (count < 10) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
        count++;
    }
    console.log("Завдання 2.1: Сума перших 10 чисел Фібоначчі = " + sum);
}


function task2_2() {
    let sum = 0;
    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) sum += i;
    }
    console.log("Завдання 2.2: Сума простих чисел до 1000 = " + sum);
}


function task2_3(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1: dayName = "Понеділок"; break;
        case 2: dayName = "Вівторок"; break;
        case 3: dayName = "Середа"; break;
        case 4: dayName = "Четвер"; break;
        case 5: dayName = "П'ятниця"; break;
        case 6: dayName = "Субота"; break;
        case 7: dayName = "Неділя"; break;
        default: dayName = "Некоректний день";
    }
    console.log(`Завдання 2.3: День №${dayNumber} - це ${dayName}`);
}


function task2_4(arr) {
    let result = arr.filter(str => str.length % 2 !== 0);
    console.log("Завдання 2.4: Рядки з непарною довжиною: ", result);
}


const task2_5 = (arr) => {
    let result = arr.map(num => num + 1);
    console.log("Завдання 2.5: Масив збільшений на 1: ", result);
};


function task2_6(a, b) {
    let check = (a + b === 10 || Math.abs(a - b) === 10);
    console.log(`Завдання 2.6: Для чисел ${a} і ${b} умова (10) є ${check}`);
}

console.log("--- Варіанти 1-8 ---");
task1_1();
task1_2(5);
task1_3(3);
task1_4([1, 2, 3, 4, 5, 6]);
task1_5("Привіт світ");
task1_6(2, 3);

console.log("\n--- Варіанти 9-16 ---");
task2_1();
task2_2();
task2_3(1);
task2_4(["яблуко", "банан", "груша", "слива"]);
task2_5([10, 20, 30]);
task2_6(15, 5);