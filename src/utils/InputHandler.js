import { Console } from '@woowacourse/mission-utils';

class InputHandler {
  static async input(input) {
    await Console.readLineAsync(input);
  }

  async validateInputHandler(message, validator) {
    while (true) {
      try {
        const input = this.input(message);
        validator(input);
        return input;
      } catch (error) {
        this.print(error.message);
      }
    }
  }
}
export default InputHandler;
