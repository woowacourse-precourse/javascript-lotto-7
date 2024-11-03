export const LOTTO_UNIT_PRICE = Object.freeze(1000);
export const LOTTO_POSSIBLE_MAX_PRICE = Object.freeze(100000);

export const LOTTO_NUMBER_MIN = Object.freeze(1);
export const LOTTO_NUMBER_MAX = Object.freeze(45);
export const LOTTO_NUMBER_COUNT = Object.freeze(6);

export const REWARD_MESSAGES = Object.freeze({
  winningStatistics: "\n당첨 통계\n---",
  totalReturnRate: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const USER_INPUT_MESSAGES = Object.freeze({
  purchaseAmount: "구입금액을 입력해 주세요.\n",
  winningLottoNumbers: "\n당첨 번호를 입력해 주세요.\n",
  winningBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

export const PURCHASE_MESSAGES = Object.freeze({
  purchasedCount: (count) => `\n${count}개를 구매했습니다.`,
});

export const REWARDS = Object.freeze([
  { count: "3개 일치", prize: "5,000원" },
  { count: "4개 일치", prize: "50,000원" },
  { count: "5개 일치", prize: "1,500,000원" },
  { count: "5개 일치, 보너스 볼 일치", prize: "30,000,000원" },
  { count: "6개 일치", prize: "2,000,000,000원" },
]);

export const REWARD_PRIZES = Object.freeze([
  5000, 50000, 1500000, 30000000, 2000000000,
]);

export const ERROR_MESSAGES = Object.freeze({
  bonusNumberNotANumber: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  bonusNumberOutOfRange: "[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.",
  bonusNumberDuplicate: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  purchaseAmountNotANumber: "[ERROR] 구입 금액은 숫자여야 합니다.",
  purchaseAmountInvalid: "[ERROR] 구입 금액은 1000의 배수인 양수여야 합니다.",
  purchaseAmountExceedsLimit: "[ERROR] 구입 금액은 10만원 이하여야 합니다.",
  lottoNumberOutOfRange: "[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.",
  lottoNumberCountInvalid: "[ERROR] 로또 번호는 6개여야 합니다.",
  lottoNumberDuplicate: "[ERROR] 로또 번호에 중복이 존재합니다.",
});
