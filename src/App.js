import Lotto from './controller/Lotto.js';
import InputHandler from './view/InputHandler.js';
import OutputHandler from './view/OuputHandler.js';
import { INPUT_PRINT_MESSAGES } from './contents/InputPrintMessages.js';
import MoneyManager from './controller/MoneyManager.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import BonusNumber from './controller/BonusNumberManager.js';
import LottoResult from './model/LottoResult.js';
import LottoGenerator from './model/LottoGenerator.js';

class App {
  async run() {
    const input = new InputHandler();
    const print = new OutputHandler();

    // 각 입력을 받는 메서드를 호출하여 결과 저장
    const ticketCount = await this.promptForMoney(input);
    const lottos = LottoGenerator.generateMultipleLottos(ticketCount);
    print.printLottos(ticketCount, lottos);

    const winningNumbers = await this.promptForWinningNumbers(input);
    const bonusNumber = await this.promptForBonusNumber(input, winningNumbers);
    const lottoResult = new LottoResult(
      winningNumbers,
      bonusNumber,
      ticketCount,
      lottos,
    );
    print.printResult(lottoResult.calculateResults());
    print.printProfit(lottoResult.calculateProfitRate());
  }

  // 돈 입력 및 유효성 검사
  async promptForMoney(input) {
    while (true) {
      try {
        const money = await input.getInput(INPUT_PRINT_MESSAGES.money);
        const ticketCount = new MoneyManager(money); // 유효성 검사 포함
        return ticketCount.getLottoTicketCount(); // 유효한 입력 시 반환
      } catch (error) {
        MissionUtils.Console.print(error.message); // 에러 메시지 출력 후 재입력
      }
    }
  }

  // 당첨 번호 입력 및 유효성 검사
  async promptForWinningNumbers(input) {
    while (true) {
      try {
        const winningNumbers = await input.getWinningNumbersInput(
          INPUT_PRINT_MESSAGES.winning_number,
        );
        new Lotto(winningNumbers); // 유효성 검사 포함
        return winningNumbers; // 유효한 입력 시 반환
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  // 보너스 번호 입력 및 유효성 검사
  async promptForBonusNumber(input, winningNumber) {
    while (true) {
      try {
        const bonusNumber = await input.getInput(
          INPUT_PRINT_MESSAGES.bonus_number,
        );
        new BonusNumber(bonusNumber, winningNumber); // 유효성 검사 포함
        return bonusNumber; // 유효한 입력 시 반환
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
}

export default App;
