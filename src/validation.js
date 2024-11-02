import { ERRORMESSAGE } from './constants/index.js';

const validation = Object.freeze({
  /**
   *
   * @param {str} numberStr
   */
  isNotNumber: function (numbers) {
    if (isNaN(numbers)) throw new Error(ERRORMESSAGE.ISNOTNUMBER);
  },
});

export default validation;
