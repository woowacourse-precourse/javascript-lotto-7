const ERROR_PREFIX = '[ERROR]';

export const PURCHASE_UNIT = 1000;

export const InputPrompts = {
  purchaseAmount: '구입 금액을 입력해주세요.\n',
};

export const ErrorMessage = {
  PRICE_AMOUNT_IS_NEGATIVE: `${ERROR_PREFIX} 구입 금액은 양수여야 합니다.`,
  INVALID_PURCHASE_UNIT: `${ERROR_PREFIX} 구입 금액 단위는 ${PURCHASE_UNIT}원 이어야 합니다.`,
};
