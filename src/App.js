import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  static PURCHASE_UNIT = 1000;

  run() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      try {
        const purchaseAmount = this.#getValidatedAmount(input);
        const lottoCount = purchaseAmount / App.PURCHASE_UNIT;
        this.#issueLottos(lottoCount);
      } catch (error) {
        Console.print(error.message);
        this.run(); // 잘못된 입력 시 재시도
      }
    });
  }

  #getValidatedAmount(input) {
    const amount = Number(input);
    if (isNaN(amount)) {
      throw new Error("[ERROR] 금액은 숫자로 입력해 주세요.");
    }
    if (amount % App.PURCHASE_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
    }
    return amount;
  }

  #issueLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    for (let i = 0; i < count; i++) {
      // 로또 번호 생성 후 오름차순 정렬
      const randomNumbers = Lotto.generateRandomNumbers().sort((a, b) => a - b);
      const lotto = new Lotto(randomNumbers);
      Console.print(lotto.getNumbers());
    }
  }
}

export default App;
