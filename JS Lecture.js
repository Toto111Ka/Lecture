
//callback функция
// function lernJS (lang, callback) {
//     console.log("I lern" + lang);
//     callback();
// }

// lernJS("javaScrtipt", function() {
//     console.log("im pass 3th level")
// }); 
// или
// function done(){
//     console.log("I pass 3th lecture!")
// }
// lernJS("JavaScript", done);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border:"black",
//     bg: "red"
// };

//delete options.bool; // удаление свойства обьекта
//console.log(options);

// for (let key in options) {   //перечесление свойств со значениями
//     console.log('Property ' + key + ' has vaule ' + options.key);
// }

// console.log(Object.keys(options).length); // количество ключей

// let arr = [1, 2, 3, 4, 5];

// arr.pop();          //удаляет 5ку с конца массива 
// arr.push("5");      //добавить значение с конца массива(строковое)
// arr.shif();         //удалить в начале
// arr.unshift("1");   //добавить в начале

// console.log(arr);

//перебор массива при помощи цикла

// let arr = ["first","second",3,4,"five"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (messive: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }

// cоздание массива при получение данных
// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// создание массива данных на сервере
// let arr = ["aaaa", "bbbb", "cccc", "dddd"],
//     i = arr.join(', ');
// console.log(i);

// let arr = ["aaaa", "cccc", "zzzz", "dddd"], //сортировка
//     i = arr.sort();
// console.log(arr);

// let arr = [1, 15, 4], //сортировка чисел
//     i = arr.sort(compareNum);
// function compareNum(a,b){
//     return a-b;
// }
// console.log(arr);

// ООП 

// let soldier = {  //прототип
//     health: 400,
//     armor: 100
// };

// let john = {     //потомок
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// циклы и прочее 

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Please, etner your expenses inem this month", ''), 
//         b = prompt("How much?", '');

//     if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null
//         && a != '' && b != '' && a.length < 50){
//         console.log("done")
//         appData.expenses[a]=b;
//     } else {
//          alert("Try Again");
//          i-- ;
//     }
    
// }

// let i = 0;
// while (i < 2) {
//          let a = prompt("Please, etner your expenses inem this month", ''), 
//              b = prompt("How much?", '');
    
//          if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null
//             && a != '' && b != '' && a.length < 50){
//             console.log("done")
//             appData.expenses[a]=b;
//         } else {
//              alert("Try Again");
//              i-- ;
//         }i++;
// }

//Динамическая типизация

// //-to String
// // 1) 
// console.log(typeof(String(4)));
// // 2)
// console.log("ww" + 5);
// console.log('http://vk.com/catalog/' + 5);

// //-to Number
// // 1)
// console.log(typeof(Number("5")));
// // 2)
// console.log(typeof(5 + +'5'));
// // 3)
// console.log(typeof(parseInt('15px', 10)));

// let ans = +prompt("Hello?", '');

// //-to Boolean
// // types : 0, '', null, underfined, NaN

// // 1)
// let switcher = null;

// if (switcher) {
//     console.log("Working..");
// }

// switcher = 1;

// if (switcher) {
//     console.log("Working..");
// }
// // 2)
// console.log(typeof(Boolean('5')));
// // 3)
// console.log(typeof(!!'5'));

// let x = 5; 
// alert(x++);

// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'yellow';
// });

// let div = document.createElement('div');
//     text = document.createTextNode('I was be here');

// div.classList.add('black');

// document.body.appendChild(div);
// // wrapper.appendChild(div);

// // div.innerHTML = '<h1>Hello World!</h1>';
// div.textContent = 'Hellow World!'; 

// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);

// document.body.replaceChild(btn[1], circle[1]);

// console.log(div);

// // btn[0].onclick = function() { //один клик
// //     alert('SasKudas');
// // };

// let wrap = document.querySelector('.wrapper1');
//     link = document.querySelector('.a');
//     btn1 = document.querySelectorAll('button');
    
// // btn[0].addEventListener('click', function(e) {
// //     // console.log(e);
// //     // let target = e.target;
// //     // target.style.display = 'none';
// //     console.log('SasKudas ' + e.type + ' Kek ' + e.target);
// // });

// // wrap.addEventListener('click', function(){
// //     console.log('SasKudas ' + e.type + ' Kek ' + e.target);    
// // });

// //прерывание перехода на ссылку
// // link.addEventListener('click', function(e){ 
// //     e.preventDefault();
// //     console.log('SasKudas ' + e.type + ' Kek ' + e.target);    
// // });

// btn1.forEach(function(item) {
//     item.addEventListener('mouseleave', function(){
//         console.log("leave!");
//     });
// });

// // btn[0].addEventListener('mouseenter', function(){
// //     alert('dont touch me');
// // });

// let box = document.querySelector('.box'),
//     btn = document.querySelector('.button');

// let width = box.scrollWidth,
//     height = box.scrollHeight;

// btn.addEventListener('click' , function(){
//     box.style.height = box.scrollHeight + 'px'; // cкрытие при нажание текста
//    // box.scrollTop = 0; // при клике возвращается в начало
//     console.log(box.scrollTop); // cкрытая часть нач сверху (пикселей)
// });

// console.log(box.getBoundingClientRect()); // метод вывод координат
// // Для получения конкретного элемента (.cвойство)
// // console.log(document.documentElement.свойство)

//// конструктор Шаблонов ЕС5
// function User(name,id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello! ' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' Exit');
// }

// let Ivan = new User('Ivan', 25);
//     Alex = new User('Alex', 20);

// console.log(Ivan);

// Ivan.exit();

// // конструктор Шаблонов ЕС6
// class User {
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log('Hello! ${this.name}')
//     }
//     exit() {
//     console.log('User ${this.name} exit')
//     }
// }
// let Ivan = new User('Ivan', 25);
// let Alex = new User('Alex', 20);

// console.log(Ivan);

// Ivan.exit();

// 1) Вызов функции - виндову/Андефайнд
// function showThis(a, b) {
//     console.log(this);
//         function sum() {
//             console.log(this);
//             return a + b;
//         }
//     console.log(sum());
// }
// showThis(4, 5);

// 2) Метод обьекта - this = обьект

// let obj = {
//     a: 20,
//     b: 25,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// 3) Конструктор (New) - this = новый созданый обьект (смотри выше)

// 4) Указание конкретного контекста - call, applay, bind

// let user = {
//   name: "John"  
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(nunmer){
//     return this * nunmer;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));

// let btn = document.querySelectorAll('button')[0];

// btn.addEventListener('click', function(){
//     console.log(this);
//     this.style.backgroundColor = 'red';
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// });

//промисы 

//Колбек без промисов

// let drink = 0;

// function shoot(arrow, headshot, fail){
//     console.log('You shot up');

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("you miss");
//     }, 3000)
// };

// function win() {
//     console.log('you WIN!');
//     (drink == 1) ? buyBeer() : giveMonye();
// }

// function buyBeer(){
//     console.log('You got a beer!');
// }

// function giveMonye(){
//     console.log('You got monye!');
// }

// function loose() {
//     console.log('you LOSER!')
// }

// shoot({}, 
//     function(mark) {
//         console.log('You hit in target!');
//         win(mark, buyBeer, giveMonye);
//     }, function(miss){
//         console.error(miss);
//         loose();
//     }
// )

// с промисами

// let drink = 0;

// function shoot(arrow) {
//     console.log('You shot up');

//     let promise = new Promise(function(resolve, reject) { //Резолф обещание тру реджект фолс;
//         setTimeout(function(){
//             Math.random() > .5 ? resolve({}) : reject("you miss");
//         }, 3000);
//     });
    
//     return promise;

// };

// function win() {
//     console.log('you WIN!');
//     (drink == 1) ? buyBeer() : giveMonye();
// }

// function buyBeer(){
//     console.log('You got a beer!');
// }

// function giveMonye(){
//     console.log('You got monye!');
// }

// function loose() {
//     console.log('you LOSER!');
// }

// shoot({})
//         .then(mark => console.log('You hit in target!'))
//         .then(win)    //для ресолв
//         .catch(loose) //для реджект

// Внутренная Память (на странице)

// localStorage.setItem("number", 1); // запись ключей 

// console.log(localStorage.getItem("number")); // получение значение ключа

// localStorage.removeItem("number"); // удаление ключа 

// localStorage.clear(); // очистка всего хранилища

// window.addEventListener("DOMContentLoaded", function(){

//     let checkBox = document.getElementById('rememberMe'),
//         change = document.getElementById('chenge'),
//         form = getElementsByTagName("form")[0];

//     if(localStorage.getItem("isChecked") === "true") { //Тру в строке потому запись происходить в строке (Локальная история)
//         checkBox.checked = true;
//     }
//     if(localStorage.getItem("bg") === "changed") {
//         form.style.backgroundColor = "#FF4766";
//     }

//     checkBox.addEventListener('click', function(){
//         localStorage.setItem("isChecked", true);
//     });

//     change.addEventListener('click', function(){
//         localStorage.setItem('bg', 'changed');
//     });

//     let persone = {
//         name: "Alex",
//         age: 25,
//         tech: ['mobile', 'netbook']
//     }

//     let serializedPersone = JSON.stringify(persone); // перевод в Жсон формат
//     localStorage.setItem("Alex", serializedPersone);

//     console.log(JSON.parse(localStorage.getItem("Alex"))); // передача данных обектов из Локальной истори
// });

// Ошибки

//Трай Кетч для перехвата ошибок

// try {
//     cpnsole.log('Normal')
// } catch {
//     console.log('error')
// }

// console.log(error.name); //имя ошибки
// console.log(error.massage); //описание ошибки
// console.log(error.stack); // набор вызовов


//создание ошибок

// let json = '{"id":2}'

// try {
//     let user = JSON.parse(json);
//     cpnsole.log(user);

//     if(!user.name){
//         trow new Error("В этих данных нет имени");
//     }

// } catch {
//     console.log('error');
// } finally {
//     console.log('я выполнюсь всегда')
// }
