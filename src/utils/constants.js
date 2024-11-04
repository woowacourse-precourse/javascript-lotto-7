export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
export const LOTTO_SIZE = 6;
export const LOTTO_UNIT = 1000;
export const LOTTO_WINNING_FLAG = 1; // 당첨 번호 표시
export const LOTTO_BONUS_FLAG = 2; // 보너스 번호 표시

export const ERROR_MESSAGES = Object.freeze({
  LOTTO_SIZE: `로또 번호는 ${LOTTO_SIZE}개여야 합니다.`,
  DUPLICATE_NUMBER: "로또 번호에 중복된 숫자가 있습니다.",
  PURCHASE_AMOUNT: `${LOTTO_UNIT}원 단위로 입력해 주세요.`,
  WINNING_SIZE: `당첨 번호를 ${LOTTO_SIZE}개 입력해주세요.`,
  NUMBER_ONLY: "숫자만 입력해주세요.",
  RANGE: `${MIN_NUMBER}~${MAX_NUMBER} 사이의 숫자만 입력해주세요.`,
  DUPLICATE_WINNING_BONUS: "당첨 번호와 중복됩니다.",
});

export const PROMPTS = Object.freeze({
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

export const PRIZE_AMOUNT = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});
