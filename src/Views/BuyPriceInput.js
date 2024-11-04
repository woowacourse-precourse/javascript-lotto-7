import { Console } from '@woowacourse/mission-utils';
import throwError from '../Utils/throwError.js';
import Rules from '../Utils/Rules.js';
import Errors from '../Constants/Errors.js';
import { InputComment } from '../Constants/display.js';
import BuyPriceConfig from '../Constants/BuyPriceConfig.js';

const BuyPriceInput = {
  get: async () => {
    const userInput = await Console.readLineAsync(InputComment.BUY_PRICE);
    return userInput;
  },

  validate: (buyPriceInput) => {
    if (Rules.isNoValueString(buyPriceInput))
      throwError(Errors.BuyPrice.NO_INPUT);

    const buyPrice = Number(buyPriceInput);
    if (Rules.isNotNumber(buyPriceInput))
      throwError(Errors.BuyPrice.NOT_NUMBER_INPUT);
    if (Rules.isLessThanMin(buyPrice, BuyPriceConfig.Min.VALUE))
      throwError(Errors.BuyPrice.LESS_THAN_MIN);
    if (Rules.isMoreThanMax(buyPrice, BuyPriceConfig.Max.VALUE))
      throwError(Errors.BuyPrice.MORE_THAN_MAX);
    if (Rules.isRestWhenDivided(buyPrice, BuyPriceConfig.Unit.VALUE))
      throwError(Errors.BuyPrice.NOT_UNIT_NUMBER);

    return true;
  },

  parse: (buyPriceInput) => {
    return Number(buyPriceInput);
  },
};

export default BuyPriceInput;
