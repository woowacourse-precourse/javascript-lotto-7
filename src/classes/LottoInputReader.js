import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoInputReader {
  static async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const lottoPurchaseAmount = Number(input);

    return lottoPurchaseAmount;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumber = new Lotto(
      input
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
    );

    return winningNumber;
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    const bonusNumber = Number(input);

    return bonusNumber;
  }
}

export default LottoInputReader;
