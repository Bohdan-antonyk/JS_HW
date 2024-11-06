// Масиви та об'єкти
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'Hello', true, 3.14, null, undefined, {name: 'John'}, [1, 2, 3], -5, 'World'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'Abetka', pageCount: 25, genre: 'Literature'};
let book2 = {title: 'History of USA', pageCount: 258, genre: 'History'};
let book3 = {title: 'The Great Emu War', pageCount: 322, genre: 'History'};

console.log(book1, book2, book3);


// - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Abetka',
    pageCount: 25,
    genre: 'Literature',
    authors: [
        {name: 'Ivan Franko', age: 45},
        {name: 'Lesya Ukrainka', age: 42}
    ]
};

let book5 = {
    title: 'History of USA',
    pageCount: 258,
    genre: 'History',
    authors: [
        {name: 'John Smith', age: 50},
        {name: 'Sarah Johnson', age: 38}
    ]
};

let book6 = {
    title: 'The Great Emu War',
    pageCount: 322,
    genre: 'History',
    authors: [
        {name: 'Andrew T. Williams', age: 40},
        {name: 'Emily Brown', age: 32}
    ]
};

console.log(book4);
console.log(book5);
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Ivan Petrenko', username: 'ivanpetrenko', password: '123434'},
    {name: 'Olena Koval', username: 'olenakoval', password: '321482'},
    {name: 'Mykola Shevchenko', username: 'nikolachevchenko', password: '4561122'},
    {name: 'Svitlana Doroshenko', username: 'svitlanadoroshenko', password: '789445'},
    {name: 'Anatoliy Levchenko', username: 'anatoliylevchenko', password: '101743'},
    {name: 'Tetiana Ivanova', username: 'tetyanaivanova', password: '2002543'},
    {name: 'Vasyl Tkachенко', username: 'vasyltkachenko', password: '333322'},
    {name: 'Yuliya Melnyk', username: 'yuliamelnyk', password: '5678986'},
    {name: 'Oleksandr Kravchuk', username: 'oleksandrkravchuk', password: '999000'},
    {name: 'Natalia Borysenko', username: 'nataliaborisenko', password: '100500'}
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].password);
}


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatures = [
    [10, 20, 15],
    [12, 22, 17],
    [14, 24, 18],
    [16, 26, 20],
    [18, 28, 22],
    [20, 30, 25],
    [22, 32, 27]
];

for (let i = 0; i < temperatures.length; i++) {
    console.log(`День ${i + 1}: Вранці - ${temperatures[i][0]}°C, Вдень - ${temperatures[i][1]}°C, Ввечері - ${temperatures[i][2]}°C`);
}


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 35;

if (time >= 0 && time <= 14) {
    console.log('Перша четверть години');
} else if (time >= 15 && time <= 29) {
    console.log('Друга четверть години');
} else if (time >= 30 && time <= 44) {
    console.log('Третя четверть години');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта четверть години');
} else {
    console.log('Некоректне значення часу');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;

if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Некоректне значення дня');
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Please enter a valid number!");
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 8;  // Перше число
let num2 = 12; // Друге число

if (num1 > num2) {
    console.log("Максимальне число: " + num1);
} else if (num1 < num2) {
    console.log("Максимальне число: " + num2);
} else {
    console.log("Числа рівні.");
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,буде присвоювати змінній х значення "default"
//     якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//

let x1 = 0;

if (!x1) {
    x1 = "default";
}

console.log(x1);


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];

    if (course.monthDuration > 5) {
        console.log("Супер");
    }
}
