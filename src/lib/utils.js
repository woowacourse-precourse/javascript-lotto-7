/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isNotEmptyString(value) {
  return value !== '';
}

/**
 *
 * @param {number} value
 * @param {number} number
 * @returns {boolean}
 */
export function isDivisibleByNumber(value, number) {
  return value % number === 0;
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isNumericString(value) {
  return !Number.isNaN(Number(value));
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isPositiveNumericString(value) {
  return Number(value) > 0;
}

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isIntegerNumericString(value) {
  return Number(value) === Math.trunc(Number(value));
}
