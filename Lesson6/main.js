// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(`Це брудна стрінга і її довжина ${str.length} символів`);

let clearStr = str.trim();
console.log(`Це чиста стрінга і її довжина ${clearStr.length} символів`);


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(string) {
    if (typeof string === 'string' && string.length !== 0) {
        return string.split(' ');
    }
    return 'Error';
}

let str2 = 'Ревуть воли як ясла повні';

console.log(stringToArray(str2));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrayOfNumbersToString = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfNumbersToString);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') return array.sort((a, b) => a - b);

    if (direction === 'descending') return array.sort((a, b) => b - a);

    else {
        return 'Error';
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, ''));

//
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const newArray = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(number => number.monthDuration > 5)
    .map((value, index) => ({id: index + 1, ...value}));

console.log(newArray);

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


let deckOfCards = [];
const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

for (const cardSuit of cardSuits) {
    for (const cardValue of cardValues) {
        const card = {cardSuit: cardSuit, value: cardValue};
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        deckOfCards.push(card);
    }
}

console.log(deckOfCards);


const aceSpade = deckOfCards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log(aceSpade);

const findValue6 = deckOfCards.filter(card => card.value === '6');
console.log(findValue6);

const findAllRedColors = deckOfCards.filter(card => card.color === 'red');
console.log(findAllRedColors);

const findAllDiamonds = deckOfCards.filter(card => card.cardSuit === 'diamond');
console.log(findAllDiamonds);

const findAllClubs = deckOfCards.filter(card => card.cardSuit === 'clubs' && (card.value >= '9'));
console.log(findAllClubs);

//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reduce = deckOfCards.reduce((acc, card) => {
        if (card.cardSuit === 'spade') {
            acc.spades.push(card);
        } else if (card.cardSuit === 'diamond') {
            acc.diamonds.push(card);
        } else if (card.cardSuit === 'heart') {
            acc.hearts.push(card);
        } else if (card.cardSuit === 'clubs') {
            acc.clubs.push(card);
        }

        return acc;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    })

console.log(reduce);

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const findSassModule = coursesArray.filter(course => {
    return course.modules.includes('sass');
});
console.log(findSassModule);

const findSDockerModule = coursesArray.filter(course => {
    return course.modules.includes('docker');
});
console.log(findSDockerModule);


