import Lotto from "../src/modules/Lotto.js";
import LottoGenerator from "../src/modules/LottoGenerator.js";
import PurchaseModule from "../src/modules/PurchaseModule.js";
import ResultModule from "../src/modules/ResultModule.js";
import WinningNumberModule from "../src/modules/WinningNumberModule.js";
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function getValidWinningNumbers() {
  const winningNumberModule = new WinningNumberModule();
  while (true) {
      const winningNumbersInput = await askQuestion("당첨 번호를 입력해 주세요.\n");
      const winningNumbersArray = winningNumbersInput.split(',').map(Number);

      try {
          winningNumberModule.setWinningNumbers(winningNumbersArray); // 유효성 검사 포함
          return winningNumbersArray; // 유효한 당첨 번호 반환
      } catch (error) {
          console.log(error.message); // 유효성 검사 오류 메시지 출력
      }
  }
}

async function getValidBonusNumber(winningNumbers) {
    while (true) {
        const bonusNumberInput = await askQuestion("보너스 번호를 입력해 주세요.\n");
        const bonus = Number(bonusNumberInput);

        // 유효성 검사: 숫자가 아니거나 1~45 범위 외의 숫자일 경우
        if (isNaN(bonus) || bonus < 1 || bonus > 45) {
            console.log("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        } else if (winningNumbers.includes(bonus)) {
            console.log("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
        } else {
            return bonus; // 유효한 보너스 번호 반환
        }
    }
}

async function runTest() {
    const purchaseModule = new PurchaseModule();

    try {
        // 구입 금액 입력 받기
        const amountInput = await askQuestion("구입금액을 입력해 주세요.\n");
        const validatedAmount = purchaseModule.validateAmount(Number(amountInput));
        purchaseModule.setAmount(validatedAmount);
        const ticketCount = purchaseModule.calculateTicketCount(validatedAmount);
        console.log();
        console.log(`${ticketCount}개를 구매했습니다.`);

        // 로또 번호 생성 및 출력
        const tickets = [];
        for (let i = 0; i < ticketCount; i++) {
            const numbers = LottoGenerator.generate();
            const lotto = new Lotto(numbers);
            tickets.push(lotto);
            console.log(lotto.getNumbers());
        }
        console.log();

        // 유효한 당첨 번호 입력 받기
        const winningNumbersArray = await getValidWinningNumbers();
        console.log();

        // 유효한 보너스 번호 입력 받기
        const bonus = await getValidBonusNumber(winningNumbersArray); 
        console.log();
        // 결과 통계 계산
        const results = ResultModule.tallyResults(tickets, winningNumbersArray, bonus);
        console.log(); // 빈 줄 출력
        console.log("당첨 통계");
        console.log("---");
        ResultModule.printResult(results);

        // 수익률 계산
        const profitRate = ResultModule.calculateProfitRate(ticketCount, results, 1000); // 티켓 가격 1000
        console.log(`총 수익률은 ${profitRate}%입니다.`);

    } catch (error) {
        console.log(error.message);
    } finally {
        rl.close();
    }
}

runTest();
