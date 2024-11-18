// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arrayOfUsers = [
    new User(55, 'Bohdan', 'Antonyk', 'antonuk1306@gmail.com', '3232323'),
    new User(22, 'Oleksii', 'Petrenko', 'oleksii.petrenko@example.com', '2345678'),
    new User(31, 'Kateryna', 'Shevchenko', 'kateryna.shevchenko@example.com', '3456789'),
    new User(40, 'Dmytro', 'Kovalenko', 'dmytro.kovalenko@example.com', '4567890'),
    new User(2, 'Olena', 'Bondarenko', 'olena.bondarenko@example.com', '5678901'),
    new User(77, 'Yurii', 'Tkachenko', 'yurii.tkachenko@example.com', '6789012'),
    new User(54, 'Natalia', 'Kryvchenko', 'natalia.kryvchenko@example.com', '7890123'),
    new User(82, 'Mykola', 'Moroz', 'mykola.moroz@example.com', '8901234'),
    new User(91, 'Viktoria', 'Savchenko', 'viktoria.savchenko@example.com', '9012345'),
    new User(10, 'Anna', 'Ivanova', 'anna.ivanova@example.com', '1234567'),
];

console.log(arrayOfUsers);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterArray = arrayOfUsers.filter(user => user.id % 2 === 0);
console.log(filterArray);

//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedArray = arrayOfUsers.sort((a, b) => a.id - b.id);
console.log(sortedArray);
//
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let classClients = [
    new Client(55, 'Bohdan', 'Antonyk', 'antonuk1306@gmail.com', '3232323', ['phone', 'sofa', 'monitor', 'Mack']),
    new Client(22, 'Oleksii', 'Petrenko', 'oleksii.petrenko@example.com', '2345678', ['tv', 'tv']),
    new Client(31, 'Kateryna', 'Shevchenko', 'kateryna.shevchenko@example.com', '3456789', ['book', 'pencil']),
    new Client(40, 'Dmytro', 'Kovalenko', 'dmytro.kovalenko@example.com', '4567890', ['printer', 'headphone']),
    new Client(2, 'Olena', 'Bondarenko', 'olena.bondarenko@example.com', '5678901', ['pen', 'notebook']),
    new Client(77, 'Yurii', 'Tkachenko', 'yurii.tkachenko@example.com', '6789012', ['monitor', 'table']),
    new Client(54, 'Natalia', 'Kryvchenko', 'natalia.kryvchenko@example.com', '7890123', ['armchair', 'usb-cable']),
    new Client(82, 'Mykola', 'Moroz', 'mykola.moroz@example.com', '8901234', ['lamp', 'pillow']),
    new Client(91, 'Viktoria', 'Savchenko', 'viktoria.savchenko@example.com', '9012345', ['web-cam']),
    new Client(10, 'Anna', 'Ivanova', 'anna.ivanova@example.com', '1234567', ['phone', 'table, cable']),
];

console.log(classClients);

//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClassClients = classClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClassClients);

//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarConstructor(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Новий рік випуску: ${this.year}`);
    };

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Додано водія: ${this.driver.name}`);
    };
}

let myCar = new CarConstructor('CR-V', 'Mazda', 2020, 250, 'benzine');

myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2022);

myCar.addDriver({name: 'Ivan', age: 30});

myCar.info();
//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, yearOutput, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.yearOutput = yearOutput;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }

    info() {
        console.log(`
            Модель: ${this.model}
            Виробник: ${this.producer}
            Рік випуску: ${this.yearOutput}
            Максимальна швидкість: ${this.maxSpeed}
            Об'єм двигуна: ${this.volume}
        `);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
    }

    changeYear(newValue) {
        this.yearOutput = newValue;
        console.log(`Новий рік випуску: ${this.yearOutput}`);
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Додано водія: ${this.driver.name}`);
    }
}

let car = new Car('X50', 'Volvo', 2014, 220, '2,4');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2020);

car.addDriver({
    id: 2,
    age: 24,
    name: 'Vasil'
});

//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//

class Cinderella {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

class Prince {
    constructor(name, age, findSizeFoot) {
        this.name = name;
        this.age = age;
        this.findSizeFoot = findSizeFoot;
    }
}

let cinderellas = [
    new Cinderella('Maria', 18, 35),
    new Cinderella('Inna', 32, 37),
    new Cinderella('Sophia', 25, 36),
    new Cinderella('Alla', 20, 38),
    new Cinderella('Olivia', 23, 35),
    new Cinderella('Tania', 24, 36),
    new Cinderella('Amelia', 22, 37),
    new Cinderella('Ivanka', 29, 38),
    new Cinderella('Olia', 20, 36),
    new Cinderella('Roma', 21, 35)
];

console.log(cinderellas);

let prince = new Prince('Bohdan', 31, 36);

console.log(prince);

let findCinderella = cinderellas.find(value => value.sizeFoot === prince.findSizeFoot);

if (findCinderella) {
    console.log(`Принц ${prince.name} знайшов попелюшку ${findCinderella.name} з розміром ноги ${prince.findSizeFoot}`);
}


//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    // console.log(this);
    for (const yourArrayElement of yourArray) {
        callback(yourArrayElement);
    }
};

[32, 33, 34, 35, 36].myForEach((value) => console.log(value));


Array.prototype.myFilter = function (callback) {
    const myArray = [];
    for (const item of this) {
        if (callback(item)) {
            myArray.push(item);
        }
    }
    return myArray;
}

let arrayOfUser = [
    {id: 1, name: 'Bohdan', age: 31},
    {id: 2, name: 'Ivan', age: 22},
    {id: 3, name: 'Olha', age: 18},
    {id: 4, name: 'Maria', age: 33},
    {id: 5, name: 'Alex', age: 20},
    {id: 6, name: 'Sergey', age: 23},
    {id: 7, name: 'Kateryna', age: 45}
];

const myFilterResult = arrayOfUser.myFilter((user) => user.age > 22);
console.log(myFilterResult);


