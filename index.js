// Виведіть у консоль загальну кількість яблук та винограду та їх різницю
const apples = 47;
const grapes = 135;
console.log(apples + grapes);
console.log(grapes - apples);
console.log(apples, grapes);


// Змінним, оголошеним через let, не обов'язково одразу присвоювати значення. 
let age;
console.log(age);
// змінну let можна перезаписувати
age = 46;
console.log(age);


// Заміни вираз перевизначення комбінованим оператором +=
let students = 100;
// students = students + 50;
students += 50;
students -= 50;
students *= 50;
students /= 50;
// Остача від ділення %
students %= 33;
console.log(students);


// Розбери пріоритет операторів в інструкції присвоєння.
// const result = 108 + (223 - 2) * 5;
// console.log(result);


// Напиши скрипт, який виводить у консоль заокруглені значення value
//   Використовуй методи (функціі,що потрібно зробити) Math.round()округляє як в матиматиці, Math.floor() округляє до нижчого ігноруючи дробову частину, Math.ceil()округляє до вищого значення,незалежно від дробової,Math.trunc()просто відкидає дробову частину.
//   Перевірте, що буде в консолі при значеннях 27.3 та 27.9
// const value = 27.5;

// Метод Math може строку переводити до числа
const value = `27.5`;
console.log(Math.round(value));
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.trunc(value));


// оператор typeOf використовується для отримання типу значення змінної.Що бувають- undefined, number, string, boolean, null-object
const message = "JavaScript is awesome!";
console.log(typeof message);

const quantity = 17;
console.log(typeof quantity);

const isSidebarOpen = false;
console.log(typeof isSidebarOpen);


// ОТРИМАННЯ ДАНИХ

// confirm()-виводить модальне вікно з повідомленням, і дві кнопки OK-true і Cancel-false
// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

// prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel. Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null
// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну
// Незалежно, що введе користувач, навіть цифри, все одно повернеться рядок
const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);


// ШАБЛОННІ РЯДКИ
// ${вираз}
// Склади за допомогою шаблонних рядків речення: A has B bots in stock, де A та В - змінні вставлені в рядок
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const result = `${companyName} has 
${repairBots + defenceBots} bots in stock`;
console.log(result);


// МЕТОДИ РЯДКІВ ТА ЧЕЙНІНГ
// Напиши скрипт, який розраховує індекс маси тіла людини
//   Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах
//   Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання)
//   Нецілі числа можуть бути задані у вигляді 24.7 або 24,7 тобто як роздільник дробної частини числа може бути кома
//   Індекс маси тіла необхідно округлити до однієї цифри після коми
const weight = "88,3";
const height = "1.98";
const validWeight = Number(weight.replace(",", "."));
const validHeight = Number(height.replace(",", "."));
// const validWeight = +weight.replace(",", ".");
// const validHeight = +height.replace(",", ".");
// console.log(validWeight);
// console.log(validHeight);

const bmi = +(validWeight / validHeight ** 2).toFixed(1);
console.log(bmi);



// console.log(1);
// alert(55+105);
// console.log(`Yelash`);
// console.log(5 === 5);
// console.log(5 === 15);



