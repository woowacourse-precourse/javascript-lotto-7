import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/inputMessage';

class LottoView {
  static async InputPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmountPrompt,
    );
    console.print('\n');
    return purchaseAmountInput;
  }

  static async PrintLottos(amount, lottos) {
    console.print(`${amount}${INPUT_MESSAGE.purchaseMessage}`);
    lottos.forEach((element) => {
      console.print(element);
      console.print('\n');
    });
    console.print('\n');
  }

  static async InputwinningNumbers() {
    const winningNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbersPrompt,
    );
    console.print('\n');
    return winningNumberInput;
  }

  static async InputbounusNumber() {
    const bounusNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.bonusNumberPrompt,
    );
    console.print('\n');
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
    console.print(`${INPUT_MESSAGE.winningTotalMessage}\n`);
    console.print(`${INPUT_MESSAGE.match3Message(match3Count)}\n`);
    console.print(`${INPUT_MESSAGE.match4Message(match4Count)}\n`);
    console.print(`${INPUT_MESSAGE.match5Message(match5Count)}\n`);
    console.print(
      `${INPUT_MESSAGE.match5WithBonusMessage(match5WithBonusCount)}\n`,
    );
    console.print(`${INPUT_MESSAGE.match6Message(match6Count)}\n`);
    console.print(`${INPUT_MESSAGE.totalProfitMessage(profitRate)}\n`);
  }
}

export default LottoView;
