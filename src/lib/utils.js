import { Random } from '@woowacourse/mission-utils';

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

/**
 *
 * @param {number} start
 * @param {number} end
 * @param {number} count
 * @returns {Array<number>}
 */
export function generateUniqueNumbersInRange(start, end, count) {
  return Random.pickUniqueNumbersInRange(start, end, count);
}

/**
 *
 * @param {Array<number>} values
 * @returns {Array<number>}
 */
export function sortNumbersAscendingOrder(values) {
  const copiedValues = [...values];

  copiedValues.sort((a, b) => a - b);

  return copiedValues;
}
