export function getArrayStats(arr) {
  const result = {
    success: false,
    min: 0,
    max: 0,
    sum: 0,
    positiveCount: 0
  };

  if (arr && arr.length > 0) {
    arr = arr.filter(x => x && !isNaN(x) && typeof x === 'number');
    result.success = true;
    result.min = Math.min(...arr);
    result.max = Math.max(...arr);
    result.sum = arr.reduce((p, c) => p + c);
    result.positiveCount = arr.filter(x => x > 0).length;
  }

  return result;
}
