import { ERRORMESSAGE, NUM } from './constants/index.js';

const validation = Object.freeze({
  purchaseAmount: {
    /**
     *
     * @param {string} number
     */
    isNotNumber: function (number) {
      if (isNaN(number)) throw new Error(ERRORMESSAGE.ISNOTNUMBER);
    },
    /**
     *
     * @param {string} number
     */
    isNotPositiveNumber: function (number) {
      if (Number(number) < NUM.MINIMUM_POSITIVE_NUMBER)
        throw new Error(ERRORMESSAGE.ISNOTPOSITIVENUMBER);
    },
    /**
     *
     * @param {string} number
     */
    isNotGoodNumber: function (number) {
      if (Number(number) % NUM.LOTTO_PRICE !== 0)
        throw new Error(ERRORMESSAGE.ISNOTGOODNUMBER);
    },
  },

  winningNumber: {
    /**
     *
     * @param {Array<string>} numbers
     */
    isWrongLength: function (numberArr) {
      if (numberArr.length !== NUM.LOTTO_NUMBER_COUNT)
        throw new Error(ERRORMESSAGE.ISWRONGLENGTH);
    },
    /**
     *
     * @param {Array<string>} numbers
     */
    hasSpace: function (numberArr) {
      if (numberArr.some((number) => /\s/g.test(number)))
        throw new Error(ERRORMESSAGE.HASSPACE);
    },

    /**
     *
     * @param {Array<string>} numbers
     */
    isEmpty: function (numberArr) {
      if (numberArr.some((number) => !number))
        throw new Error(ERRORMESSAGE.ISEMPTY);
    },

    /**
     *
     * @param {Array<string>} numbers
     */
    isNotInRange: function (numberArr) {
      if (numberArr.some((number) => Number(number) < 1 || Number(number) > 45))
        throw new Error(ERRORMESSAGE.ISNOTINRANGE);
    },

    /**
     *
     * @param {Array<string>} numbers
     */
    isNotNumber: function (numberArr) {
      if (numberArr.some((number) => isNaN(Number(number))))
        throw new Error(ERRORMESSAGE.ISNOTNUMBER);
    },

    isNotInteger: function (numberArr) {
      if (numberArr.some((number) => Number(number) % 1 !== 0))
        throw new Error(ERRORMESSAGE.ISNOTINTEGER);
    },
  },
});

export default validation;
