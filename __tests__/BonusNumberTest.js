import BonusNumberValidator from '../src/BonusNumberValidator';

describe('보너스 번호 유효성 검사 성공 테스트', () => {
  const lottoNumbers = [1, 2, 3, 4, 5, 6];

  test('보너스 번호가 올바르면 입력한 보너스 번호를 그대로 반환한다.', () => {
    expect(BonusNumberValidator.validateBonusNumber('9', lottoNumbers)).toEqual(
      9
    );
  });
});

describe('보너스 번호 유효성 검사 예외 테스트', () => {
  const lottoNumbers = [1, 2, 3, 4, 5, 6];

  test('보너스 번호를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber('', lottoNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호를 하나만 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber('1,2', lottoNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호를 정수로 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber('@', lottoNumbers);
    }).toThrow('[ERROR]');
  });

  test.each(['-1', '0', '100'])(
    '보너스 번호를 1 ~ 45 사이 범위를 벗어난 숫자로 입력하면 예외가 발생한다. (%s)',
    (bonus) => {
      expect(() => {
        BonusNumberValidator.validateBonusNumber(bonus, lottoNumbers);
      }).toThrow('[ERROR]');
    }
  );

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber('1', lottoNumbers);
    }).toThrow('[ERROR]');
  });
});
