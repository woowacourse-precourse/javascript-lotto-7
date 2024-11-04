import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Lotto from "../models/Lotto.js";
import {
  generateResultStatistics,
  calculateTotalPrize,
} from "../utils/result.js";
import { calculateProfitRate } from "../utils/calculator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
  async run() {
    try {
      const purchaseAmount = await InputView.getPurchaseAmount();
      MissionUtils.Console.print(`${purchaseAmount}개 구매했습니다.`);

      const lottos = Array.from({ length: purchaseAmount }, () => new Lotto());
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

      // 총 당첨 금액 계산 및 수익률 출력
      const totalPrize = calculateTotalPrize(results);
      const profitRate = calculateProfitRate(totalPrize, purchaseAmount * 1000); // 구매 금액을 원 단위로 계산
      OutputView.printProfitRate(profitRate);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default LottoController;
