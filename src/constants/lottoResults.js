export const LOTTO_PRIZE = {
  fifth: { amount: 5000, count: 0 },
  fourth: { amount: 50000, count: 0 },
  third: { amount: 1500000, count: 0 },
  second: { amount: 30000000, count: 0 },
  first: { amount: 2000000000, count: 0 },
};

export const LOTTO_TEMPLATE = {
  fifth: `3개 일치 (${LOTTO_PRIZE.fifth.amount.toLocaleString()}원) - {count}개`,
  fourth: `4개 일치 (${LOTTO_PRIZE.fourth.amount.toLocaleString()}원) - {count}개`,
  third: `5개 일치 (${LOTTO_PRIZE.third.amount.toLocaleString()}원) - {count}개`,
  second: `5개 일치, 보너스 볼 일치 (${LOTTO_PRIZE.second.amount.toLocaleString()}원) - {count}개`,
  first: `6개 일치 (${LOTTO_PRIZE.first.amount.toLocaleString()}원) - {count}개`,
};
