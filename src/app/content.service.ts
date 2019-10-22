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
var a = 1; // zasięg funkcji lub globalny
let b = 2; // zasięg bloku
const c = 3;
var f = 123, g = 567;
let p;
let q;
let [x,y] = [1,2];

console.log(x); // x jest hoistowane i inicjowane wartością undefined
var x = 3;
// undefined

console.log(x); // x jest hoistowane i znajduje sie w temporal dead zone
let x = 3;
// ReferenceError
`
},

{
  title: '2.4 Funkcje',
  content: `
- funkcje są wartościami

- funkcje mogą przyjmować funkcje jako parametry, mogą też je zwracać

- paradygmat obiektowy w JS opiera się na funkcjach (więcej w cz. 3)
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

// iteruje po obiektach implementujących protokół iteracji (posiadajcych properte [Symbol.iterator])
for (const val of arr) {
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
https://www.ecma-international.org/ecma-262/10.0/index.html#sec-abstract-equality-comparison
https://www.ecma-international.org/ecma-262/10.0/index.html#sec-abstract-relational-comparison
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

- instanceof (cz. 3)

- new (konstruktory, oop - cz. 3)
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
- typy proste (porównywane i przekazywane przez wartość), typ sprawdamy operatorem typeof

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

let x = Number(1);

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

x = 255
x.toString(16) // "ff"

- przydatne funkcje i property: isNaN, toString(), parseInt,
  Number.isFinite, Number.isInteger, Number.prototype.toFixed,
  Number.MAX_VALUE, Number.MIN_VALUE

- inne funkcje liczbowe - globalny obiekt Math (Math.floor, Math.ceil, Math.round, Math.trunc

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

s = \`hello world\`;

s = \`x = $\{1+1}\`; // 'x = 2'

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

tag \`1 + 2 = $\{1+2}, 5 * 3 = $\{5*3}\`
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

- Symbol.toPrimitive, obsługa konwersji na własnych obiektach

obj[Symbol.toPrimitive] = function(hint) {
  // must return a primitive value
  // hint = one of "string", "number", "default"
};
`
},

{
  title: '3.8 Konwersje typów prostych',
  content: `
- wyczerpujący opis tematu znajdziemy w specyfikacji języka https://www.ecma-international.org/ecma-262/10.0/index.html

- operator + https://www.ecma-international.org/ecma-262/10.0/index.html#sec-addition-operator-plus
2 + '2' // '22'
2 - '2' // 0
'1' + true // '1true'
'1' - true // 0

- równość nieścisła (loose equality) == https://www.ecma-international.org/ecma-262/10.0/index.html#sec-abstract-equality-comparison
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
let id = 123;
obj = {
  id, // shorthand
  name: 'Bob',
  age: 35,
  get fullName() { // getter
    return 'Mr. ' + this.name;
  },
  ['data']: [1,2,3],
  sayHi: function() {
    return 'Hi, i am ' + this.name;
  },
  sayGoodbye() { // shorthand
    return 'Goodbye';
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

- przydatne property: Function.name, Function.length
`
},

{
  title: '3.12 Function - operator new',
  content: `
- funkcja wywołana z operatorem new staje się konstruktorem obiektu 

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

let user = new User('Bob');
`
},

{
  title: '3.13 Function - dziedziczenie',
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

let fido = new Dog('Fido', 'Lab');

fido.getName();  // 'Fido'
fido.getHasHair(); // true
fido.getBreed(); // 'Lab'

fido instanceof Dog // true
fido instanceof Mammal // true
fido instanceof Animal // true
fido instanceof Object // true
`
},

{
  title: '3.14 Array, Set, Map',
  content: `
- typy reprezentujące kolekcje (typy iterowalne)

- Array (tablica, kolekcja dowolnych wartości, indeksowana)

let a = []; // pusta tablica
a = [1,2,5];
a[0] // 1
a[a.length - 1] // 5
a.length // 3

new Array(1,2) // 2 elementy
new Array(100) // 0 elemtów, długość 100

// dodwanie elementów
a[10]=100;
a.push(101);

[1,2,3].concat([44, 55]) // [1, 2, 3, 44, 55]

// operacje na tablicach
a = new Array(5) // [ , , , , ,]
a.fill(42) // [42, 42, 42, 42, 42]

[1,2,3].map(x => x + 1) // [2, 3, 4]
[1,2,3].filter(x => x > 1) // [2, 3]
[1,2,3].join(', ') // "1, 2, 3"
[1,2,3].slice(-1); // [3]
[1,2,3].indexOf(5) // -1

typeof [1,2,3] // "object"
Array.isArray([1,2,3]) // true
Array.isArray({}) // false

// holes
a = [1, , 3]; // sparse array
a.length // 3
a.forEach(x => console.log(x)) // prints: 1 3
https://exploringjs.com/impatient-js/ch_arrays.html#more-array-features-advanced

// iterowanie po elementach
for (const element of a) {
  console.log(element);
}

// iterowanie po indeksach i elementach
for (const [index, element] of a.entries())
  console.log(element);
}

[1,2,3].forEach(x => console.log(x));

// przydatne funkcje - Array.from, Array.of concat, push, pop, find, findIndex,
// indexOf, includes, map, filter, reduce, fill, join, slice, sort, reverse

- TypedArray
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

- Set (zbiór elementów bez powtórzeń)
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

set.size // 3


- Map (podobne do obiektów ale kluczami dowolne typy, dla obiektów string i symbol)
let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

map.get(1); // 'num1'
map.get('1'); // 'str1'
map.size // 3
`
},

{
  title: '3.15 RegExp',
  content: `
- wyrażenia regularne

- tworzymy poprzez konstruktor lub literał

/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])

let r = new RegExp('[a-z]');
r = /[a-z]/;
r.test('abc') // true
r.test('ABC') // false
r.test('123') // false
/[a-z]/i.test('ABC') // true

- metody typu string korzystające z wyrażeń regularnych
String.prototype.match()
String.prototype.search()
String.prototype.replace()

'javascript'.replace(/[j,a,v]/g, function(x) { return x.toUpperCase(); }) // "JAVAscript"

'John Smith'.replace(/(\w+)\s(\w+)/, '$2 $1'); // "Smith John"
`
},

{
  title: '3.16 Date',
  content: `
- obsługa dat w JS

- data i czas przechowywany w UTC

let date = new Date(1995, 11, 17);
date.toISOString() // "1995-12-16T23:00:00.000Z"
date.getTimezoneOffset() // -60

new Date('1995-11-17 00:00:00').toISOString() // "1995-11-16T23:00:00.000Z"
new Date('1995-11-17 00:00:00Z').toISOString() // "1995-11-17T00:00:00.000Z"

https://exploringjs.com/impatient-js/ch_dates.html#date-libraries
`
},

{
  title: '3.17 Error',
  content: `
- obiekt błędu

- możemy zbudować własne typy błędów

- JS posiada wiele wbudowanych obiektów błędów, np. RangeError, ReferenceError, SyntaxError

try {
  throw new Error('Whoops!');
} catch (e) {
  console.error(e.name + ': ' + e.message);
}
`
},

{
  title: '3.18 Ćwiczenie',
  content: `
- funkcja getArrayStats

- funkcja zwraca obiekt, z wartościami min, max, sumą oraz liczbą dodatnich elementów w tablicy

- implementacja: impl-3.ts

- testy: test-3.spec.ts
`
},

{
  title: '4.1 ES6, składnia zaawansowana',
  content: `
- niemodyfikowalne zmienne (const)

- zasięg blokowy (let, const a takźe function)

- funkcje strzałkowe

- domyślne wartości parametów funkcji

- zmienna ilość parametrów (rest parameters)

- spread operator

- stringi interpolowane

- komputowane property obiektów

- przypisania dekonstrukcyjne

- moduły

- klasy

- symbole

- iteratory, generatory, pętla for of

- nowe typy danych: Map, Set, TyppedArray

- nowe operacje dla istniejących typów

- pełna lista ficzerów http://es6-features.org/#Constants
`
},

{
  title: '4.2 funkcje strzałkowe',
  content: `
let evens = [2, 4, 6];

let odds = evens.map(v => v + 1);

let pairs = evens.map(v => ({ even: v, odd: v + 1 }));

let nums = evens.map((v, i) => v + i);

nums.forEach(v => {
  if (v % 5 === 0) {
    console.log(v);
  }
})

[ 1, 3, 4, 2 ].find(x => x > 3) // 4

[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
`
},

{
  title: '4.3 domyślne wartości parametów funkcji',
  content: `
function f(x, y = 7, z = 42) {
  return x + y + z
}
f(1) // 50
`
},

{
  title: '4.4 zmienna ilość parametrów (rest parameters)',
  content: `
function f(x, y, ...a) {
  return (x + y) * a.length
}

f(1, 2, "hello", true, 7) // 9
f(1, 2, ...[1,2,3,4,5]) // 15
`
},

{
  title: '4.5 spread operator',
  content: `
// For function calls:
// myFunction(...iterableObj);

// For array literals or strings:
// [...iterableObj, '4', 'five', 6];

// For object literals (new in ECMAScript 2018):
// let objClone = { ...obj };

let params = ["hello", true, 7]
let arr = [ 1, 2, ...params] // [1, 2, "hello", true, 7]

let a = [1,2,3];
a = [0, ...a]; // dodanie na poczatek tablicy
a = [...a, 42]; // na koniec

const DEFAULTS = { foo: 'a', bar: 'b' };
const providedData = { foo: 1 };
const allData = {...DEFAULTS, ...providedData}; // { foo: 1, bar: 'b' }
`
},

{
  title: '4.6 stringi interpolowane',
  content: `
let customer = { name: "Foo" }
let card = { amount: 7, product: "Bar", unitprice: 42 }
let message = \`Hello $\{customer.name},
want to buy $\{card.amount} $\{card.product} for
a total of $\{card.amount * card.unitprice} bucks?$\`
`
},

{
  title: '4.7 komputowane property obiektów',
  content: `
let obj = {
  foo: "bar",
  [ "b" + "a" + "r" ]: 42
};
`
},

{
  title: '4.8 przypisania dekonstrukcyjne',
  content: `
// tablice

let arr = ['Bob', 'Smith'];
let [firstName, surname] = arr;

['Bob', '123', 'Smith'];
[firstName, , surname] = arr;

let user = {};
[user.name, user.surname] = 'Bob Smith'.split(' ');

let [a, b, c] = "abc"; // ["a", "b", "c"]

let [one, two, three] = new Set([1, 2, 3]);

let arr = [1,2,3,4,5];
let [head, ...tail] = arr;
head // 1
tail // [2, 3, 4, 5]

let [x = 0, y = 0] = [1];


// obiekty
let options = {
  title: 'Menu',
  width: 100,
  height: 200
};
let {title, width, height} = options;

let {title, ...rest} = options;
`
},

{
  title: '4.9 moduły',
  content: `
// wcześniejsze rozwiązania
// AMD – one of the most ancient module systems, initially implemented by the library require.js.
// CommonJS – the module system created for Node.js server.


// sayHi.js
export function sayHi(user) {
  alert(\`Hello, $\{user}!\`);
}

// main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
`
},

{
  title: '4.10 klasy',
  content: `
class Person {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return \`Person named $\{this.name}\`;
  }
  static logNames(persons) {
    for (const person of persons) {
      console.log(person.name);
    }
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
  describe() {
    return super.describe() +
      \`($\{this.title})\`;
  }
}
  
const jane = new Employee('Jane', 'CTO');
jane instanceof Employee // true
jane instanceof Person // true
`
},

{
  title: '4.11 Ćwiczenie',
  content: `
- funkcja getEmployees

- funkcja ma zwrócić listę pracowników na podstwie przekazanych surowych danych
- należy zbudować prostą hierarchię klas
- dane wejściowe: ['Bob;P', 'Alice;T', 'John']
- dwa typy: P - Programmer, T - Tester, lub brak (zwykły pracownik)

- implementacja: impl-4.ts

- testy: test-4.spec.ts
`
},

{
  title: '5.1 Style programowania',
  content: `
- JS jako język imperatywny

- JS jako język obiektowy

- JS jako język funkcyjny
`
},

{
  title: '5.2 Javascript a TypeScript',
  content: `
- Javascript a TypeScript (raz jeszcze)

http://www.typescriptlang.org/docs/handbook/advanced-types.html
http://www.typescriptlang.org/play/index.html
`
},

{
  title: '5.3 Podsumowanie, dyskusja, pytania, czyli koniec',
  content: `




                                                console.log('Dziękuję za uwagę');
`
},

];
}
