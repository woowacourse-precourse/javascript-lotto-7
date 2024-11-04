// @ts-nocheck
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Lotto from "../models/Lotto.js";
import {
  generateResultStatistics,
  calculateTotalPrize,
} from "../utils/result.js";
import { calculateProfitRate } from "../utils/calculator.js";

class LottoController {
  async run() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();

      // 로또 생성
      const lottos = this.createLottos(purchaseAmount);
      OutputView.printLottos(lottos);

      // 당첨 번호와 보너스 번호 입력받기
      const winningNumbers = await InputView.getWinningNumbers();
      const bonusNumber = await InputView.getBonusNumber(winningNumbers);

      // 당첨 결과 통계 생성 및 출력
      const results = generateResultStatistics(
        lottos,
        winningNumbers,
        bonusNumber
      );
      OutputView.printResultStatistics(results);

      // 총 당첨 금액 계산
      const totalPrize = calculateTotalPrize(results);

      // 수익률 계산
      const profitRate = calculateProfitRate(totalPrize, purchaseAmount);

      // 수익률 출력
      OutputView.printProfitRate(profitRate);
    } catch (error) {
      return;
    }
  }

  createLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    return Array.from({ length: lottoCount }, () => new Lotto());
  }
}

export default LottoController;
