import { LOTTO_PRICE } from '../constant/index.js';

class InputParser {
  static parsePurchaseAmount(input) {
    if (input.trim() === '') {
      return null;
    }
    return Number(input);
  }

  static calculateLottoCount(purchaseAmount) {
    return purchaseAmount / LOTTO_PRICE;
  }

  static parseWinningNumber(input) {
    return input
      .trim()
      .split(',')
      .map((element) => {
        const trimedElement = element.trim();
        if (trimedElement === '') {
          return null;
        }

        return Number(trimedElement);
      });
  }

  static parseBonusNumber(input) {
    const trimmedInput = input.trim();
    if (trimmedInput === '') {
      return null;
    }
    return Number(trimmedInput);
  }
}

export default InputParser;
