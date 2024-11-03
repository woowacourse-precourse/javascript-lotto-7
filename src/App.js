import InputView from './InputView.js';
import Lotto from './Lotto.js';
import OutputView from './OutputView.js';
import { LOTTO_CONSTANTS } from './util/constant.js';
import { pickUniqueNumbersInRange } from './util/missionUtil.js';

class App {
  #lottos;
  #money;
  #winninNumbers;
  #bonusNumber;
  #rankResult;

  async run() {
    this.#money = await InputView.processMoney();
    OutputView.printLottoCount(this.#money);
    this.#lottos = await this.createLottos();
    OutputView.printLottoNumbers(this.#lottos);
    this.#winninNumbers = await InputView.processWinningNumber();
    this.#bonusNumber = await InputView.processBonusNumber(this.#winninNumbers);
    this.#rankResult = await this.getRankResult();
    OutputView.printRankResult(this.#rankResult);
  }

  async createLottos() {
    const lottoCount = this.#money / LOTTO_CONSTANTS.price;

    const lottoNumberPromises = Array.from({ length: lottoCount }, async () => {
      const randomNumber = await this.getSortedRandomNumber();
      return new Lotto(randomNumber);
    });
    const lottoNumbers = await Promise.all(lottoNumberPromises);
    return lottoNumbers;
  }

  async getSortedRandomNumber() {
    const randomNumber = await pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.minLottoNumber,
      LOTTO_CONSTANTS.maxLottoNumber,
      LOTTO_CONSTANTS.length
    );
    return randomNumber.sort((a, b) => a - b);
  }

  getRankResult() {
    const rankResult = Array.from({ length: 6 }, () => 0);
    this.#lottos.forEach((lotto) => {
      const RANK_INFO = lotto.getRankResult(
        this.#winninNumbers,
        this.#bonusNumber
      );
      rankResult[RANK_INFO] += 1;
    });
    return rankResult;
  }
}

export default App;
