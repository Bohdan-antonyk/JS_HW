// Тут ті самі завдання, що і в занятті про базові функції,
// але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const areaOfRectangle = (a, b) => a * b;
console.log(areaOfRectangle(2, 5));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const squareOfCircle = (radius) => Math.PI * radius * radius;
console.log(squareOfCircle(5));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const areaOfCylinder = (height, radius) => 2 * Math.PI * radius * (radius + height);
console.log(areaOfCylinder(5, 3));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr1 = [2, 3, 77, true, 'Ivan', false];

const showAllElementsOfArray = (array) => {
    for (const elementOfArray of array) {
        console.log(elementOfArray)
    }
}

showAllElementsOfArray(arr1);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => {
    document.write(`<p>${text}</p>`);
}

createParagraph('I want to create paragraph');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

const createListOfElements = (text) => {
    document.write(`<ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                   </ul>`
    )
};

createListOfElements('list of elements');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createListOfItems = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`
        <li>${text}</li>
        `)
    }
    document.write(`</ul>`);
}

createListOfItems('List of li elements', 10);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

const createListOfPrimitiveElements = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

let arrayPrimitiveElements = [1, 2, 3, 'Bohdan', false, true, undefined, -44, 'Ivan', 0];
createListOfPrimitiveElements(arrayPrimitiveElements);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const createArrayOfObject = (user) => {
    for (const userElement of user) {
        document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`);
    }
}

let arrayOfObjects = [
    {id: 1, name: 'Bohdan', age: 31},
    {id: 2, name: 'Ivan', age: 22},
    {id: 3, name: 'Olha', age: 18},
    {id: 4, name: 'Maria', age: 33},
    {id: 5, name: 'Alex', age: 20},
    {id: 6, name: 'Sergey', age: 23},
    {id: 7, name: 'Kateryna', age: 45}
];
createArrayOfObject(arrayOfObjects);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

const thSmallestNumber = (array) => {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    console.log(smallestNumber)
}

let arrayOfNumbers = [1, 77, 0, 4, -6, -2, -73, 8, -33, 100];

thSmallestNumber(arrayOfNumbers);

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sum = [1, 2, 10];

const sumOfNumbers = (numbers) => {
    let counter = 0;
    for (const number of numbers) {
        counter += number;
    }
    console.log(counter);
}

sumOfNumbers(sum);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    let firstIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstIndex;

    console.log(arr);
}

let arrayOfNumbersForSwap = [11, 22, 33, 44]

swap(arrayOfNumbersForSwap, 0, 1);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency) {
            return sumUAH / currencyValue.value;
        }
    }
    return 'Exchange is not possible';
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'))