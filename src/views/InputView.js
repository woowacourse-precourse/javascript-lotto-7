import { Console } from '@woowacourse/mission-utils';

class InputView {
  async inputPurchaseAmount() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  async inputWinningNumbers() {
    return await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  async inputBonusNumber() {
    return await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }
}

export default InputView;
