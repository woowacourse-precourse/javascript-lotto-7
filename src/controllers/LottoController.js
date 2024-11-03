import InputHandler from "../handler/InputHandler.js";
import OutputHandler from "../handler/OutputHandler.js";
import LottoMachine from "../models/LottoMachine.js";
import LottoChecker from "../models/LottoChecker.js";

class LottoController {
  async play() {
    try {
      const { lottos, purchaseAmount } =
        await this.#purchaseAndGenerateLottos();
      const { winningNumbers, bonusNumber } = await this.#getWinningInfo();
      await this.#checkAndShowResults(
        lottos,
        winningNumbers,
        bonusNumber,
        purchaseAmount
      );
    } catch (error) {
      throw error;
    }
  }

  // 로또 구매 개수에 따른 로또 생성
  async #purchaseAndGenerateLottos() {
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    const lottos = LottoMachine.generateLottos(purchaseAmount);
    OutputHandler.showLottoResult(lottos);

    return { lottos, purchaseAmount };
  }

  // 당첨 번호와 보너스 번호 입력
  async #getWinningInfo() {
    const winningNumbers = await InputHandler.getWinningNumbers();
    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);

    return { winningNumbers, bonusNumber };
  }

  // 당첨 확인 및 결과 출력
  async #checkAndShowResults(
    lottos,
    winningNumbers,
    bonusNumber,
    purchaseAmount
  ) {
    const checker = new LottoChecker(lottos, winningNumbers, bonusNumber);
    const { results, totalPrize } = checker.checkLottos();
    OutputHandler.showWinningStatisticsResult(
      results,
      totalPrize,
      purchaseAmount
    );
  }
}

export default LottoController;
