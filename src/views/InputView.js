import { Console } from '@woowacourse/mission-utils';

class InputView {
  async readLottoAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return parseInt(input, 10);
  }

  async readWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return input.split(',').map((number) => parseInt(number.trim(), 10));
  }

  async readBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return parseInt(input, 10);
  }
}

export default InputView;
