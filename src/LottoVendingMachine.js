import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";
import { MAGIC_NUMBER } from "./constants/magicNumber.js";

class LottoVendingMachine {
  #lottoAmount;
  #lottos = [];

  async run() {
    await this.purchaseLottoAmount();

    // 로또 번호 발행()
    //   로또 번호 검사()
    this.issueLottos();

    // 발행한 로또 수량 및 번호 오름차순 출력()
    this.printIssueLottosInfo();

    // 당첨번호 입력()
    //   당첨 번호 검사()
    // 보너스번호 입력()
    //    보너스 번호 검사()
    // 당첨내역 출력()
    // 총 수익률 출력()
  }

  async purchaseLottoAmount() {
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
      this.#lottos.push(this.#pickRandomLotto());
    }
  }

  #pickRandomLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      MAGIC_NUMBER.LOTTO_MIN_NUM,
      MAGIC_NUMBER.LOTTO_MAX_NUM,
      MAGIC_NUMBER.LOTTO_PICK_NUM
    );
  }

  printIssueLottosInfo() {
    Console.print("");
    Console.print(MESSAGES.OUTPUT.PURCHASE_LOTTO_NUMBER(this.#lottoAmount));
    this.#lottos.forEach((lotto) => Console.print(lotto));
  }
}

export default LottoVendingMachine;
