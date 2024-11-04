import Input from '../View/Input.js';
import { makeInputToPurchaseMoneyNumber } from '../Check/PurchaseMoney.js';
import {
  getValidWinningNumberList,
  getValidBonusNumber,
} from '../Check/WinningNumbers.js';

class ValidInput {
  static async getPurchaseMoney() {
    const input = await Input.getPurchaseMoney();
    return makeInputToPurchaseMoneyNumber(input);
  }

  static async getLottoWinningNumbers() {
    const input = await Input.getLottoWinningNumbers();
    return getValidWinningNumberList(input);
  }

  // TODO :: getBonusNumber인데 인자로 winningNumber를 받는건 혼란을 줄 수 있을 것 같음
  static async getBonusNumber(winningNumbers) {
    const input = await Input.getBonusNumber();
    return getValidBonusNumber(input, winningNumbers);
  }
}

export default ValidInput;
