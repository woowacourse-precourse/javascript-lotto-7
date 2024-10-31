import { RULE, ERROR_MESSAGE, LOTTO_PRIZE } from './constants/index.js';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoManager {
  validatePrice(price) {
    if (isNaN(price)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
    if (price < RULE.LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE_PRICE(RULE.LOTTO_PRICE));
    }
    if (price % RULE.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT(RULE.LOTTO_PRICE));
    }
  }

  validateBonus(bonusNumber, winningNumber) {
    bonusNumber = bonusNumber.trim();
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }
    if (
      bonusNumber < RULE.LOTTO_MIN_NUMBER ||
      bonusNumber > RULE.LOTTO_MAX_NUMBER
    ) {
      throw new Error(
        ERROR_MESSAGE.OUT_OF_RANGE_NUMBER(
          RULE.LOTTO_MIN_NUMBER,
          RULE.LOTTO_MAX_NUMBER,
        ),
      );
    }
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
    return Number(bonusNumber);
  }

  buyLottos(price) {
    const lottoCount = price / RULE.LOTTO_PRICE;
    return Array.from({ length: lottoCount }, () => this.generateLotto());
  }

  generateLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      RULE.LOTTO_MIN_NUMBER,
      RULE.LOTTO_MAX_NUMBER,
      RULE.LOTTO_BALL_NUMBER,
    );
    return new Lotto(lottoNumbers.sort((a, b) => a - b));
  }

  getWinningLotto(lottoInput) {
    const lotto = lottoInput
      .split(RULE.SEPARATOR)
      .map((number) => number.trim());
    return new Lotto(lotto).numbers;
  }

  getResult(lottos, winningNumber, bonusNumber) {
    const winningNumbers = winningNumber.map((num) => Number(num));
    const bonusNum = Number(bonusNumber);

    const result = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

    lottos.forEach((lotto) => {
      const numbers = lotto.numbers.map((num) => Number(num));

      const matchCount = numbers.filter((num) =>
        winningNumbers.includes(num),
      ).length;

      if (matchCount === 6) {
        result[6]++;
      } else if (matchCount === 5) {
        if (numbers.includes(bonusNum)) {
          result['5.5']++;
        } else {
          result[5]++;
        }
      } else if (matchCount >= 3) {
        result[matchCount]++;
      }
    });

    return result;
  }

  calculatePrize(result, purchasePrice) {
    const totalPrize =
      result[3] * LOTTO_PRIZE.FIFTH +
      result[4] * LOTTO_PRIZE.FOURTH +
      result[5] * LOTTO_PRIZE.THIRD +
      result[5.5] * LOTTO_PRIZE.SECOND +
      result[6] * LOTTO_PRIZE.FIRST;

    const prize = ((totalPrize / purchasePrice) * 100).toFixed(1);
    return prize;
  }
}
export default LottoManager;
