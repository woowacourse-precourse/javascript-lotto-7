import { Console } from '@woowacourse/mission-utils';
import { printErrorAndFalse } from '../Utils/handleError.js';
import Rules from '../Utils/Rules.js';
import ErrorMessages from '../Constants/ErrorMessages.js';
import { InputComment } from '../Constants/display.js';
import BuyPriceConfig from '../Constants/buyPriceConfig.js';

const BuyPriceInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(InputComment.BUY_PRICE);
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

    if (buyPrice < BuyPriceConfig.Min.VALUE) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.LESS_THAN_MIN);
    }

    if (buyPrice >= BuyPriceConfig.Max.VALUE) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.MORE_THAN_MAX);
    }

    if (buyPrice % BuyPriceConfig.Unit.VALUE !== 0) {
      return printErrorAndFalse(ErrorMessages.BuyPrice.NOT_UNIT_NUMBER);
    }

    return true;
  },

  parse: (buyPriceInput) => {
    return Number(buyPriceInput);
  },
};

export default BuyPriceInput;
