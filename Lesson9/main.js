// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
document.body.appendChild(div);
div.className = 'wrap';
div.className = 'collapse';
div.className = ' alpha';
div.className = 'beta';
div.innerText = 'Hello, world!';
div.style.backgroundColor = "green";
div.style.color = "white";
div.style.fontSize = "24px";

let div2 = div.cloneNode(true);
document.body.append(div2);


//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const arr1 = ['Main', 'Products', 'About us', 'Contacts'];
const ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

for (const item of arr1) {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
}

//
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (const itemOfCoursesAndDurationArray of coursesAndDurationArray) {
    const div2Element = document.createElement('div');
    document.body.appendChild(div2Element);
    const h3Title = document.createElement('h3');
    div2Element.appendChild(h3Title);
    const pTitle = document.createElement('p');
    div2Element.append(h3Title, pTitle);
    pTitle.textContent = 'Термін дії курсу' + ' ' + itemOfCoursesAndDurationArray.monthDuration + ' ' + 'місяців';
    h3Title.textContent = 'Курс ' + itemOfCoursesAndDurationArray.title;
}


//
// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    const div2Element = document.createElement('div');
    div2Element.className = 'item';
    document.body.appendChild(div2Element);
    const h1Title = document.createElement('h1');
    h1Title.className = 'heading';
    h1Title.style.color = '#636AFC';
    div2Element.appendChild(h1Title);
    const pTitle = document.createElement('p');
    pTitle.className = 'description';
    pTitle.style.color = '#FC7005';
    pTitle.style.fontSize = '24px';
    div2Element.append(h1Title, pTitle);
    pTitle.textContent = 'Термін дії курсу' + ' ' + course.monthDuration + ' ' + 'місяців';
    h1Title.textContent = 'Курс ' + course.title;
}


// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//     створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.


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

let containerElement = document.querySelector(".container");

coursesArray.forEach((course) => {
    let courseDiv = document.createElement("div");
    courseDiv.classList.add("course");

    let courseTitle = document.createElement("h1");
    courseTitle.textContent = course.title;
    courseDiv.appendChild(courseTitle);

    let wrapperInfoAboutCourses = document.createElement("div");
    wrapperInfoAboutCourses.classList.add("wrapperInfo");
    wrapperInfoAboutCourses.style.display = "flex";
    courseDiv.appendChild(wrapperInfoAboutCourses);

    let monthDurationElement = document.createElement("h2");
    monthDurationElement.textContent = course.monthDuration;
    monthDurationElement.style.width = "250px";
    wrapperInfoAboutCourses.appendChild(monthDurationElement);

    let hourDurationElement = document.createElement("h2");
    hourDurationElement.textContent = course.hourDuration;
    wrapperInfoAboutCourses.appendChild(hourDurationElement);

    let ulElement = document.createElement("ul");
    ulElement.classList.add("courseList");
    courseDiv.appendChild(ulElement);

    course.modules.forEach((moduleElement) => {
        let liElement = document.createElement("li");
        liElement.textContent = moduleElement;
        ulElement.appendChild(liElement);
    });

    containerElement.appendChild(courseDiv);
});


