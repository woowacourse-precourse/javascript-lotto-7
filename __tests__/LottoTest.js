import ERROR_MESSAGES from '../src/constants/errorMessages';
import Lotto from '../src/models/Lotto';

describe('로또 번호 발행 유효성 검사 테스트', () => {
  const testCases = [
    {
      description: '로또 번호 6개가 1부터 45 사이의 중복되지 않는 경우 통과한다.',
      input: [5, 10, 25, 30, 35, 45],
      expectedError: undefined,
    },
    {
      description: '로또 번호가 오름차순으로 정렬된 경우 통과한다.',
      input: [5, 10, 25, 30, 35, 45],
      expectedError: undefined,
    },
    {
      description: '로또 번호에 중복된 숫자가 있으면 예외가 발생한다.',
      input: [1, 2, 3, 4, 5, 5],
      expectedError: ERROR_MESSAGES.invalid_duplicate_number('로또 번호'),
    },
    {
      description: '로또 번호의 개수가 6개 초과할 경우 예외가 발생한다.',
      input: [1, 2, 3, 4, 5, 6, 7],
      expectedError: ERROR_MESSAGES.invalid_number_count('로또 번호', 6),
    },
    {
      description: '로또 번호의 개수가 6개 미만일 경우 예외가 발생한다.',
      input: [1, 2, 3, 4, 5],
      expectedError: ERROR_MESSAGES.invalid_number_count('로또 번호', 6),
    },
    {
      description: '로또 번호가 1부터 45 사이의 범위를 벗어난 경우 예외가 발생한다.',
      input: [1, 2, 3, 4, 5, 46],
      expectedError: ERROR_MESSAGES.invalid_number_range('로또 번호', 1, 45),
    },
  ];

  test.each(testCases)('$description', ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => new Lotto(input)).toThrow(expectedError);
    } else {
      expect(() => new Lotto(input)).not.toThrow();
    }
  });
});
