import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/inputMessage.js';

class LottoView {
  static async InputPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmountPrompt,
    );
    return purchaseAmountInput;
  }

  static PrintLottos(count, lottos) {
    Console.print(INPUT_MESSAGE.purchaseMessage(count));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumber().join(', ')}]`);
    });
  }

  static async InputWinningNumbers() {
    const winningNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbersPrompt,
    );
    return winningNumberInput;
  }

  static async InputBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumberPrompt,
    );
    return bonusNumberInput;
  }

  static PrintWinningStatistics(rankCounts, profitRate) {
    Console.print(`${INPUT_MESSAGE.winningTotalMessage}`);

    const rankMessages = [
      INPUT_MESSAGE.match3Message(rankCounts[3]),
      INPUT_MESSAGE.match4Message(rankCounts[4]),
      INPUT_MESSAGE.match5Message(rankCounts[5]),
      INPUT_MESSAGE.match5WithBonusMessage(rankCounts[5.5]),
      INPUT_MESSAGE.match6Message(rankCounts[6]),
    ];

    rankMessages.forEach((message) => {
      Console.print(`${message}`);
    });

    Console.print(`${INPUT_MESSAGE.totalProfitMessage(profitRate)}`);
  }
}

export default LottoView;
