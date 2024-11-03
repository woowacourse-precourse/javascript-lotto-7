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
    const lottos = this.getRandomLottos(amount);

    View.printResult(`\n${count + INFO_MESSAGES.PRINT_LOTTOS}`);
    View.displayLottos(lottos);

    const winningLottoInput = await View.readInput(
      PROMPT_MESSAGES.INPUT_LOTTOS
    );
    const winningLotto = this.getwinningLotto(winningLottoInput);

    const bonusNumber = await View.readInput(
      PROMPT_MESSAGES.INPUT_BONUS_NUMBER
    );

    const totalCounts = getTotalCounts(lottos, bonusNumber, winningLotto);

    View.displayResult(totalCounts);
  }

  getTotalCounts(lottos, bonusNumberInput, winningLotto) {
    const bonusNumber = new BonusNumber(bonusNumberInput, winningLotto);

    const totalCounts = LottoMachine.getTotalCount(
      lottos,
      winningLotto,
      bonusNumber.number
    );

    return totalCounts;
  }

  getwinningLotto(numbers) {
    const validWinningNumbers = this.#validateWinningNumbers(numbers);
    const winningLotto = new Lotto(validWinningNumbers);

    return winningLotto.numbers;
  }

  getRandomLottos(amount) {
    const money = new Money(amount);
    const count = money.getCount();

    return LottoMachine.generateLottos(count);
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
