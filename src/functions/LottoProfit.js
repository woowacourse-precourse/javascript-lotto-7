import { Console } from '@woowacourse/mission-utils';

export const getLottoPrifitPercent = (
  sumLottoPrizeMoney,
  lottoBuyMoneyInput,
) => {
  const result = (sumLottoPrizeMoney / lottoBuyMoneyInput) * 100;

  return result.toFixed(1);
};

export const printLottoPrifitPercent = (lottoProfitPercent) => {
  Console.print(`총 수익률은 ${lottoProfitPercent}%입니다.`);
};
