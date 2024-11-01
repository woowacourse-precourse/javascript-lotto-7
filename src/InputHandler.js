import { MissionUtils } from '@woowacourse/mission-utils';

class InputHandler {
  getInput(prompt) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(prompt, (input) => {
        resolve(input);
      });
    });
  }
}
export default InputHandler;
