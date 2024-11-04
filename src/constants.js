export const INPUT_PROMPT = {
  purchaseAmount: '구매 금액을 입력해 주세요.',
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
};

export const OUTPUT_MESSAGE = {
  lottoCount: '개를 구매했습니다.',
};

export const ERROR_MESSAGE = {
  prefix: '[ERROR]',
  purchaseAmountError: '로또 구입은 최소 1,000원부터 시작해 1,000원 단위로만 구매 가능합니다.',
  purchaseFormatError: '로또 구매 금액은 숫자형으로만 입력해야 합니다.',
  inputFormatError: '로또 당첨 번호는 쉼표(",")로 구분한 숫자들의 조합만 가능합니다. ex) 1,2,3,4,5,6',
  lottoNumberTypeError: '로또 번호는 숫자형만 가능합니다.',
  duplicatedNumbersError: '로또 번호는 중복 되지 않은 수만 존재해야 합니다.',
  lottoNumbersCountError: '로또 번호는 6개여야 합니다.',
  lottoNumberRangeError: '로또 번호의 범위는 1부터 45까지의 숫자만 가능합니다.',
};

export const LOTTO_SINGLE_TICKET_PRICE = 1000;

export const LOTTO_NUMBERS_CONDITION = {
  count: 6,
  minNumber: 1,
  maxNumber: 45,
  type: 'number',
};

export const NUMBER_SEPARATOR = ',';

export const REGEX = {
  validNumberFormat: /^\d+$/,
  lottoNumberRange: /^[1-9]$|^[1-3][0-9]$|^4[0-5]$/,
};
