/*function Calculator(){

    this.read = function (){
        this.firstValue = +prompt();
        this.secondValue = +prompt();
    }

    this.sum = function (){
        return (this.firstValue + this.secondValue)
    }

    this.mul = function (){
        return (this.firstValue * this.secondValue)
    }
}

let calc = new Calculator();
calc.read();
alert('Sum = ' + calc.sum());
alert('Mul = ' + calc.mul());*/
/*
function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function (){
        this.value += +prompt();
    }
}

let acc = new Accumulator(1);

acc.read();
acc.read();

alert(acc.value);*/
/*function readNumber(num){
    num = Number(prompt('Введите число:',''));
    while (!(isFinite(num))){
        num = prompt('Введите число:','');
    }
    alert(num);
}

readNumber();*/

// Строки
/*function checkSpam(str){
    if(str.includes('viagra') || str.includes('XXX')) alert(true);
    else    alert(false);
}

checkSpam(prompt());*/
/*function truncate(str, maxLength){
    if (str.length > maxLength){
        str = str.substring(0, maxLength) + "...";
    }
    alert(str);
}

truncate(prompt('Строка'), 5);*/
/*function extractCurrencyValue(str){
    return  str.slice(1);
}

alert(extractCurrencyValue(prompt()) == 120);*/

//Массивы
/*let sumInput = () => {
    let arr = [];
    let sum = 0;

    while (true){
        let value = prompt('Введите число: ');

        if (value === "" || value === null || !isFinite(value)) break;

        arr.push(Number(value));
        sum += Number(value);
    }

    alert(sum);
}
sumInput();*/
/*let arr = [1, 2, 3]; // метод forEach

arr.forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
})*/
/*let users = [ // метод find
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Артём'},
    {id: 3, name: 'Саша'},
];

let user = users.find(item => item.id == 1);
alert(user.name);*/
/*let users = [ // метод filter
    {name: 'Саша', sex: 'female'},
    {name: 'Саня', sex: 'female'},
    {name: 'Тёма', sex: 'male'},
    {name: 'Данила', sex: 'male'},
    {name: 'Даниил', sex: 'male'},
];

let maleUsers = users.filter(item => item.sex == 'male');

let maleUsersList = "";

maleUsers.forEach(item => {
    maleUsersList = maleUsersList + item.name + '; ';
});

alert(`Мужики: ${maleUsersList}`)*/
/*const users = [ // метод map
    {name: 'Саша', sex: 'female'},
    {name: 'Саня', sex: 'female'},
    {name: 'Тёма', sex: 'male'},
    {name: 'Данила', sex: 'male'},
    {name: 'Даниил', sex: 'male'},
];

const introduce = item => {
    if (item.sex == 'male') alert(`Я мальчик по имени ${item.name}`);
    else    alert(`Я девочка по имени ${item.name}`);
}

users.map(introduce);*/
/*let numbers = [1, 2, 13, 5, 32]; //метод sort;

alert(numbers.sort()); // 1,13,2,32,5

function compareNumericSmaller(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

alert(numbers.sort(compareNumericSmaller)); // 32,13,5,2,1*/
/*//методы split и join
const names = 'Тёма, Саша, Саня, Данила, Даниил Нетребко';

let splitNames = names.split(', ');

console.log('Строка разделилась на массив: ');
for (name of splitNames){
    console.log(name);
}

let joinedNames = splitNames.join(', ');

alert(`Массив обратно склеился в строку: ${joinedNames}`);*/
//Задания
/*// camelize 1
const camelize = sentence => {
    const bezDefisa = sentence.split('-');
    for (let word = 1; word != bezDefisa.length; word++){
        let letters = bezDefisa[word].split('');
        letters[0] = String(letters[0]).toUpperCase();
        bezDefisa[word] = letters.join('');
    }
    alert(bezDefisa.join(''));
}
// camelize 2
camelize(prompt());
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

alert(camelize('my-long-word'));*/
/*let copySorted = (arr) => { //копия и сортировка массива
    let copyArr = arr.slice();
    console.log(copyArr);
    copyArr.sort();
    console.log(`Оригинальный массив: ${arr}\nОтсортированный массив: ${copyArr}`);
    return copyArr;
}

alert(copySorted(["HTML", "JavaScript", "CSS"]));*/
/*let vasya = { name: "Вася", age: 25 }; //map возвращает МАССИВ результатов
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name); //map возвращает МАССИВ результатов

console.log(names);*/
/*// Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
}));

console.log(usersMapped);*/
/*
// Сортировка массива объектов по их свойству
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let sanya = { name: "Саня", age: 30 };

let arr = [ vasya, petya, masha, sanya];

const sortByAge = (arrayToSort) => {
    return arrayToSort.sort((a, b) => a.age > b.age ? 1 : -1)
};

console.log(arr);*/
/*
// Вычисление среднего возраста объектов из массива (reduce)
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => {    // мой вариант
    let sum = 0;
    let count = 0;
    arr.forEach(user => {
        sum += user.age;
        count ++;
        console.log(`${user.age} ${sum} ${count}`)
    })
    return Math.round(sum/count);
}

function getAverageAgeLearnJS(users) {  // вариант Learn JS
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert(getAverageAge(arr));*/
/*
// фильтрация уникальных элементов
function unique(arr) {
    let sorted = [];
    sorted.push(arr[0]);

    arr.forEach(item => {
        if (!sorted.includes(item)) sorted.push(item);
    })

    return sorted;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O*/
/*
// Превращение массива объектов в объект с объектами
const groupById = (arr) => { //мой вариант
    let tempUsersById = {};
    for (let user of arr){
        tempUsersById[user.id] = user;
    }
    return tempUsersById;
}

const groupByIdReduce = (users) => { //вариант LJS
    return users.reduce((endObjects, user) => {
        endObjects[user.id] = user;
        return endObjects;
    }, {})
}

const users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupByIdReduce(users);

console.log(usersById);*/

//Object.keys, values, entries
/*// Суммирование значений объекта
const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => {
    let sum = 0;
    for (let salarie of Object.values(salaries)) {
        sum += salarie;
    }
    return sum;
}

console.log(sumSalaries(salaries));*/
/*// Подсчёт свойств объекта
const countObj = (obj) => Object.keys(obj).length;

let user = {
    name: 'John',
    age: 30
};

alert( countObj(user) );*/

//Даты и время
/*// Создание даты
alert(new Date(2012, 1, 20, 3, 12));*/
/*// Получение дня недели
const getWeekDay = date => {    // мой НЕПРАВИЛЬНЫЙ вариант
    switch(date.getDay()) {
        case 0: return 'ВС';
        case 1: return 'ПН';
        case 2: return 'ВТ';
        case 3: return 'СР';
        case 4: return 'ЧТ';
        case 5: return 'ПТ';
        case 6: return 'СБ';
    }
}

const getWeekDayLJS = date => {     // УМНЫЙ И ПРАВИЛЬНЫЙ вариант LJS
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',];
    return days[date.getDay()];
}

alert(getWeekDayLJS(new Date(2012, 0,3)));
alert(getWeekDayLJS(new Date));*/
/*// День недели в европейской нумерации
const getLocalDay = (date) => date.getDay() === 0 ? 7 : date.getDay();

alert(getLocalDay(new Date(2012, 0,3)));*/
/*// Получение последнего числа указанного месяца
const getLastDayOfMonth = (year, month) => new Date(year, month, 0).getDate();``

alert(getLastDayOfMonth(2012, 2));*/
/*// Получение количества секунд с начала дня
const getSecondsToday = (date) => {
    return (date.getTime() - date.setHours(0,0,0))/1000;
}

alert(getSecondsToday(new Date()));
alert(getSecondsToday(new Date(2022, 2, 13,10)));*/
/*// Сколько секунд до завтра?
const getSecondsToTomorrow = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    nextDay.setHours(0, 0, 0);
    console.log(`${nextDay} - ${date} = ${nextDay - date}`);
    return (nextDay - date)/1000;
}

alert(getSecondsToTomorrow(new Date(2023, 1, 12, 23)));*/
/*// Форматирование даты в зависимости от прошедшего времени (как сообщения ВК)
const formatDate = (date) => {
    const diff = Date.now() - date.getTime(); //разница в милисекундах

    if (diff < 1000) return "Прямо сейчас";

    else if (diff < 1000 * 60) return `${diff/1000} сек. назад`;

    else if (diff < 1000 * 60 * 60) return `${diff/1000/60} мин. назад`;

    else {
        let d = date;       //форматирование даты
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

        // соединить компоненты в дату
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );*/

//Замыкание
/*// function(a)(b);
function sum(a){

    return function (b){
        return a+b;
    };

}

alert(sum(1)(2));*/
/*// Функции фильтрации массивов inBetween и inArray
const arr = [1,2,3,4,5,6,7,8];

const inBetween = (start, end) => {
    return (word) => {
        return (word >= start && word <= end);
    }
}

const inArray = (...elements) => {
    return (word) => {
        return elements.includes(word);
    }
}

alert(arr.filter(inBetween(2,5)));

alert(arr.filter(inArray(2,4,5,10)));*/
/*// Сортировать по введённому полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

const byField = (field) => {
/!*    if (field === 'name') {
        return (a, b) => a.name > b.name ? 1 : -1;
    }
    if (field === 'age') {
        return (a, b) => a.age > b.age ? 1 : -1;
    }*!/
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

users.sort(byField('name'));
users.forEach(user => alert(user.name + ', ' + user.age)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name + ', ' + user.age));*/

//Декораторы и переадресация вызова
/*// Декоратор-шпион
function work(a, b) {
    alert(a + b);
}

function spy(func) {

    function wrapper(...args) {
        // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1,2);
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}*/
/*// Задерживающий декоратор
function f(x){
    alert(x);
}

function delay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };

}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 5000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test");*/

//Прототипное наследование
/*let head = {
    glasses: 1

};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);*/
// Встроенные прототипы
/*
//  Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function(ms) {
    setTimeout(this, ms); // this ссылается на функцию-объект, которая вызывает метод
    console.log(this);
};

function f() {
    alert("Hello!");
}

f.defer(1000);
*/
/*//   Добавьте функциям декорирующий метод "defer()"
Function.prototype.defer = function(ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2);*/
/*// Методы прототипов, объекты без свойства __proto__


/!*!//////// Моё решение
let dictionary = Object.create(null);
dictionary.toString = function (){
    let endString = "";
    for (let key in this){
        endString += `${key}, `;
    }
    return endString;
}

Object.defineProperty(dictionary, 'toString', {enumerable: false})*!/

////////// Решение LJS
let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
        value() { // значение -- это функция
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"*/

//Промисы
/*// Задержка на промисах
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));*/
/*// Цепочка промисов
let prom = new Promise(resolve => {
    resolve(1);
})
    .then(result => {
        alert(result);
        return ++result;
    })
    .then(result => {
        alert(result);
        return ++result;
    })
    .then(alert);*/
/*// Promise.all()
function alertResult(resolveValue){
    if (!Math.round(Math.random())) throw new Error(`Ошибка в строке ${resolveValue}`);
    alert(resolveValue);
    return resolveValue;
}
let results = Promise.all([
    new Promise((resolve, reject) => setTimeout(() => alertResult(1), 1000)),
/!*    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),*!/
    new Promise((resolve, reject) => setTimeout(() => alertResult(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => alertResult(3), 3000))
])  .then(results => {
    results.forEach(result => alert(`Результат ${result}`));
    alert('Всё хорошо');
}, (error) => alert(error.message)); //не работает*/

//async, await
/*// Пример 1
async function loadJson(url) {
    let response = await fetch(url);

    if (response.status === 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

loadJson('no-such-user.json') // (3)
    .catch(alert);*/
/*// Пример 2
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        let json = await response.json();
        return json;
    }
    throw new HttpError(response);
}

async function demoGithubUser() {
    let user;

    while (true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }

    alert(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();*/
/*// Вызовите async–функцию из "обычной"
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    // покажет 10 через 1 секунду
    wait().then(result => alert(result));
}

f();*/

//Генераторы
/*// Генератор псевдослучайных чисел для тестировки
function* pseudoRandom(seed) {
    let value = seed;
    while (true) {
        value = value * 16807 % 2147483647;
        yield value;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073*/


















