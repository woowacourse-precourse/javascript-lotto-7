import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";

class LottoVendingMachine {
  #lottos;

  async run() {
    const money = await this.purchaseLottoAmount();
    this.issueLottos(money);

    // 로또 번호 발행()
    //   로또 번호 검사()
    // 발행한 로또 수량 및 번호 오름차순 출력()
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
        return this.#validateLottoAmount(money);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  issueLottos(money) {}

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
}

export default LottoVendingMachine;
