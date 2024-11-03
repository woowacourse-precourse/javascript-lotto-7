import { Random } from "@woowacourse/mission-utils";

class LottoMachine {
  static createLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  static createLottos(amount) {
    return Array.from({ length: amount }, () => this.createLotto());
  }
}

export default LottoMachine;