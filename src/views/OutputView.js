import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  updateLotto({ lottoCount, lottoList }) {
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottos(lottoList);
  },

  updatePrize({ prize, returnRate }) {
    OutputView.printResultHeader();
    ["fifth", "forth", "third", "second", "first"].forEach((rank) => {
      const { condition, money, count } = prize[rank];
      if (rank === "second") {
        OutputView.printBonusResult(condition, money.toLocaleString(), count);
      } else {
        OutputView.printResult(condition, money.toLocaleString(), count);
      }
    });
    OutputView.printReturnRate(returnRate);
  },

  printLottoCount(count) {
    MissionUtils.Console.print(`\n${count}개를 구매했습니다.`);
  },
  /**
   *
   * @param {number[][]} lottos
   */
  printLottos(lottos) {
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(", ")}]`);
    });
    OutputView.printNewLine();
  },
  printNewLine() {
    MissionUtils.Console.print("");
  },
  printResultHeader() {
    MissionUtils.Console.print("\n당첨 통계\n---");
  },
  printResult(condition, money, count) {
    MissionUtils.Console.print(`${condition}개 일치 (${money}원) - ${count}개`);
  },
  printBonusResult(condition, money, count) {
    MissionUtils.Console.print(`${condition}개 일치, 보너스 볼 일치 (${money}원) - ${count}개`);
  },
  printReturnRate(rate) {
    MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
  },
  printError(message) {
    MissionUtils.Console.print(message);
  },
};

export default OutputView;
