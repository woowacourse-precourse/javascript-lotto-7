export const PRIZE = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  false: 0,
};

export const RANKING_TOTAL = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

export const MESSAGE = {
  WINNING_NUMBER_INPUT: "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER_INPUT: "보너스 번호를 입력해 주세요.",
  PURCHASE_AMOUNT_INPUT: "구입금액을 입력해 주세요.",
  PURCHASE_RESULT: "개를 구매했습니다.",
  STATISTICS: `당첨 통계\n---\n3개 일치 (5,000원) - ${RANKING_TOTAL[5]}개\n4개 일치 (50,000원) - ${RANKING_TOTAL[4]}개\n5개 일치 (1,500,000원) - ${RANKING_TOTAL[3]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${RANKING_TOTAL[2]}개\n6개 일치 (2,000,000,000원) - ${RANKING_TOTAL[1]}개`,
};

export const LOTTO = {
  TOTAL_NUMBERS: 6,
  TOTAL_BONUS_NUMBER: 1,
  ARRANGE_START: 1,
  ARRANGE_END: 45,
  PRICE: 1000,
};

export const ERROR_TAG = "[ERROR]";

export const ERROR_MESSAGE = {
  TOTAL_NUMBER: `${LOTTO.TOTAL_NUMBERS}개의 숫자를 입력해주세요.`,
  NUMBER_ARRANGE: `${LOTTO.ARRANGE_START}~${LOTTO.ARRANGE_END} 사이의 값을 입력해주세요.`,
  INTEGER: "정수를 입력해주세요.",
  SAME: "중복된 숫자가 있습니다.",
  PURCHASE_AMOUNT_UNIT: `${LOTTO.PRICE}원 단위의 금액을 입력해주세요.`,
  MIN_PURCHASE: `한 장(${LOTTO.PRICE}) 이상만 구매 가능합니다.`,

  get(type) {
    return `${ERROR_TAG} ${this[type]}`;
  },
};
