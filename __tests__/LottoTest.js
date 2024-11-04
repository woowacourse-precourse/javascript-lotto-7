import {
  ERROR_MESSAGE_PREFIX,
  ERROR_MESSAGES,
} from '../src/constants/errorMessage.js';
import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });
  test('로또 번호의 개수가 6개가 안되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 6, 7]);
    }).toThrow('[ERROR]');
  });
});

describe('커스텀 로또 클래스 테스트', () => {
  test.each([
    {
      case: 1,
      description: '숫자가 범위를 벗어난 경우',
      input: [1, 2, 3, 4, 60, 5],
      errorMessage: ERROR_MESSAGES.OUT_OF_BOUNDS_NUMBER_RANGE,
    },
    {
      case: 2,
      description: '음수 포함',
      input: [1, 2, 3, 4, -3, 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 3,
      description: '문자(한국어) 포함',
      input: [1, 2, 3, 4, 'ㄱ', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 4,
      description: '문자열(한국어) 포함',
      input: [1, 2, 3, 4, '안녕', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 5,
      description: '문자열(영어) 포함',
      input: [1, 2, 3, 4, 'abc', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 6,
      description: '문자(영어) 포함',
      input: [1, 2, 3, 4, 'a', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 7,
      description: '이모티콘인 포함',
      input: [1, 2, 3, 4, '😎', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 8,
      description: '소수 포함',
      input: [1, 2, 3, 4, 2.5, 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 9,
      description: '빈칸 포함',
      input: [1, undefined, 3, undefined, 4, 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 10,
      description: '로또 번호가 6개가 아닌 경우',
      input: [1, 2, 3, 4, 5],
      errorMessage: ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_COUNT,
    },
    {
      case: 11,
      description: '빈칸인 경우',
      input: [],
      errorMessage: ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_COUNT,
    },
    {
      case: 12,
      description: '중복된 숫자가 있는 경우',
      input: [1, 2, 3, 4, 5, 5],
      errorMessage: ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBER,
    },
    {
      case: 13,
      description: '쉼표가 아닌 다른 문자 포함',
      input: [1, 2, 3, 4, '5$', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
    {
      case: 14,
      description: '숫자+문자열이 포함된 숫자',
      input: [1, 2, 3, 4, '5a', 5],
      errorMessage: ERROR_MESSAGES.INVALID_WINNING_NUMBERS_FORMAT,
    },
  ])(
    '로또 번호 예외 테스트 - [$case] $description',
    ({ input, errorMessage }) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(`${ERROR_MESSAGE_PREFIX} ${errorMessage}`);
    },
  );
});
