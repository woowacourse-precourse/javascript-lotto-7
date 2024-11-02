import { ERRORMESSAGE, NUM } from './constants/index.js';

const validation = Object.freeze({
  /**
   *
   * @param {str} numberStr
   */
  isNotNumber: function (number) {
    if (isNaN(number)) throw new Error(ERRORMESSAGE.ISNOTNUMBER);
  },
  isNotPositiveNumber: function (number) {
    if (Number(number) < NUM.MINIMUM_POSITIVE_NUMBER)
      throw new Error(ERRORMESSAGE.ISNOTPOSITIVENUMBER);
  },
});

export default validation;
