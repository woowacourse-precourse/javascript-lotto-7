import Lotto from '../src/domain/Lotto.js';
import { COMMON_ERRORS, VALIDATION_ERRORS } from '../src/constants/constants.js';

describe('로또 번호 클래스 테스트', () => {
  const exceptionTestCases = [
    ['로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', [1, 2, 3, 4, 5, 6, 7], VALIDATION_ERRORS.LOTTO_NUMBERS.COUNT],
    ['로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', [1, 2, 3, 4, 5, 5], VALIDATION_ERRORS.LOTTO_NUMBERS.DUPLICATE],
    ['로또 번호가 숫자가 아닌 경우 예외가 발생한다.', [1, 'e', 3, 4, 5, 'a'], COMMON_ERRORS.NUMBER],
    ['로또 번호가 정수가 아닌 경우 예외가 발생한다.', [1, 2.4, 3, 4, 5.1, 5], COMMON_ERRORS.INTEGER],
    ['로또 번호가 1 이상 45 이하가 아닌 경우 예외가 발생한다.', [1, 2, 46, 4, 5, 0], COMMON_ERRORS.RANGE],
  ];

  it.each(exceptionTestCases)('%s', (_, lottoNumbers, errorMessage) => {
    expect(() => new Lotto(lottoNumbers)).toThrow(errorMessage);
  });

  test('로또 번호가 올바른 경우 getLottoNumbers()를 통해 로또 번호를 반환한다.', () => {
    // given
    const lottoNumbers = [1, 3, 2, 4, 5, 45];
    
    // when
    const lotto = new Lotto(lottoNumbers);
    const result = lotto.getLottoNumbers();

    // then
    expect(result).toEqual(lottoNumbers);
  });
});
