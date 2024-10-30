import { Console } from '@woowacourse/mission-utils';

class LottoInputReader {
  static async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const lottoPurchaseAmount = Number(input);

    return lottoPurchaseAmount;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumber = input.split(',').map(Number);

    return winningNumber;
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(input);

    return bonusNumber;
  }
}

export default LottoInputReader;
