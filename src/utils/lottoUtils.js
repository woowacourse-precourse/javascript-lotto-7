import { Random } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/index.js';

export const calculateTicketCount = (money) => {
  return money / CONFIG.lottoPrice;
};

const generateNumberInRange = ({ start, end, count = 1 }) => {
  return Random.pickUniqueNumbersInRange(start, end, count);
};

export const generateLottoNumbers = () => {
  const randomConfig = {
    start: CONFIG.minBallNumber,
    end: CONFIG.maxBallNumber,
    count: CONFIG.countOfLottoBalls,
  };

  const sortAscending = (a, b) => a - b;
  return generateNumberInRange(randomConfig).sort(sortAscending);
};

export const calculateEarningsRate = (totalPrizeMoney, investmentMoney) => {
  ((totalPrizeMoney / investmentMoney) * 100).toFixed(1);
};
