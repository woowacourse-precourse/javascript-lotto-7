import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from './constants/gameMessages.js';

class LottoGame {
  async start() {
    // 1. 구입 금액 입력 받기
    // 2. 구입한 로또 개수 출력
    // 3. 구입 금액으로 로또 사오기
    // 4. 당첨 번호 입력 받기
    // 5. 보너스 번호 입력 받기
    // 6. 결과를 가져오기
    // 7. 결과 출력하기
    const lottoCount = await this.#getPurchasePrice();
  }

  async #getPurchasePrice() {
    return await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
  }

  #printLottoCount() {}

  #getPurchaseLottos() {}

  #getWinningNumber() {}

  #getBonusNumber() {}

  #printResult() {}
}

export default LottoGame;
