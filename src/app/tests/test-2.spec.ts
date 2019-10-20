import { projectEulerNumberOne } from '../impl/impl-2';

describe('projectEulerNumberOne function tests', () => {

  it('projectEulerNumberOne called with arg 1000 should return a number greather than 0', () => {
    const actual = projectEulerNumberOne(1000);
    expect(actual).toBeGreaterThan(0);
  });

  it('projectEulerNumberOne called with arg 1000 should return 233168', () => {
    const actual = projectEulerNumberOne(1000);
    const expected = 233168;
    expect(actual).toEqual(expected);
  });

  it('projectEulerNumberOne callef with arg 10000 should return 5555', () => {
    const actual = projectEulerNumberOne(10000);
    const expected = 5555;
    expect(actual).toEqual(expected);
  });

});