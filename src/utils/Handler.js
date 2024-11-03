import { Console } from '@woowacourse/mission-utils';

class Handler {
  static async input(message) {
    const inputString = await Console.readLineAsync(message);
    return inputString;
  }

  static print(output) {
    Console.print(output);
  }

  static listPrintHandler(list) {
    list.forEach((number) => {
      this.print(`[${number.join(', ')}]`);
    });
  }

  static async validateHandler(message, validator) {
    while (true) {
      try {
        const input = await this.input(message); // await 추가
        validator(input);
        return input;
      } catch (error) {
        this.print(error.message);
      }
    }
  }
}

export default Handler;
