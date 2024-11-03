import { MissionUtils } from '@woowacourse/mission-utils';

class InputHandler {
  async getInput(prompt) {
    return await MissionUtils.Console.readLineAsync(`\n${prompt}`); // readLineAsync 사용
  }

  async getWinningNumbersInput(prompt) {
    const input = await this.getInput(prompt);
    const numbers = input.split(',').map((num) => Number(num.trim()));
    return numbers;
  }
}

export default InputHandler;
