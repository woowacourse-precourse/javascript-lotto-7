import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Calculate from "./calculate.js";

class App {
  async run() {
    // 로또 구입 금액을 입력받는 함수
    async function getLottoPurchaseAmount() {
      while (true) {
        try {
          const purchaseAmount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
          const amount = parseInt(purchaseAmount, 10);
          Lotto.vaildetePurchaseAmount(amount);
          return amount;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }
    }
    //로또 번호 생성 함수
    function generateLottoNumbers(count) {
      const lottoNumbers = [];
      for (let i = 0; i < count; i++) {
        const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
        lottoNumbers.push(numbers);
      }
      return lottoNumbers;
    }



    // 당첨 번호를 입력받는 함수
    async function getLottoWinningNumbers() {
      while (true) {
        try {
          const winningNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해주세요.\n');
          const numbers = winningNumbers.split(',').map(Number);
          new Lotto(numbers); // 유효성 검사
          return numbers;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }
    }

    // 보너스 번호 입력받는 함수
    async function getBonusNumber() {
      while (true) {
        try {
          const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
          const number = parseInt(bonusNumber, 10);
          Lotto.vaildeBounsNumber(number);
          return number;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      }
    }
    
    const purchaseAmount = await getLottoPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    MissionUtils.Console.print(`${lottoCount}개를 구매하였습니다.`);
    const lottoTickets = generateLottoNumbers(lottoCount);
    lottoTickets.forEach(ticket => {
      MissionUtils.Console.print(`[${ticket.join(', ')}]`);
    })

    const winningNumbers = await getLottoWinningNumbers();
    const bonusNumber = await getBonusNumber();

    const winningAmount = Calculate.calculateWinningAmount(lottoTickets,winningNumbers,bonusNumber);
    MissionUtils.Console.print('당첨 통계\n---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningAmount[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningAmount[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningAmount[5]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningAmount[5.5]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningAmount[6]}개`);

    const profitRate = Calculate.calculateProfitRate(winningAmount, purchaseAmount);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;