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
}

export default InputParser;
