import LottoGenerator from './LottoGenerator.js';
import LottoResult from './LottoResult.js';
import {LOTTO_CONFIG} from "../constants/lottoConfig.js";

export default class LottoPurchaser {
  #purchasePrice;
  #lottoCount;
  #lottos;
  #lottoResult;

  constructor() {
    this.#lottoResult = new LottoResult();
  }

  setPurchasePrice(purchasePrice) {
    this.#purchasePrice = purchasePrice;
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lottos){
    this.#lottos = lottos;
  }

  getLottoResult() {
    return this.#lottoResult;
  }

  purchase(purchasePrice) {
    const lottoGenerator = new LottoGenerator();

    [this.#lottoCount, this.#lottos] = lottoGenerator.generate(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  compareLottosWithWinningLotto(winningLotto) {
    const winningLottoMainNumbers = winningLotto.getMainLotto().getNumbers();
    const winningLottoBonusNumber = winningLotto.getBonusNumber();

    this.#lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();

      const matchCount = this.#getMatchCount(
        lottoNumbers,
        winningLottoMainNumbers,
      );

      const isBonusNumberMatch = this.#getBonusNumberMatch(
        lottoNumbers,
        winningLottoBonusNumber,
      );

      this.#lottoResult.saveResult(matchCount, isBonusNumberMatch);
    });
  }

  calculateEarningRate() {
    const resultPrice = this.#lottoResult.getResultPrice();

    const earningRate = (resultPrice / this.#purchasePrice) * LOTTO_CONFIG.EARNING_RATE_MULTIPLIER;
    const roundedEarningRate = parseFloat(earningRate.toFixed(LOTTO_CONFIG.EARNING_RATE_PRECISION));

    this.#lottoResult.setEarningRate(roundedEarningRate);
  }

  #getMatchCount(lottoNumbers, winningLottoMainNumbers) {
    return lottoNumbers.filter((number) =>
      winningLottoMainNumbers.includes(number),
    ).length;
  }

  #getBonusNumberMatch(lottoNumbers, winningLottoBonusNumber) {
    return lottoNumbers.includes(winningLottoBonusNumber);
  }
}
