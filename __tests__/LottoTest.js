import { ERROR_PREFIX } from '../src/constants.js';
import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  let lottoNumbers;
  let lotto;
  beforeEach(() => {
    lottoNumbers = [1, 2, 3, 4, 5, 6];
    lotto = new Lotto(lottoNumbers);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_PREFIX);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_PREFIX);
  });

  test.each([
    ['빈 값이 포함된 경우', [1, 2, 3, 4, 5, '']],
    ['실수가 포함된 경우', [1, 2, 3, 4, 5, 1.1]],
    ['음수가 포함된 경우', [1, 2, 3, 4, 5, -1]],
    ['0이 포함된 경우', [1, 2, 3, 4, 5, 0]],
    ['로또 범위를 벗어난 숫자가 포함된 경우', [1, 2, 3, 4, 5, 46]],
  ])('%s, 에러를 발생시킨다.', (_, value) => {
    expect(() => {
      new Lotto(value);
    }).toThrow(ERROR_PREFIX);
  });

  test('Lotto 번호를 확인할 수 있다.', () => {
    expect(lotto.getNumbers()).toBe(lottoNumbers);
  });

  test.each([
    [[2, 4, 6, 8], 3],
    [[8, 9, 10, 11, 12, 13], 0],
  ])('다른 숫자 배열과 일치하는 숫자의 개수를 확인할 수 있다.', (otherNumbers, result) => {
    expect(lotto.getNumberOfSameNumber(otherNumbers)).toBe(result);
  });

  test.each([
    [8, false],
    [5, true],
  ])('특정 숫자를 포함하고 있는지 확인할 수 있다.', (target, result) => {
    expect(lotto.getIsIncludesNumber(target)).toBe(result);
  });
});
