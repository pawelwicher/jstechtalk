import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {

  public id = 0;

  public data = [
{
title: '1.1 Javascript',
content: `
function greet() {
  return 'Hello World';
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function sum(...a) {
  if (a && a.length) {
    return a.reduce((x, acc) => acc + x);
  }
  return 0;
}
`
},

{
title: '1.2 Dlaczego rozmawiamy o Javascript ?',
content: `
- bo jest popularny

- bo go używamy

- bo czasami używamy go źle

- bo jest to technologia, którą warto znać
`
},

{
title: '1.3 Popularność języka',
content: `
- https://www.tiobe.com/tiobe-index//?201201

- http://pypl.github.io/PYPL.html

- https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js

- https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages

- https://www.espruino.com
`
},

{
  title: '1.4 Javascript a ECMAScript',
  content: `
- https://en.wikipedia.org/wiki/JavaScript

- https://en.wikipedia.org/wiki/ECMAScript

- https://kangax.github.io/compat-table/es5/
`
},

{
  title: '1.5 Cechy języka',
  content: `
- wieloparadygmatowy (imperatywny, obiektowy, funkcyjny)

- dynamicznie typowany (tak samo jak Python)

- kompilowany (JIT, V8 engine)

- garbage collector
`
},

{
  title: '1.6 Ćwiczenie',
  content: `
- funkcja 'greet'

- implementacja: impl-1.ts

- testy: test-1.spec.ts
`
},

{
  title: '2.1 Podstawy składni',
  content: `
- struktura kodu w JS

- deklaracje

- funkcje

- instrukcje sterujące

- operatory
`
},

{
  title: '2.2 Struktura kodu',
  content: `
- składnia wzorowana na C i Java

- instrukcje kończymy ';' (lub nową linią - ASI)

- wielkość znaków ma znaczenie

- komentarze: // i /* */

- instrukcje (np. if)

- wyrażenia (np. 1 + 1, operator ?)
`
},

{
  title: '2.2.1 Struktura kodu',
  content: `
  // zmienna x
  var x = 5;

  /*
    funkcja foo
  */
  function foo(a) {
    if (a > x) {
      return a - x;
    } else {
      return x - a;
    }
  }
`
},

{
  title: '2.3 deklaracje',
  content: `
- deklaracje zmiennych: var, let, const (hoisting)

- deklaracje funkcji
`
},

{
  title: '2.3.1 deklaracje zmiennych',
  content: `
var a = 1;
let b = 2;
const c = 3;
var f = 123, g = 567;
let p;
let q;

// undefined
// console.log(x);
// let x = 3; // zasięg bloku

// ReferenceError
// console.log(x);
// var x = 3; // zasięg funkcji lub globalny
`
},

{
  title: '2.4 Funkcje',
  content: `
- funkcje są wartościami

- funkcje mogą przyjmować funkcje jako parametry, mogą też je zwracać

- paradygmat obiektowy w JS opiera się na funkcjach (więcej w cz. 5)
`
},

{
  title: '2.4.1 Deklaracje funkcji',
  content: `
// instrukcja
function hello() {
  return 'hello';
}

// instrukcja
function hello(name) {
  return 'hello ' + name;
}

// instrukcja
function hello(name = 'world') {
  return 'hello ' + name;
}

// wyrażenie
const hello = function(name = 'world') {
  return 'hello ' + name;
};

// wyrażenie
const f = function hello(name = 'world') {
  // hello jest tu dostępne
  return 'hello ' + name;
};
`
},

{
  title: '2.4.2 Funkcje jako wartości',
  content: `

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function oper(o, addFn, subtractFn) {
  if (o === '+') {
    return addFn;
  } else if (o === '-') {
    return subtractFn;
  }
  // return undefined;
}

result = oper('+', add, subtract)(1, 2); // 3
`
},

{
  title: '2.5 Instrukcje sterujące',
  content: `
- if

- switch

- try, throw

- for, break, continue

- while, do-while

- for-in

- for-of loop (ES6)
`
},

{
  title: '2.5.1 if',
  content: `
let x = 1;

if (x === 1) {
  console.log('x=1');
}

if (x === 1) {
  console.log('x === 1');
} else {
  console.log('x !== 1');
}

if (x === 1) {
  console.log('x === 1');
} else if (x === 2) {
  console.log('x === 2');
} else {
  console.log('x !== 1');
}

const s = '';
if (s) {
  console.log('hello')
}
`
},

{
  title: '2.5.2 switch',
  content: `
function greet(lang) {
  let s;
  switch (lang) {
    case 'pl':
    s = 'czesc';
    break;

    case 'fr':
      s = 'bonjour';
      break;

    default:
      s = 'hello';
      break;
  }
  return s;
}

function isWeekDay(name) {
  switch (name) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return true;
    case 'Saturday':
    case 'Sunday':
      return false;
    default:
      throw new Error('Illegal value: '+name);
  }
}
`
},

{
  title: '2.5.3 try, throw',
  content: `
try {
  throw new Error('ups');
} catch (error) {
  console.log(error.message);
} finally { // klauzula opcjonalna
  console.log('finally');
}
`
},

{
  title: '2.5.3 pętla for, break, continue',
  content: `
for (let i = 0; i < 10; i++) {
  console.log(i)
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i)
}

for (;;) {
  if (i++ > 5) {
    break;
  }
  console.log(i)
}
`
},

{
  title: '2.5.4 pętla while',
  content: `
let x = 0;
while (x < 10) {
  console.log(x);
  x++;
}
`
},

{
  title: '2.5.5 pętla for in',
  content: `
let obj = {
  foo: 1,
  bar: 2
};

// nie zalecane, pokaże także property z klasy bazowej (sprawdzamy za pomocą hasOwnProperty)
for (const prop in obj) {
  console.log(prop);
}
`
},

{
  title: '2.5.6 pętla for of',
  content: `
const arr = ['hello', 'world'];

for (const val of arr) { // iteruje po obiektach implementujących protokół iteracji
  console.log(val);
}
`
},


{
  title: '2.6 Operatory',
  content: `
- arytmetyczne

- logiczne

- przypisania

- porównania

- bitowe

- ogólne
`
},

{
  title: '2.6.1 Operatory arytmetyczne',
  content: `
- operatory arytmetyczne niekiedy wymuszają konwersje typów - o tym w cz.3

- działają z innymi typami (+'1' // 1)

- unarne: +, -

- binarne: +, -, /, *, %, ** (ES6)
`
},

{
  title: '2.6.2 Operatory logiczne',
  content: `
true && false

false || true

!true

- operatory logiczne działają także z innymi typami
1 && 2
0 || 1
`
},

{
  title: '2.6.3 Operatory przypisania',
  content: `
- podobnie jak w innych językach z rodziny C, przypisanie zwraca wartość (jest wyrażeniem)

x = 1

x += 1 (to samo dla -, /, *, % i operatorów bitowych itd.)

x++;

++x;

// Destructuring assignment
let [a,b] = [1,2]

let { o } = { o: 123, foo: 42 };

let { foo: x } = { o: 123, foo: 42 };
`
},

{
  title: '2.6.4 Operatory porównania',
  content: `
- wartości truthy i falsy

- zwracają zawsze true albo false (inaczej niż operatory logiczne)

- falsy: undefined, null, 0, false, NaN, ''

- operatory: ==, ===, !=, !==, >, <, >=, <=

- The Abstract Equality Comparison Algorithm
http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
`
},

{
  title: '2.6.5 Operatory bitowe',
  content: `
AND ( & )

OR ( | )

XOR ( ^ )

NOT ( ~ )

LEFT SHIFT ( << )

RIGHT SHIFT ( >> )

ZERO-FILL RIGHT SHIFT ( >>> )
`
},

{
  title: '2.6.6 Operatory bitowe',
  content: `
var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000

var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 => 1011

if (flags & FLAG_C) { // 0101 & 0100 => 0100 => true
    // do stuff
}
`
},

{
  title: '2.7 Operatory ogólne',
  content: `
- operator wywołania funkcji '()'

- operator dostępu do property '.'

- in
const obj = { foo: 1 };
if ('foo' in obj) {
  // do stuff
}

- ciekawostka: operator ','
1, 2 // returns 2

- ?

- typeof (cz. 3)

- instanceof (cz. 4)
`
},


{
  title: '2.8 Ćwiczenie',
  content: `
  - funkcja 'projectEulerNumberOne'

  - funkcja ma zwrócic sumę wszystkich liczb poniżej 1000 podzielnych przez 3 lub 5

  - to samo co powyżej dla liczb poniżej 10000

  - implementacja: impl-2.ts
  
  - testy: test-2.spec.ts
`
},

{
  title: '3.1 Typy wbudowane',
  content: `
- typy proste (porównywane i przekazywane przez wartość)

- obiekty (porównywane i przekazywane przez referencje)

https://exploringjs.com/impatient-js/ch_values.html#whats-a-type
`
},

{
  title: '3.2 Typy proste',
  content: `
- undefined i null

- number i bigint

- string

- boolean

- symbol
`
},

{
  title: '3.3 undefined i null',
  content: `
- undefined, typ posiadający jedną wartość: undefined

- null, typ posiadający jedną wartość: null

- oba falsy
`
},

{
  title: '3.4 number',
  content: `
- reprezentuje liczby zmiennoprzecinkowe (doubles - 64 bity)

- JS udostępnia obiekt Number, który jest nakładką
  na typ liczbowy (analogicznie Boolean i String)

- typ liczbowy tworzymy za pomocą funkcji Number lub literałów liczbowych

let a = Number(1);

// Binary (base 2)
x = 0b11;

// Octal (base 8)
x = 0o10;

// Decimal (base 10):
x = 35;

// Hexadecimal (base 16)
x = 0xE7;

x = 3e2; // 300

x = 3e-2; // 0.3

- wartości NaN i Infinity
Math.sqrt(-1) //NaN
1 / 0 // Infinity

- przydatne funkcje: isNaN, toString(), parseInt, Number.isFinite, Number.isInteger, Number.prototype.toFixed

let x = 255
x.toString(16) // "ff"

- inne funkcje liczbowe - globalny obiekt Math (Math.floor, Math.ceil, Math.round, Math.trunc)

- BigInt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
`
},

{
  title: '3.5 string',
  content: `
- typ reprezentujący łańcuch znaków (w JS nie ma typu char)

let s = "Hello World";
s = 'Hello World'
s = 'Hello "World"'
s = 'Hello \'World\''

let longString = "This is a very long string which needs \\
to wrap across multiple lines because \\
otherwise my code is unreadable.";

s = ${'`'}hello world${'`'};

s = ${'`'}x = $\{1+1}${'`'}; // 'x = 2'

- konkatenacja
s = 'hello' + ' '
s += 'world';

- string jako łańcuch znaków
s = 'hello'
s.length; // 5
s[0]; // 'h'

- przydatne funkcje: toLowerCase, toUpperCase, trim, startsWith, endsWith,
    match, slice, split, replace, indexOf, substring,
    substr (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

- ciekawostka tagged template strings

function tag(strings, ...values) {
  for(const s of strings) {
      console.log(s);
  }
  for(const v of values) {
      console.log(v);
  }
}

tag ${'`'}1 + 2 = $\{1+2}, 5 * 3 = $\{5*3}${'`'}
1 + 2 = 
, 5 * 3 = 
 
3
15
`
},

{
  title: '3.6 boolean',
  content: `
- wartości true i false

- kownersja innych typów do boolean
Boolean(1) // true
!!1 // true
!!0 // false
!!null // false
`
},

{
  title: '3.7 symbol',
  content: `
- unikalne identyfikatory

- symbole mogą być kluczami propert w obiekcie

- symbole są przechowywane w global symbol registry

let id = Symbol("id");
let id = Symbol.for("id");

- symbole systemowe
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
`
},

{
  title: '3.8 Konwersje typów prostych',
  content: `
- wyczerpujący opis temtu znajdziemy w specyfikacji języka http://www.ecma-international.org/ecma-262/5.1/

- operator + http://www.ecma-international.org/ecma-262/5.1/#sec-11.6.1
2 + '2' // '22'
2 - '2' // 0
'1' + true // '1true'
'1' - true // 0

- równość nieścisła (loose equality)
'1' == 1 // true
[1,2,3] =='1,2,3' // true
0 == false // true
null == undefined // true

- należy unikać niejawnych konwersji i stosować operator === (strict equality)
if (x == 123) {
  // x is either 123 or '123'
}

if (x === 123 || x === '123') ···
if (Number(x) === 123) ···
`
},

{
  title: '3.9 Obiekty',
  content: `
- Object

- Function

- Array, Set, Map

- RegExp

- Date

- Error
`
},

{
  title: '3.10 Object',
  content: `
- wszystkie obiekty w JS wywodzą się z typu Object

- literał obiektu

let obj = {}; // lub Object.create(null)
obj = {
  name: 'Bob',
  age: 35,
  sayHi() {
    return 'Hi, i am ' + this.name;
  }
};

obj.name = 'John'; // lub obj['name'] = 'John';

obj.sayHi();

- przydatne funkcje: Object.keys, Object.values, Object.entries, Object.is (inne porównywanie)
`
},

{
  title: '3.11 Function',
  content: `
- funkcje są najbardziej ekspresywnym elementem języka (oop, moduły, iife)

- programowanie obiektowe w JS jest oparte o funkcje

function Person(name) {
  this.name = name;
}

let p = new Person('Bob');
`
},

{
  title: '3.12 Function - dziedziczenie',
  content: `
function Animal(name) {
  this.name = name;
}

// Example method on the Animal object
Animal.prototype.getName = function() {
    return this.name;
}

function Mammal(name, hasHair) {
    // Use the parent constructor and set the correct this
    Animal.call(this, name);

    this.hasHair = hasHair;
}

// Inherit the Animal prototype
Mammal.prototype = Object.create(Animal.prototype);

// Set the Mammal constructor to 'Mammal'
Mammal.prototype.constructor = Mammal;

Mammal.prototype.getHasHair = function() {
    return this.hasHair;
}

function Dog(name, breed) {
    // Use the parent constructor and set the correct this
    // Assume the dog has hair
    Mammal.call(this, name, true);

    this.breed = breed;
}

// Inherit the Mammal prototype
Dog.prototype = Object.create(Mammal.prototype);

// Set the Dog constructor to 'Dog'
Dog.prototype.constructor = Dog;

Dog.prototype.getBreed = function() {
    return this.breed;
}

var fido = new Dog('Fido', 'Lab');

fido.getName();  // 'Fido'
fido.getHasHair(); // true
fido.getBreed(); // 'Lab'
`
},


{
  title: '3.??? Error',
  content: `
- tworzy obiekt błędu

- możemy zbudować własne typy błędów

- JS posiada wiele wbudowanych obiektów błędów, np. RangeError, ReferenceError, SyntaxError

try {
  throw new Error('Whoops!');
} catch (e) {
  console.error(e.name + ': ' + e.message);
}
`
},


];
}



  /*



4. Składnia ES6, składnia zaawansowana
- ES6 http://es6-features.org/#Constants

- funkcje sztalkowe
- moduly
- spread operator
- klasy
- variadic args


5. Style programowania - JS jako język obiektowy i jako język funkcyjny
- rambda, underscore

6. TypeScript - co z tego mamy?
7. Zadanie końcowe, pytania, dyskusja (do wyboru)

-------------------------
triki

var j = [...new Set([1, 2, 3, 3])]
>> [1, 2, 3]


Ever need to filter falsy values (0, undefined, null, false, etc.) out of an array? You may not have known this trick:
myArray
    .map(item => {
        // ...
    })
    // Get rid of bad values
    .filter(Boolean);


Converting to boolean using !! operator


2) Converting to number using + operator
This magic is awesome! And it’s very simple to be done, but it only works with string numbers, otherwise it will return NaN(Not a Number). Have a look on this example:

function toNumber(strNumber) {
    return +strNumber;
}


7) Getting the last item in the array
The Array.prototype.slice(begin, end) has the power to cut arrays when you set the begin and end arguments. But if you don’t set the end argument, this function will automatically set the max value for the array. I think that few people know that this function can accept negative values, and if you set a negative number as begin argument you will get the last elements from the array:

var array = [1, 2, 3, 4, 5, 6];
console.log(array.slice(-1)); // [6]


let array = Array(5).fill('');
console.log(array); // outputs (5) ["", "", "", "", ""]


8. String Interpolation


Computed Property Names (ES6)
var fruit_var = 'fruit'
var eatables = {[fruit_var]: 'Apple', vegetable: 'Carrot'}

-------------------------






*/