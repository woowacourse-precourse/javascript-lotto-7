import Lotto from '../src/domain/Lotto.js';
import BonusLotto from '../src/domain/BonusLotto.js';
import ERROR_MESSAGE from '../src/constants/errorMessage.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
  });

  test('로또 번호에 빈 수가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, ''])).toThrow(ERROR_MESSAGE.EMPTY_NUMBER);
  });

  test('로또 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 'n'])).toThrow(ERROR_MESSAGE.CONTAIN_STRING);
  });

  test('로또 번호에 1미만 또는 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 99])).toThrow(ERROR_MESSAGE.NOT_BETWEEN_1_TO_45_NUMBER);
  });

  test('로또 번호에 실수가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6.6])).toThrow(ERROR_MESSAGE.CONTAIN_FLOAT);
  });

  test('로또 번호의 개수가 6개면 올바르게 작동한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test('로또 번호가 오름차순으로 정렬되어 있다.', () => {
    // given
    const INPUT_NUMBERS = [1, 12, 3, 24, 36, 5];
    const EXPECTED_NUMBERS = [1, 3, 5, 12, 24, 36];

    // when
    const lotto = new Lotto(INPUT_NUMBERS);

    // then
    expect(lotto.getNumbers()).toStrictEqual(EXPECTED_NUMBERS);
  });
});

describe('보너스 번호 로또 클래스 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], '', ERROR_MESSAGE.EMPTY_NUMBER],
    [[1, 2, 3, 4, 5, 6], 'n', ERROR_MESSAGE.CONTAIN_STRING],
    [[1, 2, 3, 4, 5, 6], 46, ERROR_MESSAGE.NOT_BETWEEN_1_TO_45_NUMBER],
    [[1, 2, 3, 4, 5, 6], 6, ERROR_MESSAGE.DUPLICATE_NUMBER],
    [[1, 2, 3, 4, 5, 6], 6.6, ERROR_MESSAGE.CONTAIN_FLOAT],
  ])('보너스 번호 예외 테스트', (lottoNumbers, bonusNumber, errorMessage) => {
    expect(() => new BonusLotto(lottoNumbers, bonusNumber)).toThrow(errorMessage);
  });
});
