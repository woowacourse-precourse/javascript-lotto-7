import { MissionUtils } from '@woowacourse/mission-utils';
import ForPurchase from '../output/ForPurchase.js';

class MakeLotto {
  static async make() {
    const budget = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요. \n");

    if (isNaN(budget) || budget % 1000 !== 0 || budget < 1000) {
      throw new Error("[ERROR] 구매 금액이 1000원 이상의 1000원 단위여야 합니다.");
    }

    const money = parseInt(budget);
    const lotto = [];

    for (let i = 0; i < money / 1000; i++) {
      lotto[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }

    ForPurchase.print(lotto);
  }
}

export default MakeLotto;