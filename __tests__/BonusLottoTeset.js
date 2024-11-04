import BonusLotto from '../src/BonusLotto';

describe('보너스 로또 클래스 테스트', () => {
  test('로또 번호에 45 초과의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto(46);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1 미만의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto(0);
    }).toThrow('[ERROR]');
  });
});
