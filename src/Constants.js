export const INPUT_PROMPTS = {
  purchaseAmount: "구입금액을 입력해 주세요.\n",
  lottoNumber: "당첨 번호를 입력해주세요(번호는 쉼표(,)를 기준으로 구분)\n",
  bonusNumber: "보너스 번호를 입력주세요\n",
};

export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT:
    "[ERROR] 구입금액은 1,000의 배수여야 하며 최소 금액은 1,000원 입니다.( ex. 2000 )",
  INVALID_LOTTO_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 당첨 번호와 중복되지 않게 입력해주세요.",
  INVALID_LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_LOTTO_NUMBER: "[ERROR] 로또 번호에 중복된 값이 있습니다.",
};

export const MINIMUM_PURCHASE_AMOUNT = 1000;

export const PURCHASE_MESSAGE = "개를 구매했습니다.";

export const RANKS = {
  FIRST: "FIRST_PLACE",
  SECOND: "SECOND_PLACE",
  THIRD: "THIRD_PLACE",
  FOURTH: "FOURTH_PLACE",
  FIFTH: "FIFTH_PLACE",
  SIXTH: "SIXTH_PLACE",
};

export const PRIZE_MESSAGES = {
  TITLE: "당첨 통계",
  SEPARATOR: "---",
  FIFTH: "3개 일치 (5,000원) -",
  FOURTH: "4개 일치 (50,000원) -",
  THIRD: "5개 일치 (1,500,000원) -",
  SECOND: "5개 일치, 보너스 볼 일치 (30,000,000원) -",
  FIRST: "6개 일치 (2,000,000,000원) -",
};

export const WINNING_PRIZE = {
  FIRST_PLACE: 2_000_000_000,
  SECOND_PLACE: 30_000_000,
  THIRD_PLACE: 1_500_000,
  FOURTH_PLACE: 50_000,
  FIFTH_PLACE: 5_000,
};

export const ROI_MESSAGES = {
  RESULT: "총 수익률은 ${value}%입니다.",
};

export const DEFAULT_DELIMITER = ",";
