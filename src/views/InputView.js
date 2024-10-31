import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getPurchaseCost() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요\n');
    return input;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return input.split(',').map((name) => Number(name.trim()));
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return Number(input);
  }
}
export default InputView;
