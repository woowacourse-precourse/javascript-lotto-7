import applyToValueOrArray from './applyToValueOrArray.js';

export default function isInvalidNumber(value) {
  return applyToValueOrArray(value, (v) => Number.isNaN(+v));
}
