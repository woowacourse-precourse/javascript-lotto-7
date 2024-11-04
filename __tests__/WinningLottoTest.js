import WinningLotto from '../src/models/WinningLotto.js';

describe('당첨 로또 테스트', () => {
  let winningLotto

  beforeEach(() => {
    winningLotto = new WinningLotto();
  })

  describe('당첨 로또 메인 번호 예외 테스트', () => {
    test('메인 번호가 6개가 아닌 경우 예외가 발생한다', () => {
      expect(() => winningLotto.setMainLotto([1, 2, 3, 4, 5])).toThrow('[ERROR]');
    });

    test('메인 번호에 중복된 숫자가 포함된 경우 예외가 발생한다', () => {
      expect(() => winningLotto.setMainLotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
    });

    test('메인 번호에 범위를 벗어난 숫자가 포함된 경우 예외가 발생한다', () => {
      expect(() => winningLotto.setMainLotto([0, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
      expect(() => winningLotto.setMainLotto([1, 2, 3, 4, 5, 46])).toThrow('[ERROR]');
    });
  });

  describe('당첨 로또 보너스 번호 예외 테스트', () => {
    test('보너스 번호가 메인 번호와 중복되는 경우 예외가 발생한다', () => {
      winningLotto.setMainLotto([1, 2, 3, 4, 5, 6]);
      expect(() => winningLotto.setBonusNumber(3)).toThrow('[ERROR]');
    });

    test('보너스 번호가 범위를 벗어난 경우 예외가 발생한다', () => {
      expect(() => winningLotto.setBonusNumber(0)).toThrow('[ERROR]');
      expect(() => winningLotto.setBonusNumber(46)).toThrow('[ERROR]');
    });
  });
})