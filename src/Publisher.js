import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import { Validator } from './Validator.js';
import { SEPERATOR } from './constants/index.js';
import {
  calculateQuatity,
  generateRandomNumbers,
  splitBySeperator,
} from './utils/index.js';

export class Publisher {
  constructor() {
    this.validator = new Validator();
  }

  setPurchaseQuantity = (purchaseAmount) => {
    this.purchaseQuantity = calculateQuatity(purchaseAmount);
    this.validator.validatePurchaseAmount(purchaseAmount);
  };

  setWinningNumbers = (winningNumbersString) => {
    this.validator.validateWinningNumberString(winningNumbersString);

    this.winningNumbers = splitBySeperator(SEPERATOR, winningNumbersString);
    this.validator.validateWinningNumbers(this.winningNumbers);
  };

  setBonusNumbers = (bonusNubmer) => {
    this.bonusNumber = bonusNubmer;
    this.validator.validateBonusNumber(this.bonusNumber);
  };

  generateLotto = () => {
    const lottoNumbers = Array.from({ length: this.purchaseQuantity }).map(
      () => {
        const randomNumbers = generateRandomNumbers();
        return new Lotto(randomNumbers);
      },
    );
    return new Lottos(lottoNumbers);
  };
}
