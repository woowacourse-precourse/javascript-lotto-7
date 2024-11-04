import validator from '../src/validators/Validator';

describe('Validator 클래스 테스트', () => {
  test('구입금액이 숫자 외 값이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateInputCost('aaa');
    }).toThrow('[ERROR]');
  });
  test('구입금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateInputCost('1500');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 6개 초과이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateSuccessNum('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateSuccessNum('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 숫자 외 값이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateSuccessNum('aaa,1,2,3,4,5');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 1~45 범위 밖이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateSuccessNum('1,2,3,4,5,46');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 1~45 범위 밖이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateSuccessNum('1,2,3,4,5,0');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호가 1~45 범위 밖이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateSuccessNum('1,2,3,4,5,-1');
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 1~45 범위 밖이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateBonusNum('-1');
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 1~45 범위 밖이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateBonusNum('46');
    }).toThrow('[ERROR]');
  });
  test('보너스 번호가 숫자 외 값이면 예외가 발생한다.', () => {
    expect(() => {
      validator.validateBonusNum('aaa');
    }).toThrow('[ERROR]');
  });
});
