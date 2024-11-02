import { Console } from '@woowacourse/mission-utils';
import { printErrorAndFalse } from '../Utils/handleError.js';
import PrintMessages from '../Constants/PrintMessages.js';
import Rules from '../Utils/Rules.js';
import ErrorMessages from '../Constants/ErrorMessages.js';

const BuyPriceInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(
      PrintMessages.BUY_PRICE_INPUT
    );
    return userInput;
  },

  validate: (buyPriceInput) => {
    if (Rules.isNoValueString(buyPriceInput)) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.NO_INPUT);
    }

    const buyPrice = Number(buyPriceInput);

    if (isNaN(buyPrice)) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.NOT_NUMBER_INPUT);
    }

    if (buyPrice < 0) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.LESS_THAN_ZERO);
    }

    if (buyPrice >= 1000000000000) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.TOO_MUCH_AMOUNT);
    }

    if (buyPrice % 1000 !== 0) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.NOT_UNIT_NUMBER);
    }

    return true;
  },

  parse: (buyPriceInput) => {
    return Number(buyPriceInput);
  },
};

export default BuyPriceInput;
