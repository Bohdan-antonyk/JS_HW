// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    const result = a * b;
    console.log(result);
    return result;
}

square(2, 5);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(radius) {
    const PI = Math.PI;
    const squareCircleArea = PI * radius * radius;
    console.log(squareCircleArea);
    return squareCircleArea;
}

circleArea(5);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(height, radius) {
    const result = 2 * Math.PI * radius * height;
    console.log(result);
    return result;
}

squareCylinder(5, 2);

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function showArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

let arr1 = [1, 2, true, NaN, 0, false, undefined, null];

showArray(arr1);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('I want to create paragraph');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function createLiElements(text) {
    document.write(`
                    <ul>
                       <li>${text}</li>
                       <li>${text}</li>
                       <li>${text}</li>
                   </ul>
`)
}

createLiElements('List of li elements');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createListOfElements(text, numberOfElements) {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfElements; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

createListOfElements('List of li elements', 10);


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function createListOfPrimitiveElements(array) {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

let arrayOfPrimitiveElements = [1, 2, 3, 'Bohdan', false, true, undefined, -44, 'Ivan', 0];
createListOfPrimitiveElements(arrayOfPrimitiveElements);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createArrayOfObject(user) {
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

function thSmallestNumber(array) {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    console.log(smallestNumber)
    return smallestNumber;
}

let arrayOfNumbers = [1, 77, 0, 4, -6, -2, -73, 8, -33, 100];

thSmallestNumber(arrayOfNumbers);

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumOfNumbers(numbers) {
    let counter = 0;
    for (const number of numbers) {
        counter += number;
    }
    console.log(counter);
    return counter;

}

sumOfNumbers(arrayOfNumbers);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let firstIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstIndex;

    console.log(arr);
    return arr;
}

swap(arrayOfNumbers, 0, 1);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (exchangeCurrency === currencyValue.currency) {
            const result = sumUAH / currencyValue.value;
            console.log(result);
            return result;
        }
    }
    return 'Exchange is not possible';
}

exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');