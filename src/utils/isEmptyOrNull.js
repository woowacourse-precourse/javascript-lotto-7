import applyToValueOrArray from './applyToValueOrArray.js';

export default function isEmptyOrNull(value) {
  return applyToValueOrArray(value, (v) => {
    if (typeof v === 'string') {
      return v.trim() === '' || v == null;
    }
    return v == null || !v;
  });
}
