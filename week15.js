//Задание 1
// Выведите числа от 1 до 10 в консоль
/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}*/

/*let i = 0;
while (i++ < 10) {
 console.log(i);
}*/


//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
/*for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}*/


//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
/*for (i = 10; i > 0; i--) {
  console.log(i);
}*/


//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
/*for (let i = 1; i <= 10; i++) {
  let number = 5;
  let result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}*/


//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
/*let n = 0;
let i = 1;
for (i = 1; i <= 100; i++) {
  n = n + i;
}
console.log(n);*/


//Задание 6
// Выведите все элементы массива в консоль используя цикл for
/*const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}*/


//Задание 7
// Выведите сумму всех элементов массива используя цикл for
/*const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
sum = sum + numbers[i];
}
console.log(sum);*/


//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
/*let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + ' - прекрасное животное';
}
console.log(animals);*/


//Задание 9
// Выведите символы в строке в консоль
/*const str = 'Hello';
for (let symbol of str) {
  console.log(symbol);
}*/


//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
/*const array = [1, 2, 3, 4, 5];
for (let number of array) {
  console.log (number);
}*/


//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
/*const strings = ['Hello, world!', 'How are you?'];
strings.forEach(str=> {
  let words = str.split(' ');
  words.forEach(word=> {
    console.log(word);
  });
});*/


//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
/*const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers) {
sum = sum + number;
}
console.log(sum);*/


//Задание 13
// Выведите длину каждого слова из массива строк в консоль
/*const list = ['apple', 'banana', 'cherry'];
list.forEach (function(item) {
  console.log(item.length);
})*/


//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
/*const words = ['apple', 'banana', 'cherry'];
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let upperWord = word.toUpperCase();
  words[i] = upperWord;
}
console.log(words);*/

/*const words = ['apple', 'banana', 'cherry'];
words.forEach((item, index) => {
words[index] = item.toUpperCase(); 
});
console.log(words);*/


//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
/*const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let letter of greeting) {
  if (vowels.includes(letter)) {
    vowelCount++;
  }
}
console.log(vowelCount);*/


//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
/*let words = ['Hello', 'world', '!'];
let string = words.join(' ');
console.log(string);*/


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
/*let i = 0;
while (++i <= 10) {
  console.log(i);
}*/


//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
/*let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}*/


//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
/*const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let i = 0;
while ( i < allNumbers.length ) {
if(allNumbers[i] <= 0) {
  console.log(false);
  break;
}
 i++;
} 
if(i === allNumbers.length ) {
  console.log(allPositive);
}*/


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
/*let random = [2, 4, 6, -3, 8, 10];
let index = 0;
do {
    console.log(random[index]);
    index++;
} while (random[index] >= 0);*/


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
/*let i = 1
do {
  if (i % 3 !== 0)
  console.log(i);
  i++;
} while (i <= 100);*/


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
/*let sum = 0;
while (sum < 100) {
  let number = parseInt(prompt('Введите число:'));
  if(isNaN(number)) {
    alert('Вы ввели некоректное число. Попробуйте ещё раз.');
    continue;
  }
  sum = sum + number;
}
console.log('Сумма чисел боьше 100.');*/


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
/*function changeColor() {
  let h4elements = document.getElementsByTagName('h4');
  for (let i = 0; i < h4elements.length; i++) {
    h4elements[i].style.backgroundColor = 'blue';
  }
}
changeColor();*/


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
/*let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  } 
console.log(randomString);*/