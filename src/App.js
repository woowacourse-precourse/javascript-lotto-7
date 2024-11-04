import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      await this.#getPrice();
      await this.#getWinNumber();
      await this.#getBonusNumber();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #getPrice() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const price = Number(input);

    if (isNaN(price) || price % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위입니다.');
    }

    return price;
  }

  async #getWinNumber() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map(Number);

    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 당첨 번호는 숫자만 입력 가능합니다.');
    }

    return numbers;
  }

  async #getBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error('[ERROR] 유효하지 않은 보너스 번호입니다.');
    }

    return number;
  }
}

export default App;
