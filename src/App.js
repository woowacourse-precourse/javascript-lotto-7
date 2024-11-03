import { Console, Random } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, PRINT_MESSAGE, ERROR_MESSAGE } from './constants/message.js';
import { LOTTO } from './constants/lotto.js';
import { BASE_LOCALE } from './constants/locale.js';
import Lotto from './Lotto.js';
import Validate from './Validate.js';
import Convert from './Convert.js';

class App {
  async run() {
    const amount = await this.safeAsyncExecute(this.userAmountInput.bind(this));
    const lottos = this.buyLottos(amount);
    const winningNumbers = await this.userWinningNumbersInput();
    const bonusNumber = await this.userBonusNumberInput(winningNumbers);

    const countedWinningLottos = this.countWinningLottos(lottos, winningNumbers, bonusNumber);
    this.#printLottosResult(countedWinningLottos);
  }

  async userAmountInput() {
    const amountInput = await Console.readLineAsync(`${INPUT_MESSAGE.AMOUNT}\n`);
    const amount = this.convertToAmount(amountInput);

    return amount;
  }

  async userWinningNumbersInput() {
    const winningNumbersInput = await Console.readLineAsync(`\n${INPUT_MESSAGE.WINNING_NUMBERS}\n`);
    const winningNumbers = this.convertToWinningNumbers(winningNumbersInput);

    return winningNumbers;
  }

  async userBonusNumberInput(winningNumbers) {
    const bonusNumberInput = await Console.readLineAsync(`\n${INPUT_MESSAGE.BONUS_NUMBERS}\n`);
    const bonusNumber = this.convertToBonusNumber(bonusNumberInput);

    this.#validateBonusNumberUnique(winningNumbers, bonusNumber);

    return bonusNumber;
  }

  async safeAsyncExecute(callback) {
    try {
      return await callback();
    } catch (err) {
      Console.print(err.message);
      return this.safeAsyncExecute(callback);
    }
  }

  convertToAmount(amountInput) {
    this.#validateAmountInput(amountInput);

    const amount = Convert.toNumber(amountInput);

    return amount;
  }

  convertToWinningNumbers(winningNumbersInput) {
    const winningNumbers = winningNumbersInput
      .split(',')
      .map(stringWinningNumber => this.convertToWinningNumber(stringWinningNumber));

    this.#validateWinningNumbersCount(winningNumbers);

    return winningNumbers;
  }

  convertToWinningNumber(stringWinningNumber) {
    this.#validateWinningNumberIsNumber(stringWinningNumber);
    this.#validateWinningNumberRange(stringWinningNumber);

    const winningNumber = Convert.toNumber(stringWinningNumber);

    return winningNumber;
  }

  convertToBonusNumber(bonusNumberInput) {
    this.#validateBonusNumberIsNumber(bonusNumberInput);

    const bonusNumber = Convert.toNumber(bonusNumberInput);

    return bonusNumber;
  }

  buyLottos(amount) {
    const lottoCount = amount / LOTTO.PRICE;

    this.#validateClearChange(lottoCount);
    this.#printBuyLottoCount(lottoCount);

    return Array.from({ length: lottoCount }, () => this.buyLotto());
  }

  buyLotto() {
    const lottoUniqueNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.BASIC_COUNT
    ).sort((a, b) => a - b);

    this.#printLottoNumbers(lottoUniqueNumbers);

    const lotto = new Lotto(lottoUniqueNumbers);

    return lotto;
  }

  countWinningLottos(lottos, winningNumbers, bonusNumber) {
    let countedWinningLottos = Lotto.getWinnings().map(winning => ({ ...winning, count: 0 }));

    lottos.forEach(lotto => {
      countedWinningLottos = this.countWinningLotto(lotto, winningNumbers, bonusNumber, countedWinningLottos);
    });

    return countedWinningLottos;
  }

  countWinningLotto(lotto, winningNumbers, bonusNumber, countedWinningLotto) {
    const win = lotto.win(winningNumbers, bonusNumber);

    if (!win) return countedWinningLotto;

    return countedWinningLotto.map(countedWinning => {
      if (countedWinning.rank === win.rank) return { ...countedWinning, count: countedWinning.count + 1 };
      return countedWinning;
    });
  }

  #printBuyLottoCount(lottoCount) {
    const buyLottoCountMessage = this.#buyLottoCountMessage(lottoCount);

    Console.print(buyLottoCountMessage);
  }

  #printLottoNumbers(lottoNumbers) {
    const lottoNumbersMessage = this.#lottoNumbersMessage(lottoNumbers);

    Console.print(lottoNumbersMessage);
  }

  #printLottosResult(countedWinningLottos) {
    const lottoResultInitMessage = this.#lottoResultInitMessage();

    Console.print(lottoResultInitMessage);

    countedWinningLottos.forEach(countedWinningLotto => this.#printLottoResult(countedWinningLotto));
  }

  #printLottoResult(countedWinningLotto) {
    const lottoResultMessage = this.#lottoResultMessage(countedWinningLotto);

    Console.print(lottoResultMessage);
  }

  #buyLottoCountMessage(lottoCount) {
    return `\n${lottoCount}개를 구매했습니다.`;
  }

  #lottoNumbersMessage(lottoNumbers) {
    return `[${lottoNumbers.join(', ')}]`;
  }

  #lottoResultInitMessage() {
    return `\n${PRINT_MESSAGE.LOTTO_RESULT_INIT}\n---`;
  }

  #lottoResultMessage(countedWinningLotto) {
    const { basicCount, bonusCount, prize, count } = countedWinningLotto;
    const convertedPrize = prize.toLocaleString(BASE_LOCALE);

    if (bonusCount > 0) return `${basicCount}개 일치, 보너스 볼 일치 (${convertedPrize}원) - ${count}개`;

    return `${basicCount}개 일치 (${convertedPrize}원) - ${count}개`;
  }

  #validateAmountInput(amountInput) {
    if (!Validate.number(amountInput)) throw new Error(ERROR_MESSAGE.AMOUNT_IS_NOT_NUMBER);
  }

  #validateClearChange(number) {
    if (!Validate.integer(number)) throw new Error(ERROR_MESSAGE.EXIST_CHANGE);
  }

  #validateWinningNumbersCount(winningNumbers) {
    if (!Validate.arrayCount(winningNumbers, LOTTO.BASIC_COUNT))
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS_IS_NOT_BASIC_COUNT);
  }

  #validateWinningNumberIsNumber(winningNumber) {
    if (!Validate.number(winningNumber)) throw new Error(ERROR_MESSAGE.WINNING_NUMBER_IS_NOT_NUMBER);
  }

  #validateWinningNumberRange(winningNumber) {
    if (!Validate.range(winningNumber, LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER))
      throw new Error(ERROR_MESSAGE.WINNING_NUMBERS_IS_NOT_LOTTO_RANGE);
  }

  #validateBonusNumberIsNumber(bonusInput) {
    if (!Validate.number(bonusInput)) throw new Error(ERROR_MESSAGE.BONUS_NUMBER_IS_NOT_NUMBER);
  }

  #validateBonusNumberUnique(winningNumbers, bonusNumber) {
    if (!Validate.valueIsUnique(winningNumbers, bonusNumber)) throw new Error(ERROR_MESSAGE.BONUS_NUMBER_IS_NOT_UNIQUE);
  }
}

export default App;
