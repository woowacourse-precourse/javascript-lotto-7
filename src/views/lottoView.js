import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/inputMessage.js';

class LottoView {
  static async InputPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmountPrompt,
    );
    return purchaseAmountInput;
  }

  static async PrintLottos(amount, lottos) {
    Console.print(`${amount}${INPUT_MESSAGE.purchaseMessage}`);
    lottos.forEach((element) => {
      Console.print(element);
      Console.print('\n');
    });
    Console.print('\n');
  }

  static async InputwinningNumbers() {
    const winningNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbersPrompt,
    );
    Console.print('\n');
    return winningNumberInput;
  }

  static async InputbounusNumber() {
    const bounusNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumberPrompt,
    );
    Console.print('\n');
    return bounusNumberInput;
  }

  static PrintWinningStatistics({
    match3Count,
    match4Count,
    match5Count,
    match5WithBonusCount,
    match6Count,
    profitRate,
  }) {
    Console.print(`${INPUT_MESSAGE.winningTotalMessage}\n`);
    Console.print(`${INPUT_MESSAGE.match3Message(match3Count)}\n`);
    Console.print(`${INPUT_MESSAGE.match4Message(match4Count)}\n`);
    Console.print(`${INPUT_MESSAGE.match5Message(match5Count)}\n`);
    Console.print(
      `${INPUT_MESSAGE.match5WithBonusMessage(match5WithBonusCount)}\n`,
    );
    Console.print(`${INPUT_MESSAGE.match6Message(match6Count)}\n`);
    Console.print(`${INPUT_MESSAGE.totalProfitMessage(profitRate)}\n`);
  }
}

export default LottoView;
