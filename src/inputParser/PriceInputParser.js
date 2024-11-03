import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';
import { MESSAGES, PRICE_UNIT } from '../constants.js';
import throwError from '../utils/throwError.js';

class PriceInputParser extends InputParser {
  async readLoop() {
    try {
      const priceString = await this.#read();
      const price = Number(priceString);

      this.#validate(price);

      return price;
    } catch (error) {
      Console.print(error.message);

      return this.readLoop();
    }
  }

  #read() {
    return Console.readLineAsync(`${MESSAGES.IO.INPUT.PRICE}\n`);
  }

  #validate(price) {
    if (Number.isNaN(price)) {
      throwError(MESSAGES.ERROR.PRICE.SHOULD_BE_NUMBER);
    }

    if (price <= 0) {
      throwError(MESSAGES.ERROR.PRICE.SHOULD_BE_POSITIVE);
    }

    if (price % PRICE_UNIT !== 0) {
      throwError(MESSAGES.ERROR.PRICE.SHOULD_BE_MULTIPLIED_BY_PRICE_UNIT);
    }
  }
}

export default PriceInputParser;
