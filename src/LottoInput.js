import { Console } from '@woowacourse/mission-utils';
import { LOTTOS_SYSTEM_INPUT } from './Prompt.js';
import { validatePurchaseAmount, validateWinningNumbers } from './error.js';

const LottoInput = {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(LOTTOS_SYSTEM_INPUT.LOTTO_PRICE);
    const amount = parseInt(purchaseAmount);
    validatePurchaseAmount(amount);
    return amount;
  },

  async getWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(LOTTOS_SYSTEM_INPUT.NUMBER_INPUT);
    const bonusNumberInput = await Console.readLineAsync(LOTTOS_SYSTEM_INPUT.ADD_NUMBER_INPUT);

    const winningNumbers = winningNumbersInput.split(',').map(Number);
    const bonusNumber = parseInt(bonusNumberInput);

    validateWinningNumbers(winningNumbers, bonusNumber);
    return { winningNumbers, bonusNumber };
  }
};

export default LottoInput;
