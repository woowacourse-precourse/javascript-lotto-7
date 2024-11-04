import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validator from './Validator.js';
import { CONDITIONS, PRINT_MESSAGE } from './constants.js';

class LottoStore {
  #vaildator;
  #lottoList;
  #winningLotto;
  #bonusNumber;
  #matchResults;

  constructor() {
    this.#vaildator = new Validator();
    this.#lottoList = [];
    this.#winningLotto = null;
    this.#bonusNumber = 0;
    this.#initMatchResults();
  }

  getLotto(index) {
    return this.#lottoList[index];
  }

  getLottoCount() {
    return this.#lottoList.length;
  }

  #initMatchResults() {
    this.#matchResults = {
      MATCH_3: 0,
      MATCH_4: 0,
      MATCH_5: 0,
      MATCH_5_BONUS: 0,
      MATCH_6: 0,
    };
  }

  #getKey(index) {
    return `MATCH_${index}`;
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
    const lottoCount = validPayment / CONDITIONS.PAYMENT_UNIT;
    this.#generateLottos(lottoCount);
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      this.#lottoList.push(this.#createLotto());
    }
  }

  #createLotto() {
    return new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(
        CONDITIONS.MIN_NUMBER,
        CONDITIONS.MAX_NUMBER,
        CONDITIONS.LOTTO_NUMBER_COUNT,
      ),
    );
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
      if (correctCount === 5) correctCount = this.#checkBonusNumber(lotto, correctCount);
      this.#updateMatchResults(correctCount);
    });
  }

  #checkBonusNumber(lotto, correctCount) {
    const hasBonusNumber = lotto.checkBonusNumber(this.#bonusNumber);

    if (hasBonusNumber) {
      return `${correctCount}_BONUS`;
    }

    return correctCount;
  }

  #updateMatchResults(correctCount) {
    if (correctCount >= 3) {
      this.#matchResults[this.#getKey(correctCount)] += 1;
    }
  }

  printLottoList() {
    return this.#lottoList.map((lotto) => lotto.print()).join('\n');
  }

  printWinningResult() {
    Object.keys(this.#matchResults).forEach((key) => {
      MissionUtils.Console.print(`${PRINT_MESSAGE[key]} - ${this.#matchResults[key]}개`);
    });
    const rateOfReturn = this.#calculateRateOfReturn();
    MissionUtils.Console.print(PRINT_MESSAGE.RATE_OF_RETURN(rateOfReturn));
  }

  #calculateRateOfReturn() {
    const totalReward = this.#calculateTotalReward();
    const investment = this.#lottoList.length * CONDITIONS.PAYMENT_UNIT;
    const rateOfReturn = ((totalReward / investment) * 100).toFixed(1);

    return rateOfReturn;
  }

  #calculateTotalReward() {
    return Object.keys(this.#matchResults).reduce(
      (total, key) => total + CONDITIONS[`REWARD_${key}`] * this.#matchResults[key],
      0,
    );
  }
}

export default LottoStore;
