import Lotto from './modules/Lotto.js';
import LottoGenerator from './modules/LottoGenerator.js';
import PurchaseModule from './modules/PurchaseModule.js';
import ResultModule from './modules/ResultModule.js';
import WinningNumberModule from './modules/WinningNumberModule.js';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestion(query) {
  return new Promise((resolve) => {
      rl.question(query, (answer) => {
          resolve(answer);
      });
  });
}
async function getValidBonusNumber() {
  const winningNumberModule = new WinningNumberModule();

  while (true) {
      const bonusInput = await askQuestion("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = Number(bonusInput);

      try {
          winningNumberModule.validateBonusNumber(bonusNumber); // 보너스 번호 유효성 검사
          console.log();
          return bonusNumber;
      } catch (error) {
          console.log(error.message);
      }
  }
}
async function main() {
  const purchaseModule = new PurchaseModule();
  const winningNumberModule = new WinningNumberModule();
  const TICKET_PRICE = 1000;

  try {
      // 구입 금액 입력 받기
      const amountInput = await askQuestion("구입금액을 입력해 주세요.\n");
      const validatedAmount = purchaseModule.validateAmount(Number(amountInput));
      purchaseModule.setAmount(validatedAmount);
      const ticketCount = purchaseModule.calculateTicketCount(validatedAmount);
      console.log(`${ticketCount}개를 구매했습니다.`);

      // 로또 번호 생성 및 출력
      const tickets = [];
      for (let i = 0; i < ticketCount; i++) {
          const numbers = LottoGenerator.generate();
          const lotto = new Lotto(numbers);
          tickets.push(lotto);
          console.log(lotto.getNumbers());
      }

      let winningNumbersArray;
      while (true) {
          const winningNumbersInput = await askQuestion("당첨 번호를 입력해 주세요.\n");
          winningNumbersArray = winningNumbersInput.split(',').map(Number);
          try {
              winningNumberModule.setWinningNumbers(winningNumbersArray); // 유효성 검사 포함
              break; // 유효성이 통과되면 루프 종료
          } catch (error) {
              console.log(error.message); // 유효성 검사 오류 처리
          }
      }

      // 유효한 보너스 번호 입력 받기
      const bonus = await getValidBonusNumber(); 

        // 결과 통계 계산
        const results = ResultModule.tallyResults(tickets, winningNumbersArray, bonus);
        console.log();
        console.log("당첨 통계");
        console.log("---");
        ResultModule.printResult(results);

        // 수익률 계산
        const profitRate = ResultModule.calculateProfitRate(ticketCount, results, TICKET_PRICE);
        console.log(`총 수익률은 ${profitRate}%입니다.`);

    } catch (error) {
        console.log(error.message);
      } finally {
        rl.close();
    }
}

main();
        

