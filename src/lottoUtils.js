import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

/** 로또 amount 만큼 구입하기 */
export const generateLotto = (amount) => {
  const tickets = [];
  for (let i = 0; i < amount; i++) {
    tickets.push(Lotto.generateRandomNumber());
  }
  return tickets;
};

/** 티켓 출력 */
export const printTickets = (tickets) => {
  tickets.forEach.call(tickets, (tick) => {
    Console.print(
      `[${tick
        .getNumbers()
        .sort((a, b) => a - b)
        .join(", ")}]`
    );
  });
};

const calculateMatches = (matchCnt, result, bonusMatch) => {
  if (matchCnt === 6) result.matchCnts[4]++;
  else if (matchCnt === 5 && bonusMatch) result.matchCnts[3]++;
  else if (matchCnt === 5) result.matchCnts[2]++;
  else if (matchCnt === 4) result.matchCnts[1]++;
  else if (matchCnt === 3) result.matchCnts[0]++;
};

/** 당첨 계산 */
export const calculateLottos = (tickets, winningNums, bonusNum) => {
  const money = [5000, 50000, 1500000, 30000000, 2000000000];
  const result = { winnings: 0, matchCnts: [0, 0, 0, 0, 0] };

  tickets.forEach((tick) => {
    const numbers = tick.getNumbers();
    const matchCnt = numbers.filter((num) => winningNums.includes(num)).length;
    const bonusMatch = numbers.includes(bonusNum);

    calculateMatches(matchCnt, result, bonusMatch);
  });
  result.winnings = result.matchCnts.reduce(
    (total, cnt, idx) => total + cnt * money[idx],
    0
  );
  return result;
};

const calculateReturnRatio = (result, purchasedAmount) => {
  const profit = (result.winnings / (purchasedAmount * 1000)) * 100;
  return profit.toFixed(1);
};

/** 결과출력 */
export const printResult = (result, purchasedAmount) => {
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
    `총 수익률은 ${calculateReturnRatio(result, purchasedAmount)}%입니다.`
  );
};
