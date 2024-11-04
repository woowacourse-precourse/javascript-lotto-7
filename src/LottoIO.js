import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";

class LottoIO {
  async promptPurchaseAmount() {
    return await MissionUtils.Console.readLineAsync(
      MESSAGES.PURCHASE_AMOUNT_PROMPT
    );
  }

  async promptWinningNumbers() {
    return await MissionUtils.Console.readLineAsync(
      MESSAGES.WINNING_NUMBER_PROMPT
    );
  }

  async promptBonusNumber() {
    return await MissionUtils.Console.readLineAsync(
      MESSAGES.BONUS_NUMBER_PROMPT
    );
  }

  printLottoTickets(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}${MESSAGES.LOTTO_PURCHASED}`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  printStatistics(statistics, profitRate) {
    MissionUtils.Console.print(MESSAGES.RESULT_HEADING);
    MESSAGES.PRIZES.forEach(({ message, key }) => {
      MissionUtils.Console.print(`${message}${statistics[key]}개`);
    });
    MissionUtils.Console.print(
      `${MESSAGES.PROFIT_RATE}${profitRate.toFixed(1)}${MESSAGES.PROFIT_SUFFIX}`
    );
  }
}

export default LottoIO;
