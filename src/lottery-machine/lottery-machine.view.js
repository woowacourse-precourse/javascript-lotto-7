// @ts-check
import { input } from '../lib/view.js';

class LotteryMachineView {
  static QUERY = Object.freeze({
    GET_LOTTERY_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  });

  /**
   *
   * @returns {Promise<string>}
   */
  async getLotteryPurchaseAmount() {
    const result = await input(LotteryMachineView.QUERY.GET_LOTTERY_PURCHASE_AMOUNT);

    return result;
  }
}

export default LotteryMachineView;
