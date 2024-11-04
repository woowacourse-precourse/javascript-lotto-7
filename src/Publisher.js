import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import { generateRandomNumbers } from './utils/index.js';
import { WinningChecker } from './WinningChecker.js';

export class Publisher {
  #winningChecker;

  #winningNumbers;

  #bonusNumber;

  setLottoNumber = (winningNumbers, bonusNumber) => {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  };

  generateLotto = (purchaseQuantity) => {
    const lottoNumbers = [];
    for (let i = 0; i < purchaseQuantity; i++) {
      const randomNumbers = generateRandomNumbers();
      lottoNumbers.push(new Lotto(randomNumbers));
    }
    return new Lottos(lottoNumbers);
  };

  getWinningRecord = (lottoNumbers) => {
    this.#winningChecker = new WinningChecker(
      this.#winningNumbers,
      this.#bonusNumber,
    );
    const winningRecord = this.#winningChecker.checkWinning(lottoNumbers);
    return winningRecord;
  };
}
