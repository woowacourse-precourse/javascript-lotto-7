export const RESULT_MESSAGE_FORMAT = (resultMessage, count) =>
  `${resultMessage} - ${count}개`;
export const TOTAL_EARNING_RATE = (earningRate) =>
  `총 수익률은 ${earningRate}%입니다.`;

export const RESULT_MESSAGE = Object.freeze({
  0: "3개 일치 (5,000원)",
  1: "4개 일치 (50,000원)",
  2: "5개 일치 (1,500,000원)",
  3: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  4: "6개 일치 (2,000,000,000원)",
});

export const LOTTO_PRIZE_AMOUNTS = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};
