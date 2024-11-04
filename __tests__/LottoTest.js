import Lotto from '../src/Lotto';
import { ERROR_MESSAGE } from '../src/constant.js';
import LottoController from '../src/LottoController.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

describe('로또 구매 테스트', () => {
  test('로또를 구매할 때 금액이 숫자가 아닌 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.buyLottos('wowowo');
    }).toThrow(ERROR_MESSAGE.AMOUNT_NOT_NUMBER);
  });

  test('로또를 구매할 때 음수가 입력된 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.buyLottos(-1000);
    }).toThrow(ERROR_MESSAGE.AMOUNT_NEGATIVE);
  });

  test('로또를 구매할 때 1,000원 단위로 나누어 떨어지지 않은 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.buyLottos(500);
    }).toThrow(ERROR_MESSAGE.AMOUNT_NOT_THOUSAND);
  });
});

describe('로또 당첨 번호 테스트', () => {
  test('당첨 번호에 숫자, 구분자 이외에 다른 숫자가 입력된 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningNumbers('1,2,3,q,5,6');
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_INVALID_RANGE);
  });

  test('당첨 번호가 정수가 아닌 숫자가 입력된 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningNumbers('1,2,3,4,5,6.5');
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_INVALID_RANGE);
  });

  test('당첨 번호가 6개가 입력되지 않은 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningNumbers('1,2,3,4,5');
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_LENGTH);
  });

  test('당첨 번호에서 중복된 숫자가 입력된 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningNumbers('1,2,3,4,5,5');
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_DUPLICATE);
  });

  test('당첨 번호의 숫자 범위가 1 ~ 45를 벗어난 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningNumbers('1,2,3,4,5,46');
    }).toThrow(ERROR_MESSAGE.WINNING_NUMBER_INVALID_RANGE);
  });
});

describe('로또 보너스 번호 테스트', () => {
  test('보너스 번호가 정수가 아닌 숫자가 입력된 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningBonusNumber('q');
    }).toThrow(ERROR_MESSAGE.WINNING_BONUS_NUMBER_NOT_INTEGER);
  });

  test('보너스 번호가 1 ~ 45 범위를 벗어난 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    expect(() => {
      controller.setWinningBonusNumber(46);
    }).toThrow(ERROR_MESSAGE.WINNING_BONUS_NUMBER_INVALID_RANGE);
  });

  test('보너스 번호가 당첨 번호와 중복된 경우 예외가 발생한다.', () => {
    const controller = new LottoController();
    controller.setWinningNumbers('1,2,3,4,5,6');
    expect(() => {
      controller.setWinningBonusNumber(6);
    }).toThrow(ERROR_MESSAGE.WINNING_BONUS_NUMBER_DUPLICATE);
  });
});
