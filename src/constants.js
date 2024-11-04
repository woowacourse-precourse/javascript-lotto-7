export const INPUT_PROMPT = {
  purchaseAmount: '구매 금액을 입력해 주세요.',
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
};

export const OUTPUT_MESSAGE = {
  lottoCount: '개를 구매했습니다.',
  arraySymbol: {
    opening: '[',
    closing: ']',
  },
  winningInfo: {
    total: '당첨 통계',
    horizontal: '---',
    matched: '개 일치',
    bonus: ', 보너스 볼 일치',
    opening: '(',
    closing: ')',
    moneyUnit: '원',
    connecting: '-',
    countUnit: '개',
  },
  roi: {
    openingMessage: '총 수익률은 ',
    closingMessage: '%입니다.',
  },
};

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  purchaseAmountError: `${ERROR_PREFIX} 로또 구입은 최소 1,000원부터 시작해 1,000원 단위로만 구매 가능합니다.`,
  purchaseFormatError: `${ERROR_PREFIX} 로또 구매 금액은 숫자형으로만 입력해야 합니다.`,
  inputFormatError: `${ERROR_PREFIX} 로또 당첨 번호는 쉼표(",")로 구분한 숫자들의 조합만 가능합니다. ex) 1,2,3,4,5,6`,
  lottoNumberTypeError: `${ERROR_PREFIX} 로또 번호는 숫자형만 가능합니다.`,
  duplicatedNumbersError: `${ERROR_PREFIX} 로또 번호는 중복 되지 않은 수만 존재해야 합니다.`,
  lottoNumbersCountError: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  lottoNumberRangeError: `${ERROR_PREFIX} 로또 번호의 범위는 1부터 45까지의 숫자만 가능합니다.`,
  immutableFieldError: `${ERROR_PREFIX} 보너스 번호의 지정은 최초 1회만 가능하여 수정은 불가합니다.`,
  notUniqueNumberError: `${ERROR_PREFIX} 보너스 번호는 입력한 당첨 번호와 중복되지 않는 수만 가능합니다.`,
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

export const RANK_INFO = [
  { rank: 1, matchedCount: 6, winnings: 2000000000 },
  { rank: 2, matchedCount: 5, winnings: 30000000 },
  { rank: 3, matchedCount: 5, winnings: 1500000 },
  { rank: 4, matchedCount: 4, winnings: 50000 },
  { rank: 5, matchedCount: 3, winnings: 5000 },
];

export const INITIAL_COUNT = 0;
