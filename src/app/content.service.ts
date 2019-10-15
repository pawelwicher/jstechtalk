import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {

  public id: number = 0;

  /*




paradygmaty, kompilacja

cwiczenie
function greet(name = null) {
	return `Hello ${name || 'World'}`;
}

2. Podstawy składni
- cechy jezyka
- deklaracje (w tym funkcje)
- przypisania
- warunki
- petle

3. Typy wbudowane
- function
- object
- array (przykladowe funkcje z array)
- number
- string


4. Składnia ES6, składnia zaawansowana, idiomy
- ES6 http://es6-features.org/#Constants

- funkcje sztalkowe
- moduly
- spread operator
- klasy
- variadic args

- porownywanie wartosci, Object.is (NaN, +0, -0), niejajwne konwersje przy ==

5. Style programowania - JS jako język obiektowy i jako język funkcyjny
- rambda, underscore

6. TypeScript - co z tego mamy?
7. Zadanie końcowe, pytania, dyskusja (do wyboru)

Weźcie komputery - spotkanie ma charakter warsztatowy, w związku z tym, po każdym segmencie, do wykonania będzie proste ćwiczenie.

Slajdy będą udostępnione (github) jako aplikacja Angular i na niej będziemy pracować.



----------------------------------

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. This concept is known as hoisting; variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement. However, variables that are hoisted return a value of undefined

In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
  */

  public data = [
{ 
title: 'Javascript',
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
title: 'Dlaczego rozmawiamy o Javascript ?',
content: `
- bo jest popularny

- bo go używamy

- bo czasami używamy go źle

- bo jest to technologia, którą warto znać
`
},

{ 
title: 'Popularność języka',
content: `
- https://www.tiobe.com/tiobe-index//?201201

- http://pypl.github.io/PYPL.html

- https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js

- https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages
`
},

{ 
  title: 'Javascript a ECMAScript',
  content: `
- https://en.wikipedia.org/wiki/JavaScript

- https://en.wikipedia.org/wiki/ECMAScript

- https://kangax.github.io/compat-table/es5/
`
},

{ 
  title: 'Cechy języka',
  content: `
- wieloparadygmatowy (imperatywny, obiektowy, funkcyjny)

- dynamicznie typowany (tak samo jak Python)

- kompilowany (JIT, V8 engine)
`
},


]
}
