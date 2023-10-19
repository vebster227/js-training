// const subs = [
//     {name: 'Andrey', isCloseFriend: true},
//     {name: 'Maria', isCloseFriend: false},
//     {name: 'Vitaliy', isCloseFriend: false},
//     {name: 'Alex', isCloseFriend: true},
//     {name: 'Frank', isCloseFriend: false},
//     {name: 'Nick', isCloseFriend: false},
//     {name: 'John', isCloseFriend: false},
//     {name: 'Mike', isCloseFriend: true},
// ];

//for(let i = 0; i < subs.length; i++) {
//    console.log(subs[i])
//};

// for(const item of subs ) {
//     console.log(item);
// };

// const obj = {
//     name: 'Ivan',
//     age: 18,
//     gender: 'male',
//     nation: 'Ukrainian',
//     hobby: 'Programming'
// };

// for(const key in obj) {
//     console.log(obj[key]);
// };


// let i = 0;
// while(i < subs.length) {
//     console.log(subs[i]);
//     i++;
// }


// let i = 0;

// do {
//     console.log(subs[i]);
//     i++;
// } while(i < subs.length)

// const numArr = [1,2,3,4,5,6,7,8,9]

// function numToSquare(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] *= arr[i]
//     };
//     return arr;
// };

// console.log(numToSquare(numArr));
// const num = 10;
// let firstName = 'Vitaly';

// console.log(firstName);

// function sayHello() {
//     const test = 5;
//     console.log(test)
// }

// sayHello()

// const people = [
//     {
//         name: 'Ross',
//         sex: 'male',
//     },
//     {
//         name: 'Monica',
//         sex: 'female',
//     },
//     {
//         name: 'Chandler',
//         sex: 'male',
//     },
//     {
//         name: 'Phoebe',
//         sex: 'female',
//     },
//     {
//         name: 'Ross',
//         sex: 'male',
//     },
//     {
//         name: 'Rachel',
//         sex: 'male',
//     }
// ];

// function addSomeAdjective(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].sex == 'male') {
//             arr[i].name += ' handsome';
//         } else {
//             arr[i].name += ' pretty'
//         }
//     };
//     return arr;
// }

// console.log(addSomeAdjective(people));

// const hap = document.getElementById("btn-hapiness");
// const sad = document.getElementById("btn-sadness");
// const img = document.querySelector('.img');

// hap.addEventListener('click', function() {
//     img.style.display = "inline";
//     hap.disabled = true;
//     sad.disabled = false;
// });

// sad.addEventListener('click', function() {
//     img.style.display = "none";
//     hap.disabled = false;
//     sad.disabled = true;
// });

// const firstName = 'Vitaly';

// function sayHello() {
//     console.log(firstName);
// }

// firstName = "Andrew";

// sayHello();

// var summation = function (num) {
//     let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//     console.log(i);
//     console.log(sum);
//   }
//   return sum;

// };

// console.log(summation(9));



//Hoisting//



// sayHello();


// function sayHello() {
//     console.log('hello');
// };

// console.log(age);

// var age = 20;

// const numbers = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1]
// function getRepetionOfNumber(numberArr, number) {
//     let counter = 0

//     for ( i = 0; i <= numberArr.length; i++) {
//         if (numberArr[i] === number) {
//             counter++;
//         };
//     };

//     return counter > 0 ? counter : 'Даного числа не має';
// };

// console.log(getRepetionOfNumber(numbers, 1));


//Array methdos

// const users = [
//     {
//         name: 'Ross',
//         age: 18,
//         sex: 'male',
//     },
//     {
//         name: 'Monica',
//         age: 17,
//         sex: 'female',
//     },
//     {
//         name: 'Chandler',
//         age: 21,
//         sex: 'male',
//     },
//     {
//         name: 'Phoebe',
//         age: 25,
//         sex: 'female',
//     },
//     {
//         name: 'Ross',
//         age: 16,
//         sex: 'male',
//     },
//     {
//         name: 'Rachel',
//         age: 87,
//         sex: 'male',
//     }
// ];

// for (let item of users) {
//     console.log(item);
// }

// const count = {
//     men: 0,
//     women: 0,
// }

// users.forEach(function (item, index) {
// if (item.sex === "male") {
//     count.men++;
// } else {
//     count.women++;
// }
//     item.sex === "male" ? count.men++ : count.women++;
// });


// const adults = users.filter(function (item) {
//     return item.age >= 18;
// });
// console.log(adults);


// const correctNames = users.map(function (item) {
//     return item.sex === 'male' ? 'Mr. ' + item.name : "Mrs. " + item.name;
// });

// console.log(correctNames);

// const sum = users.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.age
// }, 0);

// console.log(sum) / users.length;

// const foundObj = users.find(function (item) {
//     return item.age > 18
// });

// console.log(foundObj);

// const someObj = users.some(function (item) { // перевіряє чи хоч одне підходить
//     return item.age > 18
// });

// console.log(someObj);

// const everyObj = users.every(function (item) { // перевіряє чи всі підходять
//     return item.age > 18
// });

// const FinInexObj = users.findIndex(function (item) { // дає індекс обєкта в масиві який викоує це значення
//     return item.age > 17
// });

// console.log(FinInexObj);

////////////////////////////////////


// Arrow Functions


// let sayHello = () => {
//     console.log('hello2')
// };

// sayHello();

// let sayHelloToPerson = name => {
//     console.log('hello 2 ' + name)
// };

// sayHelloToPerson('Ivan');

// const summ2 = (a, b) => a + b;

// console.log(summ2(10, 5));

// const filterArr = users.filter(item => item.age >= 18);

// console.log(typeof filterArr);


////////////////////////////////////

//Trainind ToDO list


// const button = document.querySelector('.todo-button');
// const input = document.querySelector('.todo-input input');
// const list = document.querySelector('.todo__list');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.className = 'todo-list-item';
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     li.innerText = input.value;
//     list.appendChild(li);
//     li.appendChild(deleteBtn)
//     input.value = "";

//     deleteBtn.addEventListener('click', () => {
//         list.removeChild(li);
//     })
// })

///////////////////////////////////////////////////

// Примітиви vs обєкти

// const obj1 = {
//     name: "Vitaly",
//     age: 18,
// };

// const obj2 = obj1


// obj1.age = 50;
// obj2.name = "Vitaly";

// console.log(obj1);
// console.log(obj2);


// const groupA = [
//     'FC Arsenal London',
//     'FC Real Madrid',
//     'FC Bayern Munich',
//     'FC Milan',
// ];


// function createTeamsForCalendarPage(teams) {
//     teams.forEach((item, index) => {
//         const onlyClubName = item.split(" ")[1];
//         teams[index] = onlyClubName;
//     });
//     return teams;
// };

// const newArr = [...groupA]; //spread method для копіювання, а не посилання
// console.log(newArr);

// console.log(createTeamsForCalendarPage(groupA));
// console.log(groupA);

// function createTeamsForCalendarPage(teams) {
//     const newArr = teams.map((item) => item.split(' ')[1])
//     return newArr
// };

// console.log(createTeamsForCalendarPage(groupA));


//Копіювання об'єктів в js

// const obj1 = {
//     name: "Ivan",
//     age: 18,
//     food: {
//         salty: 'pizza',
//         sweet: 'chokolate',
//     },
//     sayHello: function() { // метод в об'єкті
//         console.log('Hello');
//     },
//     sayHello2() { // метод в об'єкті
//         console.log('hello 2');
//     },
// };


// Shallow copy поверхневе копіювання


// const obj2 = {...obj1};  //spread oprator
// const obj2 = Object.assign({city: 'obukhiv'}, obj1); // не spread

//Deep copy

// const obj2 = JSON.parse(JSON.stringify(obj1)); // когвертує текст в об'єкти

//loadash - бібліотека

// obj2.name = 'Vitaly';
// obj2.food.salty = "burger";



// console.log(obj1);
// console.log(obj2);
// console.log(JSON.stringify(obj1)); // конвертує об'єкти в текст

// setTimeout(()=> {
//     console.log('hello from setTimeout');
// }, 1000);



// Practice 2 .fetch


// fetch('https://jsonplaceholder.typicode.com/posts')  //Promise
//     .then(response => response.json()) //Promise
//     .then(json => {
//         const list = document.querySelector('.posts-list');
//         json.forEach((item, index) => {
//             //creating elements
//             const post = document.createElement('li');
//             const postIndex = document.createElement('span');
//             const postTitle = document.createElement('h4');
//             const postText = document.createElement('p')
//             const postReadMoreButton = document.createElement('a');
//             //styling elements
//             post.classList.add('posts-list-item');
//             postIndex.classList.add('post-index');
//             postTitle.classList.add('post-title');
//             postText.classList.add('post-text');
//             postReadMoreButton.classList.add('post-link');
//             //updating content
//             postIndex.innerHTML = index + 1;
//             postTitle.innerHTML = item.title;
//             postText.innerHTML = item.body;
//             postReadMoreButton.innerHTML = 'Read more'
//             //inserting content
//             post.append(postIndex, postTitle, postText, postReadMoreButton)
//             list.appendChild(post);
//         });
//     });

// old AJAX request

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/ukraine');
// request.send();
// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
// });

// Promises

// const promise = new Promise((resolve, reject) => {
//     const isUserLoggedIn = true;
//     if (isUserLoggedIn) {
//         setTimeout(() => resolve('You are logged in'), 2000)
//     } else {
//         setTimeout(() => reject('Sorry, you are not logged in'), 2000);
//     }
// });

// promise
//     .then(data => {
//         return new Promise((resolve, reject) => {
//             if (5 < 10) {
//                 console.log(data);
//                 resolve(`${data} in promise 2`);
//             } else {
//                 reject(`error in nested promise`)
//             }
//         })
//     })
//     .then(data => {
//         return new Promise((resolve, reject) => {
//             if (5 < 10) {
//                 console.log(data);
//                 resolve(`${data} in promise 2`);
//             } else {
//                 reject(`error in nested promise`)
//             }
//         })
//     })
//     .catch(error => console.log(error))
//     .finally(() => alert('159753'));

// promise practic

// function getPostById(id) {
//     const result = {
//         id,
//         name: "",
//         posts: []
//     }
//     fetch('https://jsonplaceholder.typicode.com/users')  //Promise
//         .then(data => data.json()) //Promise
//         .then(users => {
//             const foundUser = users.find(user => user.id === id)
//             result.name = foundUser.name;
//             fetch('https://jsonplaceholder.typicode.com/posts')
//                 .then(data => data.json())
//                 .then(posts => {
//                     result.posts = posts.filter(user => user.userId === id);
//                     console.log(resul);
//                 })
//         })
// }

// getPostById(4)

// async await 

// function fetchUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(user => user)
// } 

// async function sayHello() {
//     const user = await fetchUsers();
//     console.log(user);
//     alert(`Hello ${user.name}`)
// }

// async function sayHello() {
//     try {
//         const user = await fetchUsers();
//         console.log(user);
//         alert(`Hello ${user.name}`)
//     } catch(error) {
//         console.log(error.message);
//     }
// }

// sayHello()

// async function returnUsers() {
//     const users = await fetchUsers();
//     const ul = document.querySelector('.users-list');
//     for (const user of users) {
//         const li = document.createElement('li');
//         li.classList.add('users-list-item');
//         li.innerHTML = user.name;
//         ul.appendChild(li);
//     }
// }

// function filterUsers(e) {
//     const usersListItems = document.getElementsByClassName('users-list-item');
//     for (const user of usersListItems) {
//         if (!user.innerHTML.startsWith(e.target.value)) {
//             user.classList.add('hidden')
//         } else {
//             user.classList.remove('hidden')
//         }
//     }
// }

// returnUsers()

// document.querySelector('.input').addEventListener('keyup', filterUsers)



// prototype

//     const person = new Object({
//         name: 'John',
//         age: 30,
//         greet: function() {
//             console.log('Greet');
//         }
//     })

// Object.prototype.sayHello = function() {
//     console.log('Hello');
// }

// const lena = Object.create(person);
// lena.name = "Olena";

// this 

//     function hello() {
//         console.log('hello', this);
//     };

// const person = {
//     name: 'Ivan',
//     age: 30,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(this),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`);
//         console.groupEnd();
//     }
// }

// const lena = {
//     name: 'Olena',
//     age: 23
// }

// person.logInfo.bind(lena, 'sdffdsf', 'fsdfdsfs') (); //bind
// person.logInfo.call(lena, 'sdffdsf', 'fsdfdsfs') // те саме що bind тільки зразу викликає функ.
// person.logInfo.apply(lena, ['sdffdsf', 'fsdfdsfs'])// те саме що call тільки пишеться по іншому

// =======

// const array = [1, 2, 3, 4, 5]

// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i * n;
//     })
// }

// console.log(array.multBy(20));


// object getters and setters

// const person = Object.create({}, {
//     name: {
//         value: 'Ivan',
//         enumerable:true,
//         writable: true,
//         configurable: true
//     },
//     age: {
//         get() {
//             return new Date().getDate()
//         },
//         set(value) {
//             console.log('ffwfwa');
//         }
//     }
// })


// classes es6

// class Component {
//     constructor(selector) {
//         this.element = document.querySelector(selector);
//     }

//     hide() {
//         this.element.style.display = 'none';
//     }

//     show() {
//         this.element.style.display = 'block';
//     }
// }

// class Box extends Component {
//     constructor (options) {
//         super(options.selector)

//         this.element.style.width = this.element.style.height = options.size + "px"
//         this.element.style.background = options.color
//     }
// }

// const box1 = new Box ({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })


// array methods 

// let arr = [1, 2, 3, 4, 5]
// arr.forEach(number => console.log(number))
// const arr1 = arr.map(number => console.log(number))
// const arr2 = arr.filter(number => number >= 2)
// const arr3 = arr.reduce((number, total) => number + total, 20)

// console.log(arr2);
// console.log(arr3);



///////////////////////////////


// function sum(numbers) {
//     "use strict";
//     const total = numbers.reduce((accumulator, number) => {
//         console.log(accumulator);
//         return accumulator + number;
//     }, 0);
//     return total;
    
// }
// sum([1, 2 , 3])

// const arr = "29849"



// const arr2 = Array.from(arr, Number(arr))

// console.log(arr2);


// Localstorage


const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber);
// console.log(localStorage.getItem('number'));
// localStorage.clear()

// const object = {
//     name: "John",
//     age: 42
// }

// localStorage.setItem('person', JSON.stringify('person'))

// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person.name = 'Ivan'

// console.log(person)

// window.addEventListener('storage', event => {
//     console.log(event);
// })

// console.log(5/2);

// // 4 типи ООП
// class Chart {
//     constructor(height, background, hasBorder) {
//         this.height = height;
//         this.background = background;
//         this.hasBorder = hasBorder;
//     }
// }



// class ChartClikable extends Chart {
//     #isClikable = true;
//     handleClick() {
//         alert("You cliked on thr Clikable Chart");
//     }
//     getIsClikable() {
//         return this.#isClikable;
//     }
// }

// class ChartClikableSecond extends ChartClikable {
//     handleClick() {
//         alert("You cliked on Clikable Second Chart")
//     }
// }

// const chartContent = new ChartClikable("300px", "red", true);
// const chartContent2 = new ChartClikableSecond("200px", "green", true);
// const chartContent3 = new ChartClikable("259px", "blue", false);




// function renderChart(charData) {
//     const chartsContainer = document.querySelector(".charts-container");
//     const chart = document.createElement("div");
//     chart.classList.add("chart");
//     chart.style.height = charData.height;
//     chart.style.backgroundColor = charData.background;
//     if (charData.hasBorder) {
//         chart.style.border = "2px solid black";
//     }
//     chartsContainer.appendChild(chart);
//     if (charData.getIsClikable()) {
//         chart.addEventListener("click", charData.handleClick)
//     }
// }

// renderChart(chartContent);
// renderChart(chartContent2);
// renderChart(chartContent3);
// // factory / constructor
// function createUsers(name, age, sex) {
//     return {
//         name,
//         age,
//         sex
//     };
// }

// const user1 = createUsers("Nikolas", "18", "male");

// console.log(user1);
// // constructer
// function CreateUsers(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }

// const user12 = new CreateUsers("Nikolas", "18", "male");

// console.log(user12);

// function LotteryCard(index, isWinning){
//     this.index = index;
//     this.isWinning = isWinning;
//     this.handleTry = function (attempt, square, squareContainer) {
//         console.log(attempt);
//         if (this.isWinning){
//             alert("Congrats! You have won");
//             square.classList.add("square-correct");
//         } else{
//             if (attempt === 3 ){
//                 alert(`Sorry you lost the game`);
//                 squareContainer.innerHTML = null;
//                 return;
//             }
//             alert("Try one more time");
//             square.classList.add("square-wrong")
//         }
//     };
// }
// const lottoCards = [
//     new LotteryCard(1, true),
//     new LotteryCard(456790, false),
//     new LotteryCard(2, false),
//     new LotteryCard(5, false),
//     new LotteryCard(14, false),
//     new LotteryCard(46, false),
//     new LotteryCard(44, false),
//     new LotteryCard(8, false),
//     new LotteryCard(1488, false),
//     ];

//     function renderSquares(squares){
//         let attempt = 0;
//         const squareContainer = document.querySelector(".squares-container")
//         squares.forEach((item) => {
//             const square = document.createElement("div");
//             const squareIndex = document.createElement("h4");
//             squareIndex.innerHTML = item.index;
//             square.appendChild(squareIndex);
//             square.classList.add("square");
//             square.addEventListener("click", () => {
//                 item.handleTry(++attempt, square, squareContainer);
//             });
//             squareContainer.appendChild(square);
//         });
//     }

// renderSquares(lottoCards);

// this keyword

// 1
// console.log(this)

// 2

// function showThis() {
//     console.log(this)
// }

// 3

    // const obj = {
    //     name: "John Doe",
    //     showThis() {
    //         console.log(this)
    //     }
    // }
    // obj.showThis();

// 4

// function Person(name) {
//     this.name = name;
//     this.sayHello = function () {
//         console.log(`Hi! My name is ${this.name}`);
//     };
// }
// const person = new Person('Alice');
// person.sayHello();

// 5

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     showThis() {
//         console.log(`hello, ${this.name}`);
//     }
// }
// const person1 = new Person("Bob");
// person.showThis();
// console.log(person1);

// 6 

// const obj = {
//     sayHello() {
//         function inner() {
//             console.log(this)
//         }
//         inner();
//     },
//     sayHelloArrow() {
//         const inner = () => {
//             console.log(this);
//         };
//         inner();
//     },

// };
// obj.sayHello();
// obj.sayHelloArrow();

// 7

// const obj1 = {name: "Ivan", age: 18};

// const obj2 = {
//     sayHello(a, b, c) {
//         console.log(a, b, c)
//         console.log(this.age);
//     }
// }

// obj2.sayHello();
// obj2.sayHello.call(obj1, 1, 2, 3);
// obj2.sayHello.bind(obj1, [1, 2, 3]);

// 8

// const obj1 = {name: "Ivan", age: 18}
// function sayHello() {
//     console.log(this.name);
// }
// const updatedContextSayhello = sayHello.bind(obj1);
// updatedContextSayhello();