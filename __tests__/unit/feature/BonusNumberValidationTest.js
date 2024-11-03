const ERROR = '[ERROR]';

describe('보너스 번호 검증 테스트, 정상 테스트', () => {
  test('보너스 번호 : 1', () => {
    const mockBonusNumber = '1';
    expect(() => bonusNumberValidator(mockBonusNumber)).not.toThrow();
  });

  test('보너스 번호 : 45', () => {
    const mockBonusNumber = '45';
    expect(() => bonusNumberValidator(mockBonusNumber)).not.toThrow();
  });
});

describe('보너스 번호 검증 테스트, 예외 테스트', () => {
  test('숫자 검증, 보너스 번호 : ab', () => {
    const mockBonusNumber = 'ab';
    expect(() => bonusNumberValidator(mockBonusNumber)).toThrow(ERROR);
  });

  test('숫자 검증, 보너스 번호 : ', () => {
    const mockBonusNumber = '';
    expect(() => bonusNumberValidator(mockBonusNumber)).toThrow(ERROR);
  });

  test('숫자 범위 검증, 보너스 번호 : 46  : ', () => {
    const mockBonusNumber = '46';
    expect(() => bonusNumberValidator(mockBonusNumber)).toThrow(ERROR);
  });

  test('숫자 범위 검증, 보너스 번호 : 0', () => {
    const mockBonusNumber = '0';
    expect(() => bonusNumberValidator(mockBonusNumber)).toThrow(ERROR);
  });

  test('숫자 범위 검증, 보너스 번호 : -1', () => {
    const mockBonusNumber = '-1';
    expect(() => bonusNumberValidator(mockBonusNumber)).toThrow(ERROR);
  });

  test('숫자 범위 검증, 보너스 번호 : 100', () => {
    const mockBonusNumber = '100';
    expect(() => bonusNumberValidator(mockBonusNumber)).toThrow(ERROR);
  });
});
