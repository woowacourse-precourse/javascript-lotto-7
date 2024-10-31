import applyToValueOrArray from './applyToValueOrArray.js';

export default function isNegativeNumber(value) {
  return applyToValueOrArray(value, (v) => +v < 0);
}
