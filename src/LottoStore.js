import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validator from './Validator.js';
import { CONDITIONS, PRINT_MESSAGE } from './constants.js';

class LottoStore {
  #vaildator;
  #lottoList;
  #winningLotto;
  #bonusNumber;
  matchItem = {
    [this.getKey('3')]: 0,
    [this.getKey('4')]: 0,
    [this.getKey('5')]: 0,
    [this.getKey('5_BONUS')]: 0,
    [this.getKey('6')]: 0,
  };

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

  checkWinningLotto() {
    this.#lottoList.forEach((lotto) => {
      let correctCount = this.#winningLotto.checkCorrectCount(lotto);

      if (correctCount === 5) {
        correctCount = this.checkBonusNumber(lotto);
      }

      if (correctCount >= 3) {
        this.matchItem[this.getKey(correctCount)] += 1;
      }
    });
  }

  getKey(index) {
    return `MATCH_${index}`;
  }

  checkBonusNumber(lotto, correctCount) {
    const hasBonusNumber = lotto.checkBonusNumber(this.#bonusNumber);

    if (hasBonusNumber) {
      return `${correctCount}_BONUS`;
    }

    return correctCount;
  }

  printWinningResult() {
    let totalReward = 0;
    Object.keys(this.matchItem).forEach((key) => {
      MissionUtils.Console.print(`${PRINT_MESSAGE[key]} - ${this.matchItem[key]}개`);
      totalReward += CONDITIONS[`REWARD_${key}`] * this.matchItem[key];
    });
    const rateOfReturn = (totalReward / (this.#lottoList.length * 1000)) * 100;
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
}

export default LottoStore;
