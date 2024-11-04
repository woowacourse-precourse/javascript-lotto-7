import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";
import STATISTICS_MESSAGE from "../constants/statistics.js";

class LottoView {
  async inputLottoAmount() {
    const userInputAmounts = await Console.readLineAsync(
      MESSAGES.INPUT_PURCHASE_AMOUNT
    );
    return userInputAmounts;
  }
  //로또 발행 숫자
  printGetLottos(count) {
    Console.print(`\n${count}${MESSAGES.USER_LOTTO_PURCHASE}`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  //당첨번호 입력
  async inputWinningNumber() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBER
    );
    return winningNumbers.split(",").map(Number);
  }

  //보너스번호 입력
  async inputBonusNumber() {
    const bonusNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER
    );
    return Number(bonusNumbers);
  }
  printError(message) {
    Console.print(message);
  }

  printStatistics(statistics) {
    const messages = [
      { label: STATISTICS_MESSAGE.FIFTH, value: statistics.fifth },
      { label: STATISTICS_MESSAGE.FOURTH, value: statistics.fourth },
      { label: STATISTICS_MESSAGE.THIRD, value: statistics.third },
      { label: STATISTICS_MESSAGE.SECOND, value: statistics.second },
      { label: STATISTICS_MESSAGE.FIRST, value: statistics.first },
      {
        label: STATISTICS_MESSAGE.RATE_OF_RETURN,
        value: `${statistics.rate}${STATISTICS_MESSAGE.PERCENT}`,
      },
    ];
    Console.print(STATISTICS_MESSAGE.STATISTICS_DEFAULT_MESSAGE);
    messages.forEach(({ label, value }) => {
      Console.print(`${label}${value}개`);
    });
  }
}

export default LottoView;
