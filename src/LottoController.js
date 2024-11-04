import { INPUT_MESSAGE, OUTPUT_MESSAGE } from './constant';
import { Console } from '@woowacourse/mission-utils';
import { validateAmount, validateBonus, validateNumbers } from './validate';

class LottoController {
  async getLottoAmount() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_LOTTO_AMOUNT
    );
    validateAmount(amount);
    return parseInt(amount, 10);
  }
  async getLottoNumber() {
    const numbers = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_LOTTO_NUMBERS
    );
    validateNumbers(numbers);
    return numbers.split(',').map((num) => parseInt(num, 10));
  }
  async getLottoBonusNumber(numbers) {
    const bonus = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_BONUS_NUMBERS
    );
    validateBonus(bonus, numbers);
    return bonus;
  }
  printLottoCount(cnt) {
    Console.print(OUTPUT_MESSAGE.LOTTO_CNT(cnt));
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }
}

export default LottoController;
