import { MissionUtils } from '@woowacourse/mission-utils';

class InputHandler {
  async getInput(prompt, winningNum = false) {
    const input = await MissionUtils.Console.readLineAsync(`\n${prompt}`);

    if (winningNum) {
      return input.split(',').map((num) => Number(num.trim()));
    }

    // 그렇지 않으면 원래 문자열 그대로 반환
    return input;
  }
}

export default InputHandler;