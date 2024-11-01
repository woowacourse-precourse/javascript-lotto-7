import Lotto from '../src/controller/Lotto';
import BonusNumber from '../src/model/BonusNumber.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1이상 45이하의 정수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3.3, 4, 5, 6]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, -3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
