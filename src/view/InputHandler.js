import { MissionUtils } from '@woowacourse/mission-utils';

class InputHandler {
  async getInput(prompt) {
    return await MissionUtils.Console.readLineAsync(`\n${prompt}`); // readLineAsync 사용
  }


}

export default InputHandler;
