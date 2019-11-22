import { getEmployees, Programmer, Employee } from '../impl/impl-4';

describe('getEmployees function tests', () => {

  it('getEmployees should return list with proper types', () => {
    const data = ['Bob;P', 'Alice;P', 'John', 'Jane;P', 'Mary'];
    const employees = getEmployees(data);
    const employeesCount = employees.filter(x => x instanceof Employee).length;
    const programmersCount = employees.filter(x => x instanceof Programmer).length;

    expect(employeesCount).toEqual(5);
    expect(programmersCount).toEqual(3);
  });

  it('getEmployees should return proper list of Employee objects', () => {
    const data = ['Bob;P', 'Alice;P', 'John', 'Jane;P', 'Mary'];
    const actual = getEmployees(data).map(emp => emp.greet());
    const expected = [
      'Hi, i am Bob. I work as a programmer.',
      'Hi, i am Alice. I work as a programmer.',
      'Hi, i am John.',
      'Hi, i am Jane. I work as a programmer.',
      'Hi, i am Mary.',
    ];
    expect(actual).toEqual(expected);
  });

});
