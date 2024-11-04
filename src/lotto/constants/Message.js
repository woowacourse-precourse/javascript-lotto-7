const PREFIX_ERROR_MESSAGE = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  ERROR_INPUT_EMPTY_VALUE: `${PREFIX_ERROR_MESSAGE} 빈 값은 입력할 수 없습니다.`,
  ERROR_INPUT_NULL_VALUE: `${PREFIX_ERROR_MESSAGE} null 값은 입력할 수 없습니다.`,
  ERROR_INPUT_UNDEFINED_VALUE: `${PREFIX_ERROR_MESSAGE} undefined 값은 입력할 수 없습니다.`,
  ERROR_INPUT_ZERO_VALUE: `${PREFIX_ERROR_MESSAGE} 0 이상의 값을 입력해야 합니다.`,
  ERROR_INPUT_ONLY_NUMERIC: (input) => `${PREFIX_ERROR_MESSAGE} 숫자값을 입력해야 합니다. (입력값: ${input})`,

  ERROR_CONFIG_MAX_PURCHASE_AMOUNT_EXEEDED: (amount, maxAmount) => `${PREFIX_ERROR_MESSAGE} 로또 구매 금액이 최대 구매 금액을 초과할 수 없습니다. (로또 금액: ${amount}, 최대 구매 금액 : ${maxAmount})`,
  ERROR_CONFIG_INVALID_LOTTO_NUMBER_RANGE: (minNumber, maxNumber) => `${PREFIX_ERROR_MESSAGE} 로또 번호의 범위 설정이 잘못되었습니다. (번호 범위 : ${minNumber} - ${maxNumber})`,
  ERROR_CONFIG_COUNT_GREATER_THAN_ALL_LOTTO_NUMBERS: (count, totalCount) => `${PREFIX_ERROR_MESSAGE} 발행 숫자 개수가 로또 번호 범위 수를 초과했습니다. (총 숫자 개수 : ${totalCount}, 로또 숫자 개수 : ${count})`,

  ERROR_MAX_PURCHASE_AMOUNT_EXCEEDED: (maxAount, amount) => `${PREFIX_ERROR_MESSAGE} 최대 구매금액 ${maxAount}를 초과했습니다. (요청 구매금액 : ${amount})`,
  ERROR_INCORRECT_AMOUNT_UNIT: (amount, amountUnit) => `${PREFIX_ERROR_MESSAGE} 구매 금액의 단위가 잘못됐습니다. (구매 금액: ${amount}, 금액 단위 : ${amountUnit})`,
  ERROR_INCORRECT_LOTTO_NUMBER_COUNT: (inputCount, numberCount) => `${PREFIX_ERROR_MESSAGE} 로또 번호는 ${numberCount}개여야 합니다. (개수 : ${inputCount})`,
  ERROR_NUMBER_OUT_OF_RANGE: (number, startNumber, endNumber) => `${PREFIX_ERROR_MESSAGE} 로또 번호가 범위를 벗어났습니다. (범위: ${startNumber}-${endNumber})`,
  ERROR_DUPLICATE_NUMBER: `${PREFIX_ERROR_MESSAGE} 로또 번호는 중복 될 수 없습니다.`,

});

export const INPUT_MESSAGE = Object.freeze({
  REQUEST_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  REQUEST_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  REQUEST_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASED_LOTTO_COUNT: (count) => `${count}개를 구매했습니다.\n`,
  WINNING_RESULT_TITLE: '당첨 통계\n---',
  WINNING_RESULT: (matchCount, amount, count) => `${matchCount}개 일치 (${amount}원) - ${count}개`,
  WINNING_RESULT_WITH_BONUS: (matchCount, amount, count) => `${matchCount}개 일치, 보너스 볼 일치 (${amount}원) - ${count}개`,
  TOTAL_RATE_OF_RETURN: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
});