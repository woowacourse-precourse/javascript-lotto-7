import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoMachine from './lottoMachine.js';

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
        Console.print('당첨 번호를 입력해 주세요.');
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
        Console.print('보너스 번호를 입력해 주세요.');
        const bonusNumber = +(await Console.readLineAsync(''));
        if (!this.#validateBonusNumber(bonusNumber)) {
          throw new Error('[ERROR] 잘못된 입력입니다. 다시 입력해 주세요.');
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
    if (bonusNumber < 1 || bonusNumber > 45) return false;
    if (bonusNumber !== Math.floor(bonusNumber)) return false;
    if (this.#firstPrice.includes(bonusNumber)) return false;
    return true;
  }
}

export default App;
