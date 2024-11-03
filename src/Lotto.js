import { LOTTO_NUMBERS } from "./constants/lotto.js";
import { ERROR_MESSAGE } from "./constants/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(lottoArray) {
    const isNotSixNumbers = lottoArray.size != LOTTO_NUMBERS.COUNT_6;

    if (isNotSixNumbers) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_SIX_NUMBERS);
    }

    const hasNaN = [...lottoArray].some((lottoNumber) => !Number.isInteger(lottoNumber));

    if (hasNaN) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_INPUT.NOT_A_NUMBER);
    }

    const hasOutOfRange = [...lottoArray].some((lottoNumber) => {
      const isOutOfRange =
        lottoNumber < LOTTO_NUMBERS.MIN_RANGE_1 || lottoNumber > LOTTO_NUMBERS.MAX_RANGE_45;

      return isOutOfRange;
    });

    if (hasOutOfRange) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_INPUT.OUT_OF_RANGE_1_to_45);
    }
  }

  checkLottoNumbers(purchasedLotto, bonusNumber) {
    const result = Array(5).fill(0);

    purchasedLotto.forEach((lotto) => {
      let matchingNumberCount = 0;

      lotto.forEach((number) => {
        if (this.#numbers.has(number)) {
          matchingNumberCount += 1;
        }
      });

      // 1등
      if (matchingNumberCount === 6) {
        result[0] += 1;
      }

      // 2등, 3등
      if (matchingNumberCount === 5 && lotto.includes(bonusNumber)) {
        result[1] += 1;
      } else if (matchingNumberCount === 5) {
        result[2] += 1;
      }

      // 4등
      if (matchingNumberCount === 4) {
        result[3] += 1;
      }

      // 5등
      if (matchingNumberCount === 3) {
        result[4] += 1;
      }
    });

    return result;
  }

  getProfitRate(lottoResult, purchaseAmount) {
    const prizeAmount = [2000000000, 30000000, 1500000, 50000, 5000];

    let profitSum = 0;

    for (let i = 0; i < 5; i += 1) {
      profitSum += prizeAmount[i] * lottoResult[i];
    }

    return Math.round((profitSum / purchaseAmount) * 100 * 100) / 100;
  }
}

export default Lotto;
