import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class LottoMachine {
  #amount;
  #lottos;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
  }

  get amount() {
    return this.#amount;
  }

  get lottos() {
    return this.#lottos;
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
    this.#generateLottos();
  }

  #generateLottos() {
    const lottoCnt = this.#amount / 1000;
    for (let i = 0; i < lottoCnt; i++) {
      this.#lottos.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)),
      );
    }
    this.#printLottos();
  }

  #printLottos() {
    MissionUtils.Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottos.length; i++) {
      const lottoStr = this.#lottos[i].numbers.toString().replaceAll(',', ', ');
      MissionUtils.Console.print(`[${lottoStr}]`);
    }
  }
}

export default LottoMachine;
