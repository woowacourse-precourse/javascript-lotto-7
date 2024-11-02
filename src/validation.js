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
     * @param {string} numbers
     */
    isWrongLength: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      if (numberArr.length !== NUM.LOTTO_NUMBER_COUNT)
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISWRONGLENGTH);
    },
    /**
     *
     * @param {string} numbers
     */
    hasSpace: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      if (numberArr.some((number) => /\s/g.test(number)))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.HASSPACE);
    },

    /**
     *
     * @param {string} numbers
     */
    isEmpty: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      if (numberArr.some((number) => !number))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISEMPTY);
    },

    /**
     *
     * @param {string} numbers
     */
    isNotInRange: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      if (numberArr.some((number) => Number(number) < 1 || Number(number) > 45))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTINRANGE);
    },

    /**
     *
     * @param {string} numbers
     */
    isNotNumber: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      if (numberArr.some((number) => isNaN(Number(number))))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTNUMBER);
    },

    /**
     *
     * @param {string} numbers
     */
    isNotInteger: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      if (numberArr.some((number) => Number(number) % 1 !== 0))
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTINTEGER);
    },

    /**
     *
     * @param {string} numbers
     */
    isNotDuplicate: function (numbers) {
      const numberArr = numbers.split(`${NUM.SEPARATOR}`);
      const numberSet = new Set(numberArr);
      if (numberArr.length !== numberSet.size)
        throw new Error(ERRORMESSAGE.WINNINGNUMBER.ISNOTDUPLICATE);
    },
  },

  bonusNumber: {
    isNotNumber: function (number) {
      if (isNaN(number)) throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTNUMBER);
    },

    isNotPositiveNumber: function (number) {
      if (Number(number) < NUM.MINIMUM_POSITIVE_NUMBER)
        throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTPOSITIVENUMBER);
    },

    isNotInRange: function (number) {
      if (Number(number) < 1 || Number(number) > 45)
        throw new Error(ERRORMESSAGE.BONUSNUMBER.ISNOTINRANGE);
    },
  },
});

export default validation;
