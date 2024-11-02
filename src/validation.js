import { ERRORMESSAGE, NUM } from './constants/index.js';

const validation = Object.freeze({
  purchaseAmount: {
    isNotNumber: function (number) {
      if (isNaN(number)) throw new Error(ERRORMESSAGE.ISNOTNUMBER);
    },
    isNotPositiveNumber: function (number) {
      if (Number(number) < NUM.MINIMUM_POSITIVE_NUMBER)
        throw new Error(ERRORMESSAGE.ISNOTPOSITIVENUMBER);
    },

    isNotGoodNumber: function (number) {
      if (Number(number) % NUM.LOTTO_PRICE !== 0)
        throw new Error(ERRORMESSAGE.ISNOTGOODNUMBER);
    },
  },
});

export default validation;
