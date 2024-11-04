import { Console } from "@woowacourse/mission-utils";

const MESSAGES = Object.freeze({
  INPUT: {
    PURCHASE_LOTTO_MONEY: "구입금액을 입력해 주세요.\n",
    WIN_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BOUNS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  OUTPUT: {
    PURCHASE_LOTTO_NUMBER: (n) => `${n}개를 구매했습니다.`,
    WIN_RATE: "당첨 통계\n---\n",
    WIN_DETAIL_5th: (n) => `3개 일치 (5,000원) - ${n}개\n`,
    WIN_DETAIL_4th: (n) => `4개 일치 (50,000원) - ${n}개\n`,
    WIN_DETAIL_3rd: (n) => `5개 일치 (1,500,000원) - ${n}개\n`,
    WIN_DETAIL_2nd: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개\n`,
    WIN_DETAIL_1st: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
    PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.\n`
  },
  ERROR: {
    PREFIX: "[ERROR] ",
  }
});

class App {
  async run() {

    // 로또구입금액입력()
    //   구입금액 검사()
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
  #lottos

  purchaseLottoAmount() {
    this.#validateLottoAmount()
  }

  #validateLottoAmount(number) {

  }

}

export default App;
