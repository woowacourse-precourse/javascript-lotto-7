import winningNumberValidator from '../../../src/utils/validation/winningNumberValidator.js';

const ERROR = '[ERROR]';

describe('당첨 번호 검증 테스트, 정상 테스트', () => {
  test('당첨 번호 : 1,2,3,4,5,6', () => {
    const winningNumbers = '1,2,3,4,5,6';
    expect(() => winningNumberValidator(winningNumbers)).not.toThrow();
  });

  test('당첨 번호 : 6,5,4,3,2,1', () => {
    const winningNumbers = '6,5,4,3,2,1';
    expect(() => winningNumberValidator(winningNumbers)).not.toThrow();
  });
});

describe('당첨 번호 검증 테스트, 당첨번호가 6개가 아닌 경우', () => {
  test('당첨 번호: 1,2,3,4,5', () => {
    const winningNumbers = '1,2,3,4,5';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1,2,3,4,5,6,7', () => {
    const winningNumbers = '1,2,3,4,5,6,7';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1,2,3,4,5', () => {
    const winningNumbers = '';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });
});

describe('당첨 번호 검증 테스트, 당첨번호가 쉼표로 구분되지 않은 경우', () => {
  test('당첨 번호: 123456', () => {
    const winningNumbers = '123456';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1 2 3 4 5 6', () => {
    const winningNumbers = '1 2 3 4 5 6';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1,,2,3,4,5,6', () => {
    const winningNumbers = '1,,2,3,4,5,6';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1,2,3,4,5,6,', () => {
    const winningNumbers = '1,2,3,4,5,6,';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: ,1,2,3,4,5,6', () => {
    const winningNumbers = ',1,2,3,4,5,6';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1.2.3.4.5.6', () => {
    const winningNumbers = '1.2.3.4.5.6';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });
});

describe('당첨 번호 검증 테스트, 당첨 번호가 숫자가 아닌 경우', () => {
  test('당첨 번호: a,b,c,d,e,f', () => {
    const winningNumbers = 'a,b,c,d,e,f';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1,2,3,4,5,f', () => {
    const winningNumbers = '1,2,3,4,5,f';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: &,2,3,4,5,6', () => {
    const winningNumbers = '&,2,3,4,5,6';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });
});

describe('당첨 번호 검증 테스트, 당첨 번호가 중복되는 경우', () => {
  test('당첨 번호: 1,1,2,3,4,5', () => {
    const winningNumbers = '1,1,2,3,4,5';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });

  test('당첨 번호: 1,2,3,4,5,5', () => {
    const winningNumbers = '1,2,3,4,5,5';
    expect(() => winningNumberValidator(winningNumbers)).toThrow(ERROR);
  });
});
