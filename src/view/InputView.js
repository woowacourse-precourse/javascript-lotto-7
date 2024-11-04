import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO, MESSAGE } from '../shared/constants/constants.js';
import {
  BonusNumberValidation,
  MoneyValidation,
  WinningNumberValidation
} from '../shared/validation/index.js';
import { retryUtil } from '../shared/utils/retryUtil.js';

export class InputView {
  async getPurchaseAmount() {
    return await retryUtil(async () => {
      const input = await MissionUtils.Console.readLineAsync(MESSAGE.GET_PURCHASE_AMOUNT_MESSAGE);
      return MoneyValidation({ command: input });
    });
  }

  printPurchaseAmount(purchaseAmount) {
    const lottoAmount = purchaseAmount / LOTTO.PRICE;
    MissionUtils.Console.print(MESSAGE.GET_PURCHASE_ITEM_AMOUNT(lottoAmount));
    return lottoAmount;
  }

  async getWinningNumberAndBonusNumber() {
    const winningNumber = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumber);
    return [winningNumber, bonusNumber];
  }

  async getWinningNumber() {
    return await retryUtil(async () => {
      const input = await MissionUtils.Console.readLineAsync(MESSAGE.GET_WINNING_NUMBERS);
      WinningNumberValidation({ command: input });
      return input.split(',').map((number) => Number(number.trim()));
    });
  }

  async getBonusNumber(winningNumber) {
    return await retryUtil(async () => {
      const input = await MissionUtils.Console.readLineAsync(MESSAGE.GET_BONUS_NUMBER);
      BonusNumberValidation({ command: input, winningNumber });
      return Number(input);
    });
  }
}
