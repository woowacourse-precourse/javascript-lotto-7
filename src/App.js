import { Console } from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.PurchaseLottoNumbersArray = [];
    this.WinningLottoNumbersArray = Array(46).fill(0);
    this.winningRanks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  async run() {
    const lottoCount = await this.inputHandler.getPurchaseAmount();
    this.printLottoNumbers(lottoCount);

    const winningNumber = await this.inputHandler.getWinningNumber();
    this.processWinningNumber(winningNumber);

    const bonusNumber = await this.inputHandler.getBonusNumber();
    this.processBonusgNumber(bonusNumber);

    this.compareLottoNumbers();
    this.printResult();
  }

  //로또 번호 출력
  printLottoNumbers(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i++) {
      let lottoNumbers = Lotto.generateLottoNumbers();
      Console.print(lottoNumbers.getNumbers());
      this.PurchaseLottoNumbersArray.push(lottoNumbers);
    }
  }

  // 당첨 번호 가공
  processWinningNumber(winningNumber) {
    winningNumber.forEach((number) => {
      this.WinningLottoNumbersArray[number] = 1; // 해당 인덱스 === 당첨 번호를 1로 변경
    });
  }

  // 보너스 번호 가공
  processBonusgNumber(bonusNumber) {
    this.WinningLottoNumbersArray[bonusNumber] = 2; // 보너스 번호는 2로 표시
  }

  // 내가 산 로또 번호와 당첨 번호 비교
  compareLottoNumbers() {
    this.PurchaseLottoNumbersArray.forEach((lotto) => {
      const matchCount = lotto.countMatchingNumbers(
        this.WinningLottoNumbersArray
      );
      const isBonusMatched = lotto.hasBonusNumber(
        this.WinningLottoNumbersArray
      );
      this.updateWinningRanks(matchCount, isBonusMatched);
    });
  }

  //winningRanks 업데이트
  updateWinningRanks(matchCount, isBonusMatched) {
    switch (matchCount) {
      case 6:
        this.winningRanks[1]++;
        break;
      case 5:
        if (isBonusMatched) this.winningRanks[2]++;
        else this.winningRanks[3]++;
        break;
      case 4:
        this.winningRanks[4]++;
        break;
      case 3:
        this.winningRanks[5]++;
        break;
      default:
        break;
    }
  }

  // 수익률 계산
  calculateRateOfReturn() {
    const prize = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    const totalPrize = Object.keys(this.winningRanks).reduce(
      (acc, rank) => acc + this.winningRanks[rank] * prize[rank],
      0
    );
    const rate =
      (totalPrize / (this.PurchaseLottoNumbersArray.length * 1000)) * 100;

    if (rate % 1 === 0) {
      return rate;
    } else if ((rate * 10) % 1 === 0) {
      return rate.toFixed(1);
    }
    return rate.toFixed(2);
  }

  printResult() {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.winningRanks[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.winningRanks[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningRanks[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningRanks[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.winningRanks[1]}개`);
    Console.print(`총 수익률은 ${this.calculateRateOfReturn()}%입니다.`);
  }
}

export default App;
