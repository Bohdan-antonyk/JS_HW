// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function cloneObject(obj) {
    if (obj) {
        let emptyValueIfTypeOfFunction = [];
        for (const objKey in obj) {
            if (typeof obj[objKey] === 'function') {
                const copyFunction = obj[objKey].bind({});
                emptyValueIfTypeOfFunction.push({copyFunction, objKey});
            }
        }

        const cloneJson = JSON.parse(JSON.stringify(obj));
        for (const func of emptyValueIfTypeOfFunction) {
            cloneJson[func.key] = func.copyFunction;

        }
        console.log(emptyValueIfTypeOfFunction);
        return emptyValueIfTypeOfFunction;
    } else {
        console.log('Error cloneObject');
    }
}

user = {
    name: 'Bohdan',
    age: 31,
    status: false,
    getLocation() {
    },
    findSizeFoot() {
    }
}

cloneObject(user);

//
//
// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const mapArray = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));
console.log(mapArray);