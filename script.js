// урок 257
// задание 1
// function func() {
// 	this.value = Number(this.value) + 1;
// }
// let elems = document.querySelectorAll('.elem');
// for(let elemm of elems){
//     elemm.addEventListener('blur', func)
// }
// задание 2
// let elems = document.querySelectorAll('.aaa')
// function func (){
//         this.textContent = this.textContent * this.textContent
// }
// for(let elem of elems){
//     elem.addEventListener('click', func)
// }

// урок 258
// задание 1

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function(){this.textContent++;});
// }

// урок 259
// задание 1
// let button = document.querySelector('#button')
// let a =document.querySelector('#a')

// button.addEventListener('click', func)

// function func(){
//     a.textContent = a.textContent + '(' + a.href + ")"
//     this.removeEventListener('click', func )
// }
// задание 2
// let button = document.querySelector('#button')
// button.addEventListener('click', func)
// function func() {
//     if(Number(button.value < 10))
//     { this.value = Number(this.value) + 1;}
//     else {this.removeEventListener('click', func )}
// }

// урок 260
// задание 1
// let elems = document.querySelectorAll('.aaa')
// for(let elem of elems){
//     elem.addEventListener('click', func)
// }
// function func (){
//     this.textContent += '!';
//     this.removeEventListener('click', func )
// }

// урок 260
// задание 1 

// let elems = document.querySelectorAll('li');
// for(let elem of elems){
//     elem.addEventListener('click', function(){
//         this.textContent = +this.textContent + 1;
//     })
// }

// задание 2
// let elems = document.querySelectorAll('li');
// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         this.textContent = +this.textContent + 1;
//         this.removeEventListener('click', func )
//     })
// }

// задание 3
// let elems = document.querySelectorAll('li');
// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         if(+this.textContent < 10){
//         this.textContent = +this.textContent + 1} else {
//         this.removeEventListener('click', func )}
//     })
// }

// урок 262

// задание 1 
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

// задание 2
// let elem = document.querySelector('#elem');
// let class = elem.getAttribute('class');
// console.log(class);

// задание 3 
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');

// задание 4 
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'valid');

// задание 5
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

// задание 6
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// урок 263

// задание 1 
// let elem = document.querySelector('#elem')
// console.log(elem.classList.length)

// задание 2
// let elem = document.querySelector('#elem')
// let classNames = elem.classList;
//  for(let className of classNames){
//     console.log(className )
//  }

// задание 3 
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');

// задание 4 
// let elem = document.querySelector('#elem');
// elem.classList.remove('www');
// elem.classList.remove('zzz');

// задание 5
// let elem = document.querySelector('#elem');
// let contains = elem.classList.contains('ggg');
// console.log(contains);

// урок 256

// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.add('colored'); 
// 	});
// }

// урок 271
// let elems = document.querySelectorAll('li')
// let sum =0;

// for(let elem of elems){
// if(
//     (+elem.textContent[0] + +elem.textContent[1] + +elem.textContent[2] + +elem.textContent[3]) == 6
// ){sum += +elem.textContent}
// }
// console.log(sum)

// ПОИСК ОШИБОК
// 1
// let elems = document.querySelectorAll('p');
// for(let elem of elems){
//     elem.textContent += '!';
// }

// 2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + 1;
// 	});
// }

// 3
let button = document.querySelector('button');
let elem   = document.querySelector('p');

button.addEventListener('click', function() {
	elem.innerHTML = '<b>elem.innerHTML</b>';
});

// 4


// 5


// 6


// 7


// 8


// 9


// 10


// 11


// 12


// 13


// 14


// 15

