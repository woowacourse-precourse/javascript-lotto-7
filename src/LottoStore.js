import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validator from './Validator.js';

class LottoStore {
  #vaildator;
  #lottoList;
  #winningLotto;
  #bonusNumber;

  constructor() {
    this.#vaildator = new Validator();
    this.#lottoList = [];
    this.#winningLotto = null;
    this.#bonusNumber = 0;
  }

  #validatePayment(payment) {
    this.#vaildator.payment(payment);

    return Number(payment.trim());
  }

  #validateWinningNumbers(numbers) {
    this.#vaildator.winningNumbers(numbers);
    const winningNumbers = numbers.trim().split(',').map(Number);

    return new Lotto(winningNumbers);
  }

  #validateBonusNumber(number) {
    this.#vaildator.bonusNumber(number, this.#winningLotto);

    return Number(number.trim());
  }

  buyLotto(payment) {
    const validPayment = this.#validatePayment(payment);
    const lottoCount = validPayment / 1000;

    for (let i = 0; i < lottoCount; i++) {
      const lotto = this.#publishLotto();
      this.#lottoList.push(lotto);
    }
  }

  #publishLotto() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(lottoNumbers);
  }

  getLotto(index) {
    return this.#lottoList[index];
  }

  getLottoCount() {
    return this.#lottoList.length;
  }

  printLottoList() {
    return this.#lottoList.map((lotto) => lotto.print()).join('\n');
  }

  setWinningLotto(winningNumbers) {
    const validWinningLotto = this.#validateWinningNumbers(winningNumbers);
    this.#winningLotto = validWinningLotto;
  }

  setBonusNumber(bonusNumber) {
    const validBonusNumber = this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = validBonusNumber;
  }
}

export default LottoStore;
