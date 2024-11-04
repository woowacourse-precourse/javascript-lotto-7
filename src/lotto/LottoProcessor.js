import Lotto from "./Lotto.js";

//로또 관련 비즈니스 로직 처리
class LottoProcessor {
  constructor(outputHandler, winningLotto) {
    this.outputHandler = outputHandler;
    this.winningLotto = winningLotto;
    this.PurchaseLottoNumbersArray = [];
    this.winningRanks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  //로또 번호 생성 및 출력
  setLottoNumbers(lottoCount) {
    this.outputHandler.printLottoCount(lottoCount);
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Lotto.generateLottoNumbers();
      this.outputHandler.printLottoNumbers(lottoNumbers.getNumbers());
      this.PurchaseLottoNumbersArray.push(lottoNumbers);
    }
  }

  // 내가 산 로또 번호와 당첨 번호 비교
  compareLottoNumbers() {
    const winningNumbersArray = this.winningLotto.getWinningNumbersArray();
    this.PurchaseLottoNumbersArray.forEach((lotto) => {
      const matchCount = lotto.countMatchingNumbers(winningNumbersArray);
      const isBonusMatched = lotto.hasBonusNumber(winningNumbersArray);
      this.setWinningRanks(matchCount, isBonusMatched);
    });
  }

  //winningRanks 업데이트
  setWinningRanks(matchCount, isBonusMatched) {
    if (matchCount === 6) this.winningRanks[1]++;
    else if (matchCount === 5 && isBonusMatched) this.winningRanks[2]++;
    else if (matchCount === 5) this.winningRanks[3]++;
    else if (matchCount === 4) this.winningRanks[4]++;
    else if (matchCount === 3) this.winningRanks[5]++;
  }

  //winningRanks 출력
  getWinningRanks() {
    return this.winningRanks;
  }
}

export default LottoProcessor;
