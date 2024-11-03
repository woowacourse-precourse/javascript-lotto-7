import { calculateQuatity } from './utils/index.js';
import { YieldCalculator } from './YieldCalculator.js';
import {
  getBonusNumber,
  getPurchaseAmount,
  getWinningNumbers,
  printLottoNumbers,
  printResult,
} from './utils/ioHandler.js';
import { retryOnError } from './utils/errorHandler.js';

export class Simulator {
  #validator;

  #publisher;

  #purchaseAmount;

  #purchaseQuantity;

  #lottos;

  #lottoNumbers;

  #winningNumber;

  #bonusNumber;

  #record;

  #yieldRate;

  constructor(validator, publisher) {
    this.#validator = validator;
    this.#publisher = publisher;
  }

  async simulate() {
    await this.#getPurchaseInfo();
    this.#generateLottos();
    await this.#getWinningInfo();
    this.#generateResult();
    this.#printResults();
  }

  async #getPurchaseInfo() {
    this.#purchaseAmount = await retryOnError(() =>
      getPurchaseAmount(this.#validator),
    );
    this.#purchaseQuantity = calculateQuatity(this.#purchaseAmount);
  }

  #generateLottos() {
    this.#lottos = this.#publisher.generateLotto(this.#purchaseQuantity);
    this.#lottoNumbers = this.#lottos.getLottoNumbers();
    printLottoNumbers(this.#purchaseQuantity, this.#lottoNumbers);
  }

  async #getWinningInfo() {
    this.#winningNumber = await retryOnError(() =>
      getWinningNumbers(this.#validator),
    );
    this.#bonusNumber = await retryOnError(() =>
      getBonusNumber(this.#winningNumber, this.#validator),
    );
    this.#publisher.setLottoNumber(this.#winningNumber, this.#bonusNumber);
  }

  #generateResult() {
    this.#record = this.#publisher.getWinningRecord(this.#lottoNumbers);
    this.#yieldRate = YieldCalculator.getYieldRate(
      this.#purchaseAmount,
      this.#record,
    );
  }

  #printResults() {
    printResult(this.#record, this.#yieldRate);
  }
}
