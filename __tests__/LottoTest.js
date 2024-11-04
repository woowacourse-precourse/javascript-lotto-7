import Lotto  from '../src/Lotto';
import Validator from '../src/validate/Validator';
import LottoResult from '../src/Lotto_modules/LottoResult';


describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 추가 테스트 케이스
  test('로또 번호에 숫자가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('올바른 번호 배열을 입력했을 때 정상적으로 로또가 생성된다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('보너스 번호 검증 테스트', () => {
  test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      Validator.validateBonusNumber(6, winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      Validator.validateBonusNumber(0, winningNumbers);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateBonusNumber(46, winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('올바른 보너스 번호가 입력되면 정상적으로 통과된다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = Validator.validateBonusNumber(7, winningNumbers);
    expect(bonusNumber).toBe(7);
  });
});

describe('구입 금액 검증 테스트', () => {
  test('음수 또는 0이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseAmount(-1000);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validatePurchaseAmount(0);
    }).toThrow('[ERROR]');
  });

  test('1,000원 단위가 아닌 금액이 입력되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.validatePurchaseAmount(1500);
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validatePurchaseAmount(250);
    }).toThrow('[ERROR]');
  });

  test('정상적인 1,000원 단위의 금액이 입력되면 통과된다.', () => {
    expect(() => {
      Validator.validatePurchaseAmount(3000);
    }).not.toThrow();
  });
});

describe('당첨 통계와 수익률 계산 테스트', () => {
  test('정확한 일치 개수 계산', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const lottos = [
      new Lotto([1, 2, 3, 7, 8, 9]), // 3개 일치
      new Lotto([1, 2, 3, 4, 8, 9]), // 4개 일치
      new Lotto([1, 2, 3, 4, 5, 9]), // 5개 일치
      new Lotto([1, 2, 3, 4, 5, 7]), // 5개 + 보너스 일치
      new Lotto([1, 2, 3, 4, 5, 6]), // 6개 일치
    ];
    const bonusNumber = 7;
    const result = LottoResult.calculate(lottos, winningNumbers, bonusNumber);

    expect(result.fifth).toBe(1);
    expect(result.fourth).toBe(1);
    expect(result.third).toBe(1);
    expect(result.second).toBe(1);
    expect(result.first).toBe(1);
  });

  test('당첨된 로또가 없을 때 수익률은 0%로 계산된다.', () => {
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    const earningsRate = LottoResult.calculateEarningsRate(result, 10000);
    expect(earningsRate).toBe(0.0);
  });
});

describe('입력 예외 처리 테스트', () => {
  test('비어있는 값 입력 시 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumbers('');
    }).toThrow('[ERROR]');
  });

  test('잘못된 형식으로 입력된 값이 있을 경우 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumbers('1, 2, 3, 4, five, 6');
    }).toThrow('[ERROR]');
  });

  test('공백이나 특수 문자가 포함된 입력 시 예외가 발생한다.', () => {
    expect(() => {
      Validator.validateWinningNumbers('1, 2, , , 3');
    }).toThrow('[ERROR]');
    expect(() => {
      Validator.validateWinningNumbers('1, 2, @, 4, 5, 6');
    }).toThrow('[ERROR]');
  });
});
