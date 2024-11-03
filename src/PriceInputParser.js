import { Console } from '@woowacourse/mission-utils';

class PriceInputParser {
  async readLoop() {
    try {
      const priceString = await this.#read();
      const price = Number(priceString);

      this.#validate(price);

      return price;
    } catch (error) {
      Console.print(error.message);

      return this.readLoop();
    }
  }

  #read() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  #validate(price) {
    if (Number.isNaN(price)) {
      throw new Error('[ERROR] 구매 금액은 숫자여야 합니다.');
    }

    if (price <= 0) {
      throw new Error('[ERROR] 구매 금액은 0보다 커야 합니다.');
    }

    if (price % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    }
  }
}

export default PriceInputParser;
