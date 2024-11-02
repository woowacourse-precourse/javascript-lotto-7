import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  static async readLineAsync(message) {
    return MissionUtils.Console.readLineAsync(message);
  }
}

export default InputView;
