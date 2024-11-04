import RULES from '../RULES.js';

export default {
  NOT_TYPED:
    '[ERROR] 구입 금액이 입력되지 않았어요. 구입 금액을 입력해 주세요.',
  CONTAIN_NAN:
    '[ERROR] 숫자가 아닌 문자가 포함되어 있어요. 구입 금액은 숫자만 입력해 주세요.',
  STARTSWITH_ZERO: '[ERROR] 구입 금액은 0으로 시작할 수 없어요.',
  REMAINDER_NOT_ZERO: `[ERROR] 구입 금액은 ${RULES.LOTTO_PRICE.toLocaleString()} 원 단위로 입력해주세요.`,
};
