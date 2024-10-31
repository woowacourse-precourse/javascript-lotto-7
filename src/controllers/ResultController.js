import WinningLotto from '../models/WinningLotto.js';
import Validator from '../Validator.js';
import InputView from '../views/InputView.js';

class ResultController {
  #winningNumbers;

  #lottos;

  #prizeCounts = {
    3: 0,
    4: 0,
    5: 0,
    '5Bonus': 0,
    6: 0,
  };

  constructor(lottos) {
    this.#lottos = lottos;
  }

  async setWinningNumbers() {
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    this.#winningNumbers = new WinningLotto(winningNumbers, bonusNumber);
  }

  async getWinningNumbers() {
    const inputWinningNumbers = await InputView.getWinningNumbers();
    const winningNumbers = this.parseWinningNumbers(inputWinningNumbers);

    Validator.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const inputBonusNumber = await InputView.getBonusNumber();
    const bonusNumber = Number(inputBonusNumber);

    Validator.validateBonusNumber(bonusNumber, winningNumbers);

    return bonusNumber;
  }

  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));

    return numbers;
  }

  calculateResult() {
    this.#lottos.forEach((lotto) => {
      const rank = this.getMatchingCount(lotto);

      if (rank) this.#prizeCounts[rank] += 1;
    });

    return this.#prizeCounts;
  }

  getMatchingCount(lottoNumbers) {
    const winningNumbers = this.#winningNumbers.getWinningNumbers();
    const bonusNumber = this.#winningNumbers.getBonusNumber();
    const matchingCount = lottoNumbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;
    const isBonusMatched = lottoNumbers.includes(bonusNumber);

    if (matchingCount === 6) return 6;
    if (matchingCount === 5 && isBonusMatched) return '5Bonus';
    if (matchingCount === 5) return 5;
    if (matchingCount === 4) return 4;
    if (matchingCount === 3) return 3;

    return null;
  }
}

export default ResultController;
