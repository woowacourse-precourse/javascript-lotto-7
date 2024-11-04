import { Console } from "@woowacourse/mission-utils";

const PRIZE_TABLE = {
  3: { count: 0, prize: 5000 },
  4: { count: 0, prize: 50000 },
  5: { count: 0, prize: 1500000 },
  "5+bonus": { count: 0, prize: 30000000 },
  6: { count: 0, prize: 2000000000 },
};

const PRIZE_MESSAGES = {
  3: "3개 일치 (5,000원) - ",
  4: "4개 일치 (50,000원) - ",
  5: "5개 일치 (1,500,000원) - ",
  "5+bonus": "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  6: "6개 일치 (2,000,000,000원) - ",
};

export const updatePrizeCount = (matchCount, bonusMatched) => {
  switch (matchCount) {
    case 6:
      incrementPrizeCount(6);
      break;
    case 5:
      handleFiveMatch(bonusMatched);
      break;
    case 4:
      incrementPrizeCount(4);
      break;
    case 3:
      incrementPrizeCount(3);
      break;
    default:
      break;
  }
};

const incrementPrizeCount = (matchCount) => {
  PRIZE_TABLE[matchCount].count += 1;
};

const handleFiveMatch = (bonusMatched) => {
  if (bonusMatched) {
    PRIZE_TABLE["5+bonus"].count += 1;
    return;
  }
  PRIZE_TABLE[5].count += 1;
};

const calculateYield = (totalPrize, investedAmount) => {
  return ((totalPrize / investedAmount) * 100).toFixed(1);
};

const calculateTotalPrize = () => {
  let totalPrize = 0;
  for (const key in PRIZE_TABLE) {
    totalPrize += PRIZE_TABLE[key].count * PRIZE_TABLE[key].prize;
  }
  return totalPrize;
};

const printPrizeCount = () => {
  for (const key in PRIZE_MESSAGES) {
    Console.print(`${PRIZE_MESSAGES[key]}${PRIZE_TABLE[key].count}개`);
  }
};

export const printStatistics = (investedAmount) => {
  Console.print("\n당첨 통계\n---");
  printPrizeCount();

  const totalPrize = calculateTotalPrize();
  const yieldPercentage = calculateYield(totalPrize, investedAmount);
  Console.print(`총 수익률은 ${yieldPercentage}%입니다.`);
};
