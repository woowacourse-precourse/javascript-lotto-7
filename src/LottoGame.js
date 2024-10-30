import LottoManager from './LottoManager.js';
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/index.js';

class LottoGame {
  constructor() {
    this.lottoManager = new LottoManager();
  }
  async start() {
    // 1. 구입 금액 입력 받기
    // 2. 구입한 로또 개수 출력
    // 3. 구입 금액으로 로또 사오기
    // 4. 당첨 번호 입력 받기
    // 5. 보너스 번호 입력 받기
    // 6. 결과를 가져오기
    // 7. 결과 출력하기
    const purchasePrice = await this.#getPurchasePrice();
    const lottos = this.lottoManager.buyLottos(purchasePrice);
  }

  async #getPurchasePrice() {
    while (true) {
      try {
        const price = await Console.readLineAsync(
          INPUT_MESSAGES.PURCHASE_AMOUNT,
        );
        this.lottoManager.validatePrice(Number(price));
        return Number(price);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #printLottoCount() {}

  #getPurchaseLottos() {}

  #getWinningNumber() {}

  #getBonusNumber() {}

  #printResult() {}
}

export default LottoGame;
