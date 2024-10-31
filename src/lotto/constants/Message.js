const PREFIX_ERROR_MESSAGE = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  ERROR_INPUT_EMPTY_VALUE: `${PREFIX_ERROR_MESSAGE} 빈 값은 입력할 수 없습니다.`,
  ERROR_INPUT_NULL_VALUE: `${PREFIX_ERROR_MESSAGE} null 값은 입력할 수 없습니다.`,
  ERROR_INPUT_UNDEFINED_VALUE: `${PREFIX_ERROR_MESSAGE} undefined 값은 입력할 수 없습니다.`,
  ERROR_INPUT_ZERO_VALUE: `${PREFIX_ERROR_MESSAGE} 0 이상의 값을 입력해야 합니다.`,
  ERROR_INPUT_ONLY_NUMERIC: (input) => `${PREFIX_ERROR_MESSAGE} 숫자값을 입력해야 합니다. (입력값: ${input})`,

  ERROR_CONFIG_MAX_PURCHASE_AMOUNT_EXEEDED: (amount, maxAmount) => `${PREFIX_ERROR_MESSAGE} 로또 구매 금액이 최대 구매 금액을 초과할 수 없습니다. (로또 금액: ${amount}, 최대 구매 금액 : ${maxAmount})`,
  ERROR_CONFIG_INVALID_LOTTO_NUMBER_SCOPE: (minNumber, maxNumber) => `${PREFIX_ERROR_MESSAGE} 로또 번호의 범위 설정이 잘못되었습니다. (번호 범위 : ${minNumber} - ${maxNumber})`,
  ERROR_CONFIG_COUNT_GREATER_THAN_ALL_LOTTO_NUMBERS: (count, totalCount) => `${PREFIX_ERROR_MESSAGE} 발행 숫자 개수가 로또 번호 범위 수를 초과했습니다. (총 숫자 개수 : ${totalCount}, 로또 숫자 개수 : ${count})`,
});

