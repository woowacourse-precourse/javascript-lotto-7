import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoMachine {
  #purchase = 0;
  #lottoCount = 0;
  #winningNumbers = [];
  #bonusNumber;
  #lottos = [];

  async play() {
    await this.setPurchase(); // 구입 금액 입력
    this.setLottoCount(); // 로또 개수 구하기
    // 로또 발행
    this.makeLotto();
  }

  // 구입 금액 입력
  async setPurchase() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.#validatePurchase(input);
    this.#purchase = input;
  }

  #validatePurchase(purchase) {
    if (purchase % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000으로 나누어 떨어져야 합니다.');
    }

    if (isNaN(purchase)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }
  }

  setLottoCount() {
    this.#lottoCount = this.#purchase / 1000;
    Console.print(`\n${this.#lottoCount}개를 구매했습니다.`);
  }

  // 로또 발행
  makeLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      let numbers = this.getRandomNumber();
      numbers.sort((a, b) => a - b);

      const newLotto = new Lotto(numbers);
      newLotto.printNumbers();
      this.#lottos.push(newLotto.getNumbers());
    }
  }

  getRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoMachine;
