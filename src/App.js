import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const inputUtils = {
      /** 구입금액 입력받기 */
      getPurchaseAmount: async () => {
        const inputAmount = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        if (isNaN(inputAmount) || inputAmount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
        }
        const amount = inputAmount / 1000;
        return amount;
      },

      /** 당첨번호 입력받기 */
      getWinningNums: async () => {
        const winningNumberInput = await Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
        );
        const winningNumbers = winningNumberInput.split(",").map(Number);
        if (
          winningNumbers.length !== 6 ||
          new Set(winningNumbers).size !== 6 ||
          winningNumbers.some((num) => num < 1 || num > 45)
        ) {
          throw new Error(
            "[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다."
          );
        }
        return winningNumbers;
      },

      /** 보너스 숫자 입력받기 */
      getBonusNums: async () => {
        const bonusNumberInput = await Console.readLineAsync(
          "\n보너스 번호를 입력해 주세요.\n"
        );
        if (
          isNaN(bonusNumberInput) ||
          bonusNumberInput < 1 ||
          bonusNumberInput > 45
        ) {
          throw new Error(
            "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        }
        return bonusNumberInput;
      },
    };

    const lottoUtils = {
      /** 로또 amount 만큼 구입하기 */
      generateLotto: (amount) => {
        const tickets = [];
        for (let i = 0; i < amount; i++) {
          tickets.push(Lotto.generateRandomNumber());
        }
        return tickets;
      },

      /** 티켓 출력 */
      printTickets: (tickets) => {
        tickets.forEach.call(tickets, (tick) => {
          Console.print(
            `[${tick
              .getNumbers()
              .sort((a, b) => a - b)
              .join(", ")}]`
          );
        });
      },

      /** 당첨 계산 */
      calculateLottos: (tickets, winningNums, bonusNum) => {
        const money = [5000, 50000, 1500000, 30000000, 2000000000];
        const result = { winnings: 0, matchCnts: [0, 0, 0, 0, 0] };

        tickets.forEach((tick) => {
          const numbers = tick.getNumbers();
          const matchCnt = numbers.filter((num) =>
            winningNums.includes(num)
          ).length;
          const bonusMatch = numbers.includes(bonusNum);

          if (matchCnt === 6) result.matchCnts[4]++;
          else if (matchCnt === 5 && bonusMatch) result.matchCnts[3]++;
          else if (matchCnt === 5) result.matchCnts[2]++;
          else if (matchCnt === 4) result.matchCnts[1]++;
          else if (matchCnt === 3) result.matchCnts[0]++;
        });
        result.winnings = result.matchCnts.reduce(
          (total, cnt, idx) => total + cnt * money[idx],
          0
        );
        return result;
      },

      /** 결과출력 */
      printResult: (result, purchasedAmount) => {
        Console.print("\n당첨 통계");
        Console.print("---");
        Console.print(`3개 일치 (5,000원) - ${result.matchCnts[0]}개`);
        Console.print(`4개 일치 (50,000원) - ${result.matchCnts[1]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${result.matchCnts[2]}개`);
        Console.print(
          `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.matchCnts[3]}개`
        );
        Console.print(`6개 일치 (2,000,000,000원) - ${result.matchCnts[4]}개`);

        Console.print(
          `총 수익률은 ${(
            (result.winnings / (purchasedAmount * 1000)) *
            100
          ).toFixed(1)}%입니다.`
        );
      },
    };

    try {
      const purchaseAmount = await inputUtils.getPurchaseAmount();

      const tickets = lottoUtils.generateLotto(purchaseAmount);
      lottoUtils.printTickets(tickets);

      const winningNums = await inputUtils.getWinningNums();
      const bonusNums = await inputUtils.getBonusNums();

      Console.print(`${purchaseAmount}개를 구매했습니다.`);
      const result = lottoUtils.calculateLottos(
        tickets,
        winningNums,
        bonusNums
      );
      lottoUtils.printResult(result, purchaseAmount);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
