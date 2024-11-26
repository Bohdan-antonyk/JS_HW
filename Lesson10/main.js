// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//


const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", () => {
    const pElement = document.getElementById("text");
    pElement.style.display = "none";
})

// #j693ca8
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


const btnEnterAge = document.getElementsByClassName("btn-enterAge")[0];

btnEnterAge.addEventListener("click", () => {
    const inputAge = document.querySelector("input[name=enterAge]");
    let notificationMessage = document.querySelector(".notification-message");

    if (notificationMessage) {
        notificationMessage.remove();
    }

    notificationMessage = document.createElement('p');
    notificationMessage.className = "notification-message";

    if (parseInt(inputAge.value, 10) < 18) {
        notificationMessage.textContent = 'Вік користувача менше 18 років';
    } else {
        notificationMessage.textContent = 'Вік користувача більше 18 років';
    }

    document.body.appendChild(notificationMessage);
});


//
// #ymAmN2xJ
// Створити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


const btnFromForm = document.getElementsByClassName("btnForForm")[0];

btnFromForm.addEventListener("click", () => {
    const btnEnterNameFromForm = document.querySelector("input[name=enterNameFromForm]");
    const btnEnterSurnameFromForm = document.querySelector("input[name=enterSurnameFromForm]");
    const btnEnterAgeFromForm = document.querySelector("input[name=enterAgeFromForm]");

    let existingDiv = document.querySelector(".divForForm");
    if (existingDiv) {
        existingDiv.remove();
    }

    const divElementForFormValue = document.createElement("div");
    divElementForFormValue.className = 'divForForm';

    const divElementForUserName = document.createElement("div");
    divElementForUserName.className = 'divForUserName';
    divElementForUserName.textContent = `Ім'я користувача ${btnEnterNameFromForm.value}`;

    const divElementForUserSurname = document.createElement("div");
    divElementForUserSurname.className = 'divForUserSurname';
    divElementForUserSurname.textContent = `Прізвище користувача ${btnEnterSurnameFromForm.value}`;

    const divElementForUserAge = document.createElement("div");
    divElementForUserAge.className = 'divForUserAge';
    divElementForUserAge.textContent = `Вік користувача ${btnEnterAgeFromForm.value}`;

    divElementForFormValue.append(divElementForUserName, divElementForUserSurname, divElementForUserAge);
    document.body.appendChild(divElementForFormValue);
})

//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const divCounter = document.getElementsByClassName("counter")[0];
const valueOfDivCounter = divCounter.textContent;
console.log(valueOfDivCounter);

let counter = parseInt(localStorage.getItem("counter"), 10);
// console.log(counter);
if (isNaN(counter)) {
    counter = 0;
}

counter++;
localStorage.setItem("counter", counter);
divCounter.textContent = counter;

//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = [];
if (localStorage.getItem("sessions")) {
    sessionsList = JSON.parse(localStorage.getItem("sessions"));
}
const currentDate = new Date();
const formattedDate = `Час відвідування сторінки ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} в ${currentDate.getHours()}:${currentDate.getMinutes()}`;
sessionsList.push(formattedDate);

localStorage.setItem("sessionsList", JSON.stringify(sessionsList));
//
//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


const inputForWeight = document.querySelector("input[name=enterYourWeight]");

const divForWeight = document.createElement('div');
divForWeight.className = 'divForWeight';
divForWeight.textContent = "";
document.body.appendChild(divForWeight);

inputForWeight.addEventListener("input", function () {
    const weightInKg = Number.parseFloat(inputForWeight.value);

    if (!isNaN(weightInKg) && weightInKg >= 0) {
        const converterKgToPound = (weightInKg * 2.20462262).toFixed(2);
        divForWeight.textContent = `${converterKgToPound}`;
    } else {
        divForWeight.textContent = "Incorrect value";
    }
});

//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    const item = localStorage.getItem(arrayName);
    const array = item ? JSON.parse(item) : [];

    if (objToAdd && typeof objToAdd === "object") {
        array.push(objToAdd);
    } else {
        console.error("objToAdd має бути об'єктом.");
        return;
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('arrayForLocalStorage', {id: 1, name: 'Ivan'});

//
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const inputForNumberOfRows = document.querySelector("input[name=numberOfRows]");
const inputForNumberOfCells = document.querySelector("input[name=numberOfCells]");
const inputForContent = document.querySelector("input[name=enterContent]");
const btnFromForm2 = document.querySelector(".btnForForm2");

btnFromForm2.addEventListener("click", function (ev) {
    ev.preventDefault();

    const numberOfRows = parseInt(inputForNumberOfRows.value, 10);
    const numberOfCells = parseInt(inputForNumberOfCells.value, 10);
    const content = inputForContent.value;

    const table = document.createElement("table");
    table.className = "generatedTable";

    const rowsArray = Array(numberOfRows).fill(null);

    for (const row of rowsArray) {
        const tr = document.createElement("tr");
        const cellsArray = Array(numberOfCells).fill(null);

        for (const cell of cellsArray) {
            const td = document.createElement("td");
            td.textContent = content;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    const existingTable = document.querySelector(".generatedTable");
    if (existingTable) {
        existingTable.remove();
    }
    document.body.appendChild(table);
});


//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів