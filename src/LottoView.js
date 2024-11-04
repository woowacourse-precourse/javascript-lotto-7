import { RANK_STRING, STRING_PRIZE_MONEY } from "./constants.js";

class LottoView {
  #console;

  constructor(console) {
    this.#console = console;
  }

  async receiveBudget() {
    const userBudget = await this.#console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Number(userBudget);
  }

  async receiveWinningNumber() {
    const userInputWinningNumbers = await this.#console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return userInputWinningNumbers.split(",").map((el) => Number(el));
  }

  async receiveBonusNumber() {
    const bonusNumber = await this.#console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return Number(bonusNumber);
  }

  printNumberOfLottos(maxLottoCount) {
    this.#console.print(`${maxLottoCount}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      this.#console.print(`[${lottoNumbers.join(", ")}]`);
    });
  }
  // 전달받은 winningStats의 내부 정보를 view가 알고있음
  printWinningStats(winngingStats) {
    console.log(winngingStats);
    this.#console.print("당첨 통계\n---");

    const winningStatTemplates = Object.keys(winngingStats).map((rank) => {
      return `${RANK_STRING[rank]} (${STRING_PRIZE_MONEY[rank]}원) - ${winngingStats[rank]}개`;
    });

    this.#console.print(winningStatTemplates.join("\n"));
  }

  printProfitMargin(profitMargin) {
    this.#console.print(`총 수익률은 ${profitMargin}%입니다.`);
  }
}

export default LottoView;
