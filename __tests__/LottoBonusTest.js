import LottoBonus from '../src/model/LottoBonus.js';

describe('보너스 번호 테스트', () => {
  test('보너스 번호가 공백이면 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus('');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 문자가 있으면 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus('1k');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호를 두 개 이상 입력하면 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus([1, 2]);
    }).toThrow('[ERROR]');
  });

  test('정수가 아닌 수를 입력할 시 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus(1.1);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 0이하의 수라면 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus(0);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 46 이상의 수라면 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus(46);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 당첨 번호와 중복되는 수가 있다면 예외를 발생한다.', () => {
    expect(() => {
      new LottoBonus(46);
    }).toThrow('[ERROR]');
  });
});
