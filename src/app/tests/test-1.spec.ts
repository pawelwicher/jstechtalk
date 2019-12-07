import { greet } from '../impl/impl-1';

describe('greet function tests', () => {

  it('greet should return Hello World', () => {
    const actual = greet();
    const expected = 'Hello World';
    expect(actual).toEqual(expected);
  });

  it('greet should return Hello Bob', () => {
    const actual = greet('Bob');
    const expected = 'Hello Bob';
    expect(actual).toEqual(expected);
  });

});