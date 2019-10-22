import { getEmployees, Programmer, Employee, Tester } from '../impl/impl-4';

describe('getEmployees function tests', () => {

  it('getEmployees should return list with proper types', () => {
    const data = ['Bob;P', 'Alice;T', 'John', 'Jane;P', 'Mary'];
    const employees = getEmployees(data);
    const employeesCount = employees.filter(x => x instanceof Employee).length;
    const programmersCount = employees.filter(x => x instanceof Programmer).length;
    const testersCount = employees.filter(x => x instanceof Tester).length;

    expect(employeesCount).toEqual(5);
    expect(programmersCount).toEqual(2);
    expect(testersCount).toEqual(1);
  });

  it('getEmployees should return proper list of Employee objects', () => {
    const data = ['Bob;P', 'Alice;T', 'John', 'Jane;P', 'Mary'];
    const actual = getEmployees(data);
    const e1 = new Programmer();
    const e2 = new Tester();
    const e3 = new Employee();
    const e4 = new Programmer();
    const e5 = new Employee();
    const expected = [e1, e2, e3, e4, e5];
    expect(actual).toEqual(expected);
  });

});