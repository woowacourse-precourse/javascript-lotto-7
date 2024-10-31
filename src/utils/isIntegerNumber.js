import applyToValueOrArray from './applyToValueOrArray.js';

export default function isIntegerNumber(value) {
  return applyToValueOrArray(value, (v) => !Number.isInteger(+v) || Number.isNaN(+v));
}
