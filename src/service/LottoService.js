import Lotto from "../model/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export class LottoService {
  static purchaseLotto(amount) {
    const numberOfLotto = Math.floor(amount / 1000);
    return this.generateLottos(numberOfLotto);
  }

  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.generateLotto());
    }
    return lottos;
  }

  static generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }
}
