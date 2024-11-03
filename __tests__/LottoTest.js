import Lotto from '../src/Lotto';

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

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호가 1-45 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 51]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 입력 시 숫자와 쉼표(,) 이외의 문자가 입력된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto.validateWinningNumbers([1, 'e', '%', 5, 6, 3]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 입력 시 숫자 이외의 문자가 입력된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto.validateBonusNumber(['e']);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 입력 시 1-45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto.validateBonusNumber([46]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호 6개와 보너스 번호가 겹치는 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto.validateBonusNumber(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
