import Validator from '../src/controller/Validator.js';

describe('유효성 검사 테스트', () => {
  test('당첨 번호의 개수가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkLottoNumbers('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkLottoNumbers('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkLottoNumbers('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1이상 45이하의 정수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkLottoNumbers('1,2,3,4,5,46');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkLottoNumbers('0,2,3,4,5,6');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkLottoNumbers('1,2,3.3,4,5,6');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkLottoNumbers('1,2,-3,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 빈 입력값인 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkBonusNumber('');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkBonusNumber(null);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 한 개 초과인 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkBonusNumber('1,2');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkBonusNumber('1,2,3,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1이상 45이하 정수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkBonusNumber('-1');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkBonusNumber('2.5');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkBonusNumber('46');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 기존 당첨 번호와 중복되는 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkBonusNumberDuplicate('1,2,3,4,5,6', '4');
    }).toThrow('[ERROR]');
  });
});
