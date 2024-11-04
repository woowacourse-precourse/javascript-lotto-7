import BonusLotto from '../../src/model/BonusLotto';

describe('보너스 로또 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test('보너스 번호가 입력되지 않으면 예외가 발생한다.', () => {
    expect(() => new BonusLotto()).toThrow("[ERROR] 보너스 번호를 입력해야 합니다.");
  });

  test('보너스 번호가 양의 정수가 아니면 예외가 발생한다.', () => {
    expect(() => new BonusLotto(-1, winningNumbers)).toThrow("[ERROR] 보너스 번호는 양의 정수로 입력해야 합니다.");
    expect(() => new BonusLotto('abc', winningNumbers)).toThrow("[ERROR] 보너스 번호는 양의 정수로 입력해야 합니다.");
    expect(() => new BonusLotto(0, winningNumbers)).toThrow("[ERROR] 보너스 번호는 양의 정수로 입력해야 합니다.");
  });

  test('1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => new BonusLotto(46, winningNumbers)).toThrow("[ERROR] 1 이상 45 이하의 숫자여야 합니다.");
  });

  test('보너스 번호가 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => new BonusLotto(1, winningNumbers)).toThrow("[ERROR] 보너스 번호는 중복 없이 입력해야 합니다.");
    expect(() => new BonusLotto(6, winningNumbers)).toThrow("[ERROR] 보너스 번호는 중복 없이 입력해야 합니다.");
  });

  test('올바른 보너스 번호 입력에 대해서 통과한다.', () => {
    expect(() => new BonusLotto(7, winningNumbers)).not.toThrow();
  });
}); 