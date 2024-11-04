import { Console, Random } from '@woowacourse/mission-utils';
import { scan } from './utils/scanner.js';

class Lottos {
  lottoAmount;
  lottos;

  constructor() {
    this.lottos = [];
  }

  async getLottoAmount() {
    try {
      const price = await scan('구입금액을 입력해 주세요.');
      if (price % 1000 === 0) {
        this.lottoAmount = Number(price / 1000);
        return;
      }
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
    } catch (err) {
      Console.print(err.message);
      await this.getLottoAmount();
    }
  }

  getLottos() {
    Console.print('\n' + this.lottoAmount + '개를 구매했습니다.');
    for (let i = 1; i <= this.lottoAmount; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.lottos.push(lotto);
      Console.print('[' + lotto.join(', ') + ']');
    }
    return this.lottos;
  }
}

export default Lottos;
