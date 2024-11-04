const ERROR_MESSAGES = {
  lottoAmountError: '[ERROR] 로또 구입 금액은 1,000단위로 입력해주세요.',
  lottoCountError: '[ERROR] 로또 번호는 6개여야 합니다.',
  lottoDuplicateNumberError: '[ERROR] 로또 번호에 중복된 값이 존재합니다.',
  lottoRangeError: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  lottoAmountNumberError: '[ERROR] 로또 구입 금액은 숫자로 입력해주세요.',
  numberSeparatorError:
    '[ERROR] 당첨 번호는 쉼표(,)를 기준으로 구분해야 합니다.',
};

const INPUT_MESSAGES = {
  lottoAmountInput: '구입 금액을 입력해 주세요.',
  matchNumberInput: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumberInput: '\n보너스 번호를 입력해 주세요.\n',
};

const OUTPUT_MESSAGES = {
  matchStatistics: '\n당첨 통계',
};

const AMOUNT = {
  lottoAmount: 1000,
};

const MATCH_COUNT = {
  three: 3,
  four: 4,
  five: 5,
  six: 6,
};

const SIGNS = {
  hyphen: '-',
  threeHyphen: '---',
};

export {
  ERROR_MESSAGES,
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  SIGNS,
  AMOUNT,
  MATCH_COUNT,
};
