import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants.js';

class LottoResult {
  #lottoWinningNumbers;
  #lottoBonusNumber;

  constructor(purchasedLottos) {
    this.purchasedLottos = purchasedLottos;
  }

  async #getLottoWinningNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGES.matchNumberInput);
  }

  async #getBonusNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGES.bonusNumberInput);
  }

  async lottoResult() {
    const winningNumbers = await this.#getLottoWinningNumbers();
    this.#lottoWinningNumbers = winningNumbers.split(',');
    this.#lottoBonusNumber = await this.#getBonusNumbers();
  }
}

export default LottoResult;
