import LottoResult from '../models/LottoResult.js';

class LottoDrawingMachine {
  #winningNumberArray;
  #bonusNumber;
  #lottoRepository;

  constructor(winningNumber, bonus, lottoRepository) {
    this.#winningNumberArray = winningNumber.split(',').map(Number);
    this.#bonusNumber = Number(bonus);
    this.#lottoRepository = lottoRepository.getLottoArray();
  }

  drawLotto() {
    const lottoResult = new LottoResult();
    this.#lottoRepository.forEach((lottoObject) => {
      const lotto = lottoObject.getLotto();
      const numberOfWinning = this.#checkWinningCount(lotto);
      const isBonusMatched = this.#checkBonusMatch(lotto);
      this.#updateLottoResult(numberOfWinning, isBonusMatched, lottoResult);
    });
    return lottoResult;
  }

  #checkWinningCount(lotto) {
    const matchedLottoWithWinningNumber = lotto.filter((eachLottoNumber) =>
      this.#winningNumberArray.includes(eachLottoNumber)
    );
    return matchedLottoWithWinningNumber.length;
  }

  #checkBonusMatch(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  #updateLottoResult(numberOfWinning, isBonusMatched, lottoResult) {
    switch (numberOfWinning) {
      case 6:
        lottoResult.winFirstPlace();
        break;
      case 5:
        if (isBonusMatched) {
          lottoResult.winSecondPlace();
          break;
        }
        lottoResult.winThirdPlace();
        break;
      case 4:
        lottoResult.winFourthPlace();
        break;
      case 3:
        lottoResult.winFifthPlace();
        break;
      default:
        break;
    }
  }
}

export default LottoDrawingMachine;
