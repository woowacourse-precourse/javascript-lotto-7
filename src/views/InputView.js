import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getPurchaseCost() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요\n');
    return this.convertToNumberOrNull(input);
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return input.split(',').map((number) => {
      const trimmedNumber = number.trim();
      return this.convertToNumberOrNull(trimmedNumber);
    });
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return this.convertToNumberOrNull(input);
  }

  convertToNumberOrNull(input) {
    if (input === '') {
      return null;
    }
    return Number(input);
  }
}
export default InputView;
