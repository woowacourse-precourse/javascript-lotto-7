import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      throw new Error('[ERROR] 입력 중 오류가 발생했습니다.');
    }
  }
}

export default InputView;
