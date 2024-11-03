import { Console } from '@woowacourse/mission-utils';
import LottoChecker from './classes/LottoChecker.js';
import LottoInputReader from './classes/LottoInputReader.js';
import LottoIssuer from './classes/LottoIssuer.js';
import LottoOutputWriter from './classes/LottoOutputWriter.js';
import LottoRevenueCalculator from './classes/LottoRevenueCalculator.js';

class App {
  async run() {
    let lottoPurchaseAmount;

    // 구매 금액 입력 단계
    while (true) {
      try {
        lottoPurchaseAmount = await LottoInputReader.readLottoPurchaseAmount();
        break; // 입력이 성공하면 반복 종료
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력 후 다시 입력 받음
      }
    }

    const lottoCount = LottoIssuer.calculateLottoCount(lottoPurchaseAmount);
    const lottos = LottoIssuer.generateLottos(lottoCount);

    LottoOutputWriter.printLottos(lottos);

    let winningNumbers, bonusNumber;

    // 당첨 번호 입력 단계
    while (true) {
      try {
        winningNumbers = await LottoInputReader.readWinningNumbers();
        bonusNumber = await LottoInputReader.readBonusNumber();
        break; // 입력이 성공하면 반복 종료
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력 후 다시 입력 받음
      }
    }

    // 당첨 결과 확인 및 출력
    const winningResult = LottoChecker.checkWinningLottos(
      lottos,
      winningNumbers,
      bonusNumber
    );
    LottoOutputWriter.printWinningResults(winningResult);

    // 수익률 계산 및 출력
    const totalYield = LottoRevenueCalculator.calculateYield(
      lottoPurchaseAmount,
      winningResult
    );
    LottoOutputWriter.printYield(totalYield);
  }
}

export default App;
