import { Console } from '@woowacourse/mission-utils';

class Handler {
  static async input(input) {
    await Console.readLineAsync(input);
  }

  static output(output) {
    Console.print(output);
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
export default Handler;
