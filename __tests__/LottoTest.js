import ERROR_MESSAGE from '../src/constants/errorMessage.js';
import Lotto from '../src/Lotto.js';
import WinningLotto from '../src/WinningLotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1미만 또는 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 99]);
    }).toThrow(ERROR_MESSAGE.BETWEEN_1_TO_45_NUMBERS);
  });

  test('로또 번호의 개수가 6개면 올바르게 작동한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
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

describe('당첨 로또 클래스 테스트', () => {
  it.each([
    [[1, 2, 3, 4, 5], 7],
    [[1, 2, 3, 4, 5, ''], 7],
    [[1, 2, 3, 4, 5, 'n'], 7],
    [[1, 2, 3, 4, 5, 46], 7],
  ])('당첨 번호 예외 테스트', (lottoNumbers, bonusNumber) => {
    expect(() => new WinningLotto(lottoNumbers, bonusNumber)).toThrow(
      '[ERROR]',
    );
  });

  it.each([
    [[1, 2, 3, 4, 5, 6], ''],
    [[1, 2, 3, 4, 5, 6], 'n'],
    [[1, 2, 3, 4, 5, 6], 46],
    [[1, 2, 3, 4, 5, 6], 6],
  ])('보너스 번호 예외 테스트', (lottoNumbers, bonusNumber) => {
    expect(() => new WinningLotto(lottoNumbers, bonusNumber)).toThrow(
      '[ERROR]',
    );
  });
});
