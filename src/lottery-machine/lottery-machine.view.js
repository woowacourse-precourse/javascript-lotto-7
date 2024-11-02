// @ts-check
import { input } from '../lib/view.js';

class LotteryMachineView {
  static QUERY = Object.freeze({
    GET_LOTTERY_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
    GET_LOTTERY_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  });

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  #parse(value) {
    return value.trim();
  }

  /**
   *
   * @returns {Promise<string>}
   */
  async getLotteryPurchaseAmount() {
    const result = await input(LotteryMachineView.QUERY.GET_LOTTERY_PURCHASE_AMOUNT);

    return this.#parse(result);
  }

  async getLotteryWinningNumbers() {
    const result = await input(LotteryMachineView.QUERY.GET_LOTTERY_WINNING_NUMBERS);

    return this.#parse(result);
  }
}

export default LotteryMachineView;
