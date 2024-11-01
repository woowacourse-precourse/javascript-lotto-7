import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import { generateRandomNumbers } from './utils/index.js';

export class Publisher {

  #winningNumbers;

  #bonusNumber;

  setLottoNumber = (winningNumbers, bonusNumber) => {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  generateLotto = (purchaseQuantity) => {
    const lottoNumbers = [];
    for (let i = 0; i < purchaseQuantity; i++) {
      const randomNumbers = generateRandomNumbers();
      lottoNumbers.push(new Lotto(randomNumbers));
    }
    return new Lottos(lottoNumbers);
  };
}
