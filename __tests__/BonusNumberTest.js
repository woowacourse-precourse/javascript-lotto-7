import BounsNumber from '../src/models/BonusNumber.js';

describe('보너스 번호 클래스 테스트', () => {
  test('보너스 번호의 타입이 숫자 타입이 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BounsNumber([1, 2, 3, 4, 5, 6], '1000j');
    }).toThrowError('[ERROR] 보너스 번호는 숫자타입이어야 합니다.');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new BounsNumber([1, 2, 3, 4, 5, 6], '6');
    }).toThrowError('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });

  test('보너스 번호가 로또 번호 범위보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new BounsNumber([1, 2, 3, 4, 5, 6], '0');
    }).toThrowError(
      '[ERROR] 보너스 번호의 숫자 범위는 로또 번호의 숫자 범위와 같이 1~45여야 합니다.',
    );
  });

  test('보너스 번호가 로또 번호 범위보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new BounsNumber([1, 2, 3, 4, 5, 6], '46');
    }).toThrowError(
      '[ERROR] 보너스 번호의 숫자 범위는 로또 번호의 숫자 범위와 같이 1~45여야 합니다.',
    );
  });

  test('보너스 번호가 정수형이 아닌 소수 형태면 예외가 발생한다.', () => {
    expect(() => {
      new BounsNumber([1, 2, 3, 4, 5, 6], '4.5');
    }).toThrowError('[ERROR] 보너스 번호는 정수형이어야 합니다.');
  });
});
