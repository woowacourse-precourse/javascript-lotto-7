import { Random } from "@woowacourse/mission-utils";
import LottoIO from "./LottoIO.js";

export const LOTTO_PRICE = 1000;
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const NUMBER_COUNT_BY_LOTTO = 6;

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
      this.#throwLottoError(
        "당첨 번호는 콤마(,)를 기준으로 숫자를 입력해 주세요. (ex: 1,2,3)"
      );
    }

    if (numbers.length !== NUMBER_COUNT_BY_LOTTO) {
      this.#throwLottoError(
        `${NUMBER_COUNT_BY_LOTTO}개의 당첨 번호를 입력해 주세요.`
      );
    }

    if (numbers.some((n) => !this.#isNumber(n))) {
      this.#throwLottoError("숫자와 콤마(,)만 입력해 주세요.");
    }

    if (numbers.some(this.#isOutRangeLottoNumber)) {
      this.#throwLottoError(
        `당첨 번호는 ${LOTTO_NUMBER_MIN} ~ ${LOTTO_NUMBER_MAX} 사이로 입력해 주세요.`
      );
    }
  }

  async getBonusNumber() {
    while (true) {
      try {
        const bonus = await LottoIO.getUserInput(
          "\n보너스 번호를 입력해 주세요.\n"
        );
        const bonusNumber = Number(bonus);

        Lotto.#validateBonusNumber(bonusNumber);

        return bonusNumber;
      } catch ({ message }) {
        LottoIO.print(message);
      }
    }
  }

  static #validateBonusNumber(number) {
    if (!this.#isNumber(number)) {
      this.#throwLottoError("보너스 번호는 숫자로 입력해 주세요.");
    }

    if (this.#isOutRangeLottoNumber([number])) {
      this.#throwLottoError(
        `보너스 번호는 ${LOTTO_NUMBER_MIN} ~ ${LOTTO_NUMBER_MAX} 사이로 입력해 주세요.`
      );
    }
  }

  static async buy() {
    const money = await this.#getUserAmount();
    const lottoCount = this.#pay2Lotto(money, LOTTO_PRICE);

    LottoIO.print(`\n${lottoCount}개를 구매했습니다.`);

    const lottos = this.#scratch(lottoCount);

    lottos.forEach((lotto) => {
      LottoIO.print(lotto);
    });

    LottoIO.print("");

    return lottos;
  }

  static #scratch(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        NUMBER_COUNT_BY_LOTTO
      ).sort((a, b) => a - b)
    );
  }

  static async #getUserAmount() {
    let amount = null;

    do {
      amount = await LottoIO.getUserInput("구입금액을 입력해 주세요.\n");
      amount = this.#parseAmount(amount);
    } while (!this.#isValidAmount(amount));

    return amount;
  }

  static #parseAmount(number) {
    if (!number || number === "0") return -1;

    return Number(number);
  }

  static #isValidAmount(amount) {
    try {
      this.#validateAmount(amount);

      return true;
    } catch ({ message }) {
      LottoIO.print(message);

      return false;
    }
  }

  static #validateAmount(amount) {
    if (!this.#isNumber(amount)) {
      this.#throwLottoError("숫자를 입력해 주세요.");
    }

    if (!Number.isInteger(amount) || amount < LOTTO_PRICE) {
      this.#throwLottoError(`${LOTTO_PRICE}원 이상 입력해 주세요.`);
    }

    if (!Number.isSafeInteger(amount)) {
      this.#throwLottoError(
        `금액이 너무 큽니다. ${Number.MAX_SAFE_INTEGER} 이하로 입력해 주세요`
      );
    }

    const lottoCount = this.#pay2Lotto(amount, LOTTO_PRICE);
    const isDemical = !Number.isInteger(lottoCount);
    if (isDemical) {
      this.#throwLottoError(`${LOTTO_PRICE}원 단위로 입력해 주세요.`);
    }
  }

  static #pay2Lotto(money, price) {
    this.#validatePay2Lotto(money, price);

    return money / price;
  }

  static #validatePay2Lotto(money, price) {
    if (!this.#isNumber(money) || !this.#isNumber(price)) {
      this.#throwLottoError("로또의 금액과 가격은 숫자로 입력해 주세요.");
    }

    if (money < 0 || price < 0) {
      this.#throwLottoError("로또의 금액과 가격은 양수입니다.");
    }
  }

  static showResultByLot = (purchasedLottos, winnningNumbers, bonusNumber) => {
    this.#validateResultByLot(purchasedLottos);
    this.#validateResultByLot(winnningNumbers);
    if (!this.#isNumber(bonusNumber)) {
      this.#throwLottoError("보너스 번호는 숫자입니다.");
    }

    const totalHits = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };

    purchasedLottos.forEach((lotto) => {
      this.#calculateHit(lotto, totalHits, winnningNumbers, bonusNumber);
    });

    this.#printWinList(totalHits);
  };

  static #validateResultByLot(numbers) {
    if (typeof numbers !== "object" || numbers.length === undefined) {
      this.#throwLottoError("로또 번호와 당첨 번호는 배열입니다.");
    }
  }

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

  static #isNumber(number) {
    return typeof number === "number" && !Number.isNaN(number);
  }

  static #isOutRangeLottoNumber(number) {
    return number < LOTTO_NUMBER_MIN || LOTTO_NUMBER_MAX < number;
  }

  static #throwLottoError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default Lotto;
