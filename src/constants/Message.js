export const LOTTO_ERROR_MESSAGES = Object.freeze({
  not_a_number: '[ERROR] 로또 번호는 숫자여야 합니다.',
  not_in_integer: '[ERROR] 로또 번호는 정수여야 합니다.',
  invalid_length: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicate_numbers: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  out_of_range: '[ERROR] 로또 번호는 1과 45 사이여야 합니다.',
  bonus_duplicate: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
});

export const MONEY_ERROR_MESSAGES = Object.freeze({
  not_a_number: '[ERROR] 구입금액에 숫자가 아닌 값이 입력되었습니다.',
  not_an_integer: '[ERROR] 구입 금액은 정수로 입력해야 합니다.',
  unsafe_integer: '[ERROR] 너무 큰 금액은 입력할 수 없습니다.',
  minimum_amount: '[ERROR] 최소 구입 금액은 1,000원입니다.',
  not_purchase_unit: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
});

export const INPUT_MESSAGES = Object.freeze({
  purchase_money: '구입금액을 입력해 주세요.\n',
  winning_numbers: '\n당첨 번호를 입력해 주세요.\n',
  bonus_number: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  purchase_quantity: quantity => `\n${quantity}개를 구매했습니다.`,
  lotto_result_header: '\n당첨 통계\n---',
  profit_rate: profitRate => `\n총 수익률은 ${profitRate}%입니다.`,
});
