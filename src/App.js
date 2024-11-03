import {
  PROMPT_MESSAGES,
  INFO_MESSAGES,
  ERROR_MESSAGES,
  NUMBER,
  checkEmpty,
  handleError,
} from './shared/index.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import Money from './Money.js';
import View from './View.js';
import BonusNumber from './BonusNumber.js';

class App {
  static DELIMITER = ',';

  async run() {
    const amount = await View.readInput(PROMPT_MESSAGES.INPUT_MONEY);
    const money = new Money(amount);
    const count = money.getCount();
    const lottos = LottoMachine.generateLottos(count);

    View.printResult(`\n${count + INFO_MESSAGES.PRINT_LOTTOS}`);
    View.displayLottos(lottos);

    const numbers = await View.readInput(PROMPT_MESSAGES.INPUT_LOTTOS);
    const validWinningNumbers = this.#validateWinningNumbers(numbers);
    const winningLotto = new Lotto(validWinningNumbers);

    const bonusNumberInput = await View.readInput(
      PROMPT_MESSAGES.INPUT_BONUS_NUMBER
    );
    const bonusNumber = new BonusNumber(bonusNumberInput, winningLotto.numbers);
    const totalCounts = LottoMachine.getTotalCount(
      lottos,
      winningLotto.numbers,
      bonusNumber.number
    );

    View.displayResult(totalCounts);
  }

  #validateWinningNumbers(numbers) {
    checkEmpty(numbers, ERROR_MESSAGES.INVALID_EMPTY);
    this.#checkValidDelimiter(numbers);

    return numbers.split(App.DELIMITER).map(Number);
  }

  #checkValidDelimiter(numbers) {
    const isInValidLength = numbers.length !== NUMBER.VALID_LENGTH;
    const isInValidDelimiter = !numbers.includes(App.DELIMITER);

    handleError(
      isInValidDelimiter && isInValidLength,
      ERROR_MESSAGES.INVALID_DELIMITER
    );
  }
}

export default App;
