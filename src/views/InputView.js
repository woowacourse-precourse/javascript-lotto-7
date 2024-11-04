import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  static async inputPurchaseAmount() {
    return await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
  }

  static async inputWinningNumber() {
    return await MissionUtils.Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
  }

  static async inputBonusNumber() {
    return await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
  }
}

export default InputView;
