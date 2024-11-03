import Lotto from '../src/model/Lotto.js';
import LottoController from '../src/controller/LottoController.js';
import Validator from '../src/controller/Validator.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1이상 45이하의 정수가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1,2,3,4,5,46');
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto('0,2,3,4,5,6');
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto('1,2,3.3,4,5,6');
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto('1,2,-3,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 빈 입력값인 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkPurchaseAmount('');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1,000원 이상, 1,000,000원 이하 범위를 벗어나는 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkPurchaseAmount('-2000');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkPurchaseAmount('500');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkPurchaseAmount('1500000');
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.checkPurchaseAmount('1500');
    }).toThrow('[ERROR]');

    expect(() => {
      Validator.checkPurchaseAmount('1000001');
    }).toThrow('[ERROR]');
  });

  test('로또 티켓 생성 함수 테스트', () => {
    expect(() => {
      LottoController.generateLottoTickets(1);
    }).not.toThrow();

    expect(() => {
      LottoController.generateLottoTickets(100);
    }).not.toThrow();
  });
});
