export const PRIZE = {
  THREE: (amount) => ({
    count: 3,
    amount: 5000,
    message: `3개 일치 (5,000원) - ${amount}개`,
  }),
  FOUR: (amount) => ({
    count: 4,
    amount: 50000,
    message: `4개 일치 (50,000원) - ${amount}개`,
  }),
  FIVE: (amount) => ({
    count: 5,
    amount: 1500000,
    message: `5개 일치 (1,500,000원) - ${amount}개`,
  }),
  FIVE_BONUS: (amount) => ({
    count: 5,
    amount: 30000000,
    message: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개`,
  }),
  SIX: (amount) => ({
    count: 6,
    amount: 2000000000,
    message: `6개 일치 (2,000,000,000원) - ${amount}개`,
  }),
};
