import DrawLottery from './RandomLottery.js';

const lotto = DrawLottery.myLotto;

const winningDraw = (winning, bonus) => {
  return lotto.map(ticket => {
    const winCount = ticket.getNumbers().filter(num => winning.includes(num)).length;
    const bonusMatch = ticket.getNumbers().includes(Number(bonus));
    return { winCount, bonusMatch };
  });
};

const getPrizeIndex = (winCount, bonusMatch) => {
  if (winCount === 6) return 4;
  if (winCount === 5 && bonusMatch) return 3;
  if (winCount === 5) return 2;
  if (winCount === 4) return 1;
  if (winCount === 3) return 0;
  return -1; // 2개 이하일 때
};

const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000]; // 5등부터 1등까지

const calculate = (winning, bonus) => {
  const result = winningDraw(winning, bonus);
  const prizeCounts = [0, 0, 0, 0, 0];
  result.forEach(({ winCount, bonusMatch }) => {
    const prizeIndex = getPrizeIndex(winCount, bonusMatch);
    if (prizeIndex >= 0) prizeCounts[prizeIndex] += 1;
  });
  const totalPrize = prizeCounts.reduce((total, count, index) => {
    return total + count * prizeMoney[index]; // 각 등수의 개수 * 해당 당첨금
  }, 0);
  return {
    prizeCounts,
    totalPrize, // 총 당첨금 반환
  };
};

export default calculate;
