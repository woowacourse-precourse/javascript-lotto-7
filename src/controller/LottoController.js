import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Lotto from "../models/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LottoController {
  async run() {
    try {
      const lottoCount = await InputView.getPurchaseAmount();
      MissionUtils.Console.print(`${lottoCount}개 구매했습니다.`);

      const lottos = Array.from({ length: lottoCount }, () => new Lotto());
      OutputView.printLottos(lottos);

      // 당첨 번호 입력받기
      const winningNumbers = await InputView.getWinningNumbers();
      MissionUtils.Console.print(`당첨 번호: ${winningNumbers.join(", ")}`);

      // 보너스 번호 입력받기
      const bonusNumber = await InputView.getBonusNumber(winningNumbers);
      MissionUtils.Console.print(`보너스 번호: ${bonusNumber}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default LottoController;
