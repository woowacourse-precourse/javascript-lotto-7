import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const purchaseAmount = await this.#inputPurchaseAmount();
      const winningNumbers = await this.#inputWinningNumbers();
      const bonusNumber = await this.#inputBonusNumber(winningNumbers);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #inputPurchaseAmount() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return this.#validatePurchaseAmount(Number(amount));
  }

  #validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) || amount < 1000 || amount % 1000 !== 0) {
      Console.print('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
      return this.#inputPurchaseAmount();
    }
    return amount;
  }

  async #inputWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return this.#validateWinningNumbers(input.split(',').map(Number));
  }

  #validateWinningNumbers(numbers) {
    if (
      numbers.length !== 6 ||
      new Set(numbers).size !== 6 ||
      numbers.some((n) => n < 1 || n > 45)
    ) {
      Console.print(
        '[ERROR] 로또 번호는 중복 없이 1부터 45 사이의 숫자 6개여야 합니다.'
      );
      return this.#inputWinningNumbers();
    }
    return numbers;
  }

  async #inputBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return this.#validateBonusNumber(Number(input), winningNumbers);
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (
      !Number.isInteger(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45 ||
      winningNumbers.includes(bonusNumber)
    ) {
      Console.print(
        '[ERROR] 보너스 번호는 1부터 45 사이의 숫자 중 당첨 번호와 중복되지 않게 입력해야 합니다.'
      );
      return this.#inputBonusNumber(winningNumbers);
    }
    return bonusNumber;
  }

}

export default App;
