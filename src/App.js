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
    const [amount, count, lottos] = await this.getLottoInfomation();
    View.printResult(`\n${count + INFO_MESSAGES.PRINT_LOTTOS}`);
    View.displayLottos(lottos);

    const winningLotto = await this.getWinningLotto();
    const totalCounts = await this.getTotalCounts(lottos, winningLotto);
    View.displayResultMessages(totalCounts);

    const profitRate = LottoMachine.getProfitRate(totalCounts, amount);
    View.displayProfitRate(profitRate);
  }

  async getTotalCounts(lottos, winningLotto) {
    const number = await View.readInput(PROMPT_MESSAGES.INPUT_BONUS_NUMBER);
    const bonusNumber = new BonusNumber(number, winningLotto);

    const totalCounts = LottoMachine.getMatchCounts(
      lottos,
      winningLotto,
      bonusNumber.number
    );

    return totalCounts;
  }

  async getWinningLotto() {
    const numbers = await View.readInput(PROMPT_MESSAGES.INPUT_LOTTOS);
    const validWinningNumbers = this.#validateWinningNumbers(numbers);
    const winningLotto = new Lotto(validWinningNumbers);

    return winningLotto.numbers;
  }

  async getLottoInfomation() {
    const amountInput = await View.readInput(PROMPT_MESSAGES.INPUT_MONEY);
    const money = new Money(amountInput);
    const count = money.count;
    const amount = money.amount;
    const lottos = LottoMachine.generateLottos(count);

    return [amount, count, lottos];
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
