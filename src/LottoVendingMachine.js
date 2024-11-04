import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";
import { MAGIC_NUMBER } from "./constants/magicNumber.js";
import Lotto from "./Lotto.js";

class LottoVendingMachine {
  #lottoAmount = 0;
  #lottos = [];
  #winNumbers = [];
  #bounsNumber = 0;

  async run() {
    await this.purchaseLottoAmountInput();

    this.issueLottos();

    this.printIssueLottosInfo();

    await this.winNumbersInput();

    await this.bounsNumberInput();

    // 당첨내역 출력()
    // 총 수익률 출력()
  }

  async purchaseLottoAmountInput() {
    while (true) {
      try {
        let money = await Console.readLineAsync(
          MESSAGES.INPUT.PURCHASE_LOTTO_MONEY
        );
        money = this.#validateLottoAmount(money);
        this.#lottoAmount = money / 1000;

        return this.#lottoAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  #validateLottoAmount(number) {
    if (!Number.isInteger(Number(number))) {
      throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.NOT_INT);
    }
    if (Number(number) < 1000) {
      throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.SMALL_INT);
    }
    if (number.slice(-3) !== "000") {
      throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.NOT_UNIT_INT);
    }

    return Number(number);
  }

  issueLottos() {
    while (this.#lottos.length < this.#lottoAmount) {
      this.#lottos.push(this.#pickRandomLotto(MAGIC_NUMBER.LOTTO_PICK_NUM));
    }
  }

  #pickRandomLotto(pickNum) {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      MAGIC_NUMBER.LOTTO_MIN_NUM,
      MAGIC_NUMBER.LOTTO_MAX_NUM,
      pickNum
    );
  }

  printIssueLottosInfo() {
    Console.print("");
    Console.print(MESSAGES.OUTPUT.PURCHASE_LOTTO_NUMBER(this.#lottoAmount));
    this.#lottos.forEach((lotto) => Console.print(lotto));
  }

  async winNumbersInput() {
    while (true) {
      try {
        Console.print("");
        let winNumbers = await Console.readLineAsync(
          MESSAGES.INPUT.WIN_NUMBERS
        );
        winNumbers = winNumbers.split(",").map((n) => Number(n));
        const lotto = new Lotto(winNumbers);
        this.#winNumbers = lotto.getLottoNumbers();

        return this.#winNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async bounsNumberInput() {
    while (true) {
      try {
        Console.print("");
        let bonusNumber = await Console.readLineAsync(
          MESSAGES.INPUT.BOUNS_NUMBER
        );

        if (!Number.isInteger(Number(bonusNumber))) {
          throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.NOT_INT);
        }
        this.#validateIntsRange(
          bonusNumber,
          MAGIC_NUMBER.LOTTO_MIN_NUM,
          MAGIC_NUMBER.LOTTO_MAX_NUM
        );

        if (this.#winNumbers.includes(Number(bonusNumber))) {
          throw new Error(MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.DUPLICATE_INT);
        }
        this.#bounsNumber = bonusNumber;

        return this.#bounsNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  #validateIntsRange(number, min, max) {
    if (Number(number) < min || Number(number) > max) {
      throw new Error(
        MESSAGES.ERROR.PREFIX + MESSAGES.ERROR.RANGE_INT(min, max)
      );
    }
  }
}

export default LottoVendingMachine;
