const ERROR_PREFIX = '[ERROR]';

export const PURCHASE_UNIT = 1000;

export const Lotto = {
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const DELIMETER = ',';

export const InputPrompts = {
  purchaseAmount: '구입 금액을 입력해주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
};

export const OutputMessages = {
  PURCHASE_MESSAGE: (ticketCount) => `${ticketCount}개를 구매했습니다.`,
};

export const ErrorMessage = {
  PRICE_AMOUNT_IS_NEGATIVE: `${ERROR_PREFIX} 구입 금액은 양수여야 합니다.`,
  INVALID_PURCHASE_UNIT: `${ERROR_PREFIX} 구입 금액 단위는 ${PURCHASE_UNIT}원 이어야 합니다.`,
  INVALID_WINNING_NUMBER_DELIMETER: `${ERROR_PREFIX} 당첨 번호는 적절한 구분자(${DELIMETER}) 로 구분 되어야 합니다.`,
  INVALID_WINNING_NUMBER_LENGTH: `${ERROR_PREFIX} 당첨 번호는 ${Lotto.COUNT}개의 숫자여야 합니다.`,
  WINNING_NUMBER_IS_NOT_NUMBER: `${ERROR_PREFIX} 당첨 번호는 숫자여야 합니다.`,
  WINNING_NUMBER_IS_NOT_UNIQUE: `${ERROR_PREFIX} 당첨 번호는 중복되지 않아야 합니다.`,
  WINNING_NUMBER_IN_NOT_VALID_RANGE: `${ERROR_PREFIX} 당첨 번호는 ${Lotto.MIN_NUMBER} ~ ${Lotto.MAX_NUMBER} 사이여야 합니다.`,
  BONUS_NUMBER_IS_NOT_NUMBER: `${ERROR_PREFIX} 보너스 번호는 숫자여야 합니다.`,
  BONUS_NUMBER_IN_NOT_VALID_RANGE: `${ERROR_PREFIX} 보너스 번호는 ${Lotto.MIN_NUMBER} ~ ${Lotto.MAX_NUMBER} 사이여야 합니다.`,
};
