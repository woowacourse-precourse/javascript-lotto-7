import { MissionUtils } from '@woowacourse/mission-utils';

class LottoMachine {
  #amount;

  constructor() {
    this.#amount = 0;
  }

  get amount() {
    return this.#amount;
  }

  async inputPurchaseAmount() {
    const amount =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    if (amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입금액은 1000 원 단위로 입력해야 합니다.',
      );
    }
    this.#amount = amount;
  }
}

export default LottoMachine;
