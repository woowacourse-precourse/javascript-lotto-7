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

/** 당첨 계산 */
export const calculateLottos = (tickets, winningNums, bonusNum) => {
  const money = [5000, 50000, 1500000, 30000000, 2000000000];
  const result = { winnings: 0, matchCnts: [0, 0, 0, 0, 0] };

  tickets.forEach((tick) => {
    const numbers = tick.getNumbers();
    const matchCnt = numbers.filter((num) => winningNums.includes(num)).length;
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
};
