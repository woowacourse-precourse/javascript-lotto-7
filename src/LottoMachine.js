import {Console} from '@woowacourse/mission-utils';
import {Random} from '@woowacourse/mission-utils';

class LottoMachine {
  #purchase = 0;
  #lottoCount = 0;
  #winningNumbers = [];
  #bonusNumber;

  // 구입 금액 입력
  async setPurchase() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.#validatePurchase(input);
    this.#purchase = input;
  }

  #validatePurchase(purchase) {
    if (purchase % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000으로 나누어 떨어져야 합니다.");
    }

    if(isNaN(purchase)){
        throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
  }


}

export default LottoMachine;
