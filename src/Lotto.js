import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.');
    }
  }

  async getPriceLoop() {
    try {
      const priceString = await this.readPriceString();
      this.validatePriceString(priceString);
      return Number(priceString);
    } catch (error) {
      Console.print(error.message);
      return this.getPriceLoop();
    }
  }
}

export default Lotto;
