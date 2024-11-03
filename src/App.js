import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoMachine from './lottoMachine.js';
import {
  BONUS_NUMBER_INPUT_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_INPUT_MAX,
  LOTTO_INPUT_MESSAGE,
  LOTTO_INPUT_MIN,
} from './constant.js';

class App {
  #lotto;
  #firstPrice;

  async run() {
    const lottoMachine = new LottoMachine();
    const price = await lottoMachine.buy();
    const lottoArr = lottoMachine.release(price);

    await this.#inputFirstPlace();
    const bonusNumber = await this.#inputBonusNumber();
    const result = this.#lotto.checkLottoResult(lottoArr, bonusNumber);
    this.#lotto.printLottoResult(result, price);
  }

  async #inputFirstPlace() {
    while (true) {
      try {
        Console.print(LOTTO_INPUT_MESSAGE);
        const inputNumber = await Console.readLineAsync('');
        const numbers = inputNumber.split(',').map((item) => +item);
        this.#lotto = new Lotto(numbers);
        this.#firstPrice = numbers;
        Console.print('');
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #inputBonusNumber() {
    while (true) {
      try {
        Console.print(BONUS_NUMBER_INPUT_MESSAGE);
        const bonusNumber = +(await Console.readLineAsync(''));
        if (!this.#validateBonusNumber(bonusNumber)) {
          throw new Error(ERROR_MESSAGE);
        }
        Console.print('');
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) return false;
    if (bonusNumber < LOTTO_INPUT_MIN || bonusNumber > LOTTO_INPUT_MAX) return false;
    if (bonusNumber !== Math.floor(bonusNumber)) return false;
    if (this.#firstPrice.includes(bonusNumber)) return false;
    return true;
  }
}

export default App;
