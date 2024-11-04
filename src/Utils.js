import { ERROR_PREFIX } from './Constants.js';

export class Exception extends Error {
  /** @param {string} cause */
  constructor(cause) {
    super(cause);
    this.message = `${ERROR_PREFIX} ${cause}`;
    this.name = this.constructor.name;
  }
}

/** @param {number} money */
export function formatKRW(money) {
  return money.toLocaleString('ko-KR');
}
