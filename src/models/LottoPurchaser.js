import LottoGenerator from './LottoGenerator.js';
import LottoResult from './LottoResult.js';

export default class LottoPurchaser {
  #purchasePrice;
  #lottoCount;
  #lottos;
  #lottoResult;

  getPurchasePrice() {
    return this.#purchasePrice;
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

  getLottoResult() {
    return this.#lottoResult;
  }

  purchase(purchasePrice) {
    // TODO : 생성자 코드 수정 고려해보기
    const lottoGenerator = new LottoGenerator();

    [this.#lottoCount, this.#lottos] = lottoGenerator.generate(purchasePrice);
    this.#purchasePrice = purchasePrice;
    this.#lottoResult = new LottoResult();
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

    const earningRate = (resultPrice / this.#purchasePrice) * 100;
    const roundedEarningRate = parseFloat(earningRate.toFixed(1));

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
