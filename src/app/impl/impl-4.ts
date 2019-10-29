export class Employee {
  name;
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, i am ${this.name}.`
  }
}

export class Programmer extends Employee {
  constructor(name) {
    super(name);
  }

  greet() {
    return `${super.greet()} I work as a programmer.`
  }
}

export function getEmployees(arr) {
  return arr.map(parseEntry);
}

function parseEntry(entry) {
  const s = entry.split(';');

  if (s.length === 2 && s[0] === 'T') {
    return new Programmer(s[0]);
  }

  if (s.length === 1) {
    return new Employee(s[0]); 
  }

  return null;
}

