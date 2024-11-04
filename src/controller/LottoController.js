import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Lotto from "../models/Lotto.js";
import { generateResultStatistics } from "./result.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
  async run() {
    try {
      const lottoCount = await InputView.getPurchaseAmount();
      MissionUtils.Console.print(`${lottoCount}개 구매했습니다.`);

      const lottos = Array.from({ length: lottoCount }, () => new Lotto());
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
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default LottoController;
