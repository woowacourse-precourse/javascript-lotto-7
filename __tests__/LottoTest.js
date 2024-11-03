import Lotto from '../src/Models/Lotto.js';
import LOTTO_NUMBERS_RULES from '../src/Validators/lottoNumbersRules.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]' + LOTTO_NUMBERS_RULES.validLength.errorMessage);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]' + LOTTO_NUMBERS_RULES.notDuplicate.errorMessage);
  });

  test('로또 번호에 빈 값이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, '', 5, 6]);
    }).toThrow('[ERROR]' + LOTTO_NUMBERS_RULES.notEmpty.errorMessage);
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'aveas']);
    }).toThrow('[ERROR]' + LOTTO_NUMBERS_RULES.notNumber.errorMessage);
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.453]);
    }).toThrow('[ERROR]' + LOTTO_NUMBERS_RULES.notInteger.errorMessage);
  });

  test('로또 번호가 1~45 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 53]);
    }).toThrow('[ERROR]' + LOTTO_NUMBERS_RULES.validRange.errorMessage);
  });

  test('로또 번호 반환시 정렬 되는지 확인', () => {
    const lotto = new Lotto([1, 5, 4, 2, 3, 6]);
    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
