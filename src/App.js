import { Console } from "@woowacourse/mission-utils";

const MESSAGES = Object.freeze({
  INPUT: {
    PURCHASE_LOTTO_MONEY: "구입금액을 입력해 주세요.\n",
    WIN_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BOUNS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  OUTPUT: {
    PURCHASE_LOTTO_NUMBER: (n) => `${n}개를 구매했습니다.\n`,
    WIN_RATE: "당첨 통계\n---\n",
    WIN_DETAIL_5th: (n) => `3개 일치 (5,000원) - ${n}개\n`,
    WIN_DETAIL_4th: (n) => `4개 일치 (50,000원) - ${n}개\n`,
    WIN_DETAIL_3rd: (n) => `5개 일치 (1,500,000원) - ${n}개\n`,
    WIN_DETAIL_2nd: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개\n`,
    WIN_DETAIL_1st: (n) => `6개 일치 (2,000,000,000원) - ${n}개\n`,
    PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.\n`,
  },
  ERROR: {
    PREFIX: `[ERROR] `,
    NOT_INT: `정수가 아닌 숫자입니다.\n`,
    SMALL_INT: `정수가 1,000 미만입니다.\n`,
    NOT_UNIT_INT: `입력 받은 수가 1,000 단위가 아닙니다.\n`,
  },
});

class App {
  async run() {
    const LottoVM = new LottoVendingMachine();
    LottoVM.purchaseLottoAmount();

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
}

class LottoVendingMachine {
  #lottos;

  async purchaseLottoAmount() {
    let money = await Console.readLineAsync(
      MESSAGES.INPUT.PURCHASE_LOTTO_MONEY
    );
    money = this.#validateLottoAmount(money);
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
}

class ValidateCommon {
  validate;
}

export default App;
