import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  NUMBER_COUNT_BY_LOTTO,
  EARNINGS_MONEYS,
} from "./constants.js";
import LottoIO from "./LottoIO.js ";
import { isNumber, isOutRangeNumber } from "./utils.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    while (true) {
      try {
        Lotto.#validateLottoNumbers(numbers);
        this.#numbers = numbers;

        break;
      } catch ({ message }) {
        LottoIO.print(message);

        return Lotto.createWinningNumbers();
      }
    }
  }

  static async createWinningNumbers() {
    const numbers = await LottoIO.getUserInput("당첨 번호를 입력해 주세요.\n");

    return new Lotto(numbers.split(",").map(Number));
  }

  get winnningNumbers() {
    return [...this.#numbers];
  }

  static #validateLottoNumbers(numbers) {
    if (typeof numbers !== "object") {
      LottoIO.throwError(
        "당첨 번호는 콤마(,)를 기준으로 숫자를 입력해 주세요. (ex: 1,2,3)"
      );
    }

    if (numbers.length !== NUMBER_COUNT_BY_LOTTO) {
      LottoIO.throwError(
        `${NUMBER_COUNT_BY_LOTTO}개의 당첨 번호를 입력해 주세요.`
      );
    }

    if (numbers.some((n) => !isNumber(n))) {
      LottoIO.throwError("숫자와 콤마(,)만 입력해 주세요.");
    }

    const isIncludeOutRangeNumber = numbers.some((n) =>
      isOutRangeNumber(n, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX)
    );
    if (isIncludeOutRangeNumber) {
      LottoIO.throwError(
        `당첨 번호는 ${LOTTO_NUMBER_MIN} ~ ${LOTTO_NUMBER_MAX} 사이로 입력해 주세요.`
      );
    }

    if (new Set(numbers).size !== numbers.length) {
      LottoIO.throwError("모든 당첨 번호를 서로 다르게 입력해 주세요.");
    }
  }

  static showResultByLot = (
    usedMoney,
    purchasedLottos,
    winnningNumbers,
    bonusNumber
  ) => {
    const totalHits = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };

    purchasedLottos.forEach((lotto) => {
      this.#calculateHit(lotto, totalHits, winnningNumbers, bonusNumber);
    });

    this.#printWinList(totalHits);

    this.#printEarningsRate(totalHits, usedMoney);
  };

  static #calculateHit(lotto, totalHits, winnningNumbers, bonusNumber) {
    const count = this.#getHitWinning(lotto, winnningNumbers);
    if (count < 3) return;

    const isExistBonus = this.#isHitBonus(lotto, bonusNumber);
    if (count === 5 && isExistBonus) {
      totalHits["5+"] += 1;
      return;
    }

    if (Object.hasOwn(totalHits, count)) {
      totalHits[count] += 1;
      return;
    }
  }

  static #isHitBonus(lotto, hitNumber) {
    return lotto.includes(hitNumber);
  }

  static #getHitWinning(lotto, hitNumbers) {
    return lotto.reduce((hit, number) => {
      if (hitNumbers.includes(number)) {
        return hit + 1;
      }

      return hit;
    }, 0);
  }

  static #printWinList(hits) {
    const printList = [
      `3개 일치 (5,000원) - ${hits["3"]}개`,
      `4개 일치 (50,000원) - ${hits["4"]}개`,
      `5개 일치 (1,500,000원) - ${hits["5"]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${hits["5+"]}개`,
      `6개 일치 (2,000,000,000원) - ${hits["6"]}개`,
    ];

    LottoIO.print("\n당첨 통계\n---");

    printList.forEach((text) => {
      LottoIO.print(text);
    });
  }

  static #printEarningsRate(hits, usedMoney) {
    const totalEarning = Object.entries(hits).reduce(
      (total, [rank, hitCount]) => {
        return total + EARNINGS_MONEYS[rank] * hitCount;
      },
      0
    );

    const earningsRate = (totalEarning / usedMoney) * 100;

    LottoIO.print(`총 수익률은 ${earningsRate.toFixed(1)}%입니다.`);
  }
}

export default Lotto;
