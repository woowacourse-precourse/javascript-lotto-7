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
