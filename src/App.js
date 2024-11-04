import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";
import WinningNumber from "./WinningNumber.js";
import BonusNumber from "./BonusNumber.js";
import Ranking from "./Ranking.js";
import Profit from "./Profit.js";
import { LOTTO_RULES, MESSAGES } from "./Constants.js";
import Validator from "./Validator.js";

class App {

  async getInput(message) {
    Console.print(message);
    return Console.readLineAsync();
  }

  async run() {
    try {
            const purchaseAmount = await this.getPurchaseAmount();
            const ticketCount = purchaseAmount / LOTTO_RULES.TICKET_PRICE;

            const lottos = this.generateLottos(ticketCount);
            this.displayLottos(lottos);

            const winningNumbers = await this.getWinningNumbers();
            const bonusNumber = await this.getBonusNumber(winningNumbers);

            const rankCount = this.calculateRank(lottos, winningNumbers, bonusNumber);
            const profitRate = this.calculateProfit(rankCount, purchaseAmount);

            this.displayStatistics(rankCount, profitRate);
        } catch (error) {
            Console.print(error.message);
        }
  }

  // 로또 구입 금액 입력 받기
  async getPurchaseAmount() {
    const input = await this.getInput(MESSAGES.PURCHASE_AMOUNT_INPUT);
    const amount = Number(input);
    Validator.validateAmount(amount);
    return amount;
  }

  // 당첨 번호 입력받아 유효성 검사 후 반환
  async getWinningNumbers() {
    const input = await this.getInput(MESSAGES.WINNING_NUMBERS_INPUT);
    const winningNumber = new WinningNumber(input);
    const numbers = winningNumber.getWinningNumbers();

    Validator.validateTicketSize(numbers); 
    Validator.validateNumberRange(numbers);
    Validator.validateUniqueNumbers(numbers);
    return numbers;
  }

  // 보너스 번호 입력받아 유효성 검사 후 반환
  async getBonusNumber(winningNumbers) {
    const input = await this.getInput(MESSAGES.BONUS_NUMBER_INPUT);
    const bonusNumber = new BonusNumber(input, winningNumbers);
    return bonusNumber.getBonusNumber();
  }

  // 로또 티켓 생성, 지정된 개수만큼 로또 생성
  generateLottos(count) {
    const lottoMachine = new LottoMachine();
    return lottoMachine.allLottos(count);
  }

  // 당첨 등수 계산
  calculateRank(lottos, winningNumbers, bonusNumber) {
    return Ranking.compareRank(lottos, winningNumbers, bonusNumber);
  }

  // 총 수익률 계산
  calculateProfit(rankCount, purchaseAmount) {
    return Profit.calcProfit(rankCount, purchaseAmount);
  }

  // 구매한 로또 티켓 내역 출력
  displayLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    })
  }

  // 당첨 통계와 수익률 출력
  displayStatistics(rankCount, profitRate) {
    const results = [
      "당첨 통계\n---",
      `3개 일치 (5,000원) - ${rankCount[5]}개`,
      `4개 일치 (50,000원) - ${rankCount[4]}개`,
      `5개 일치 (1,500,000원) - ${rankCount[3]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCount[2]}개`,
      `6개 일치 (2,000,000,000원) - ${rankCount[1]}개`,
      `총 수익률은 ${profitRate}%입니다.`,
    ];
  
    results.forEach(line => Console.print(line));
  }
}

export default App;
