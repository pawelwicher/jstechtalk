import { getArrayStats } from '../impl/impl-3';

describe('getArrayStats function tests', () => {

  it('getArrayStats called with arg undefined should return an object with success flag set to false', () => {
    const actual = getArrayStats(undefined);
    const expected = {
      success: false,
      min: 0,
      max: 0,
      sum: 0,
      positiveCount: 0
    };
    expect(actual).toEqual(expected);
  });

  it('getArrayStats called with arg null should return an object with success flag set to false', () => {
    const actual = getArrayStats(null);
    const expected = {
      success: false,
      min: 0,
      max: 0,
      sum: 0,
      positiveCount: 0
    };
    expect(actual).toEqual(expected);
  });

  it('getArrayStats called with empty array should return an object with success flag set to false', () => {
    const actual = getArrayStats([]);
    const expected = {
      success: false,
      min: 0,
      max: 0,
      sum: 0,
      positiveCount: 0
    };
    expect(actual).toEqual(expected);
  });

  it('getArrayStats called with array that holds proper positive values and zero should return an object with success flag set to true and correct stats', () => {
    const actual = getArrayStats([0, 2, 1]);
    const expected = {
      success: true,
      min: 0,
      max: 2,
      sum: 3,
      positiveCount: 2
    };
    expect(actual).toEqual(expected);
  });

  it('getArrayStats called with array that holds proper values should return an object with success flag set to true and correct stats', () => {
    const actual = getArrayStats([1, -5, 4, 7, 5, 6, -2, -1, 2, 3, 7, 9, 1, 1, 4, 3]);
    const expected = {
      success: true,
      min: -5,
      max: 9,
      sum: 45,
      positiveCount: 13
    };
    expect(actual).toEqual(expected);
  });

  it('getArrayStats called with array that holds not only numbers should filter out wrong values and return an object with success flag set to true', () => {
    const actual = getArrayStats([1, 2, null, 3, 4, 7, 5,'4',5, {}, undefined, 6, -2, [], -1, 2, 3, [1,2], 7, 9, true, NaN]);
    const expected = {
      success: true,
      min: -2,
      max: 9,
      sum: 51,
      positiveCount: 12
    };
    expect(actual).toEqual(expected);
  });

});
