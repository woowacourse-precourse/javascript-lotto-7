import LOTTO_INFO from './constant/lotto.js';
import OuputView from './view/OutputView.js';
import LottoController from './controller/LottoController.js';

class App {
  #money;

  #lottoList;

  #winningNumber;

  #bonusNumber;

  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }

  async run() {
    await this.#lottoController.initLottoProcess();
    await this.#lottoController.createAnswerNumbers();
    // this.displayLottoWinning();
  }

  displayLottoWinning() {
    const lottosRankCountObj = this.#getLottosRankCount();

    OuputView.printLottoWinning(lottosRankCountObj);
    OuputView.printProfitPercentage(
      this.#calculateTotalAmountFromLotto(lottosRankCountObj),
      this.#money,
    );
  }

  #getLottosRankCount() {
    return this.#lottoList.reduce(
      (acc, lotto) => {
        const cur = this.#compareLottoToWinningNumber(lotto);
        const count = cur.matchWinningNumberCount;
        if (count === 6) acc[1] += 1;
        if (count === 5 && cur.isContainBounusNumber) acc[2] += 1;
        if (count === 5) acc[3] += 1;
        if (count === 4) acc[4] += 1;
        if (count === 3) acc[5] += 1;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    );
  }

  #compareLottoToWinningNumber(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const [matchWinningNumberCount, isContainBounusNumber] = this.#winningNumber.reduce(
      (acc, cur) => {
        if (lottoNumbers.includes(cur)) acc[0] += 1;
        return acc;
      },
      [0, lottoNumbers.includes(this.#bonusNumber)],
    );

    return { matchWinningNumberCount, isContainBounusNumber };
  }

  #calculateTotalAmountFromLotto(lottosRankCount) {
    let totalAmount = 0;
    for (let i = 1; i <= LOTTO_INFO.MIN_RANK; i += 1) {
      totalAmount += lottosRankCount[i] * LOTTO_INFO.WINNING_MONEY[i];
    }

    return totalAmount;
  }
}

export default App;
