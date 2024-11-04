import { Lotto } from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const purchaseAmount = parseInt(input, 10);

      try {
        this.validatePurchaseAmount(purchaseAmount);

        const lottoCount = purchaseAmount / 1000;
        Console.print(`\n${lottoCount}개를 구매했습니다.`);

        const lottos = this.generateLottos(lottoCount);
        lottos.forEach((lotto) => {
          Console.print(lotto.numbers);
        });

      } catch (error) {
        Console.print(error.message);
      }
    });
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.');
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto());
    }
    return lottos;
  }
}

export default App;
