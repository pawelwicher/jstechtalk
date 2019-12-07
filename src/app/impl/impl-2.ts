export function projectEulerNumberOne(n) {
  return Array(n).fill(0).map((_, i) => i).filter(x => x % 3 === 0 || x % 5 === 0).reduce((p, c) => p + c);
}
