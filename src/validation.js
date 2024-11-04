import { ERRORMESSAGE, NUM } from './constants/index.js';

const validation = Object.freeze({
  purchaseAmount: {
    /**
     *
     * @param {string} number
     */
    isNotNumber: function (number) {
      if (isNaN(number))
        throw new Error(ERRORMESSAGE.PURCHASEAMOUNT.ISNOTNUMBER);
    },
    /**
     *
     * @param {string} number
     */
    isNotPositiveNumber: function (number) {
      if (Number(number) < NUM.MINIMUM_POSITIVE_NUMBER)
        throw new Error(ERRORMESSAGE.PURCHASEAMOUNT.ISNOTPOSITIVENUMBER);
    },
    /**
     *
     * @param {string} number
     */
    isNotGoodNumber: function (number) {
      if (Number(number) % NUM.LOTTO_PRICE !== 0)
        throw new Error(ERRORMESSAGE.PURCHASEAMOUNT.ISNOTGOODNUMBER);
    },
  },

  winningNumber: {
    /**
     *
     * @param {Array<string>} numberArr
     */
    isWrongLength: function (numberArr) {
      if (numberArr.length !== NUM.LOTTO_NUMBER_COUNT)
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISWRONGLENGTH);
    },

    /**
     *
     * @param {Array<string>} numberArr
     */
    hasSpace: function (numberArr) {
      if (numberArr.some((number) => /\s/g.test(number)))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.HASSPACE);
    },

    /**
     *
     * @param {Array<string>} numberArr
     */
    isEmpty: function (numberArr) {
      if (numberArr.some((number) => !number))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISEMPTY);
    },

    /**
     *
     * @param {Array<string>} numberArr
     */
    isNotInRange: function (numberArr) {
      if (
        numberArr.some(
          (number) =>
            Number(number) < NUM.STARTINCLUSIVE ||
            Number(number) > NUM.ENDINCLUSIVE,
        )
      )
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTINRANGE);
    },

    /**
     *
     * @param {Array<string>} numberArr
     */
    isNotNumber: function (numberArr) {
      if (numberArr.some((number) => isNaN(Number(number))))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTNUMBER);
    },

    /**
     *
     * @param {Array<string>} numberArr
     */
    isNotInteger: function (numberArr) {
      if (numberArr.some((number) => Number(number) % 1 !== 0))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTINTEGER);
    },

    /**
     *
     * @param {Array<string>} numberArr
     */
    isNotDuplicate: function (numberArr) {
      const numberSet = new Set(numberArr);
      if (numberArr.length !== numberSet.size)
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTDUPLICATE);
    },
  },

  bonusNumber: {
    isNotNumber: function (number, undefined) {
      if (isNaN(number)) throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTNUMBER);
    },

    isNotPositiveNumber: function (number, undefined) {
      if (Number(number) < NUM.MINIMUM_POSITIVE_NUMBER)
        throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTPOSITIVENUMBER);
    },

    isNotInRange: function (number, undefined) {
      if (
        Number(number) < NUM.STARTINCLUSIVE ||
        Number(number) > NUM.ENDINCLUSIVE
      )
        throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTINRANGE);
    },

    isNotDuplicate: function (number, winningNumber) {
      if (winningNumber.indexOf(number) >= 0)
        throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTDUPLICATE);
    },
  },
});

export default validation;
