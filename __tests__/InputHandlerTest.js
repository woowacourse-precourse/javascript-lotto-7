import InputHandler from '../src/temp_controller/InputHandler.js';

describe('올바른 구매 금액 반환 테스트', () => {
  let inputHandler;
  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  test('사용자가 입력한 구매금액이 올바르면 정상적으로 값을 반환한다.', () => {
    const purchseAmount = inputHandler.getValidatedPurchseAmount('1000');
    expect(purchseAmount).toEqual(1000);
  });

  test('사용자가 구매금액을 입력하지 않았으면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedPurchseAmount('');
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('사용자가 입력한 구매금액이 숫자가 아니면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedPurchseAmount('천원');
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
    expect(() => {
      inputHandler.getValidatedPurchseAmount('$$');
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
  });

  test('사용자가 입력한 구매금액이 1000원 단위가 아니면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedPurchseAmount('1500');
    }).toThrow('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
  });
});

describe('올바른 당첨 번호 반환 테스트', () => {
  let inputHandler;
  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  test('사용자가 입력한 당첨 번호가 올바르면 정상적으로 값을 반환한다.', () => {
    const winningNumbers =
      inputHandler.getValidatedWinningNumbers('1,2,3,4,5,6');
    expect(winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('사용자가 당첨 번호 입력 시 구분자를 잘못 사용했을 경우 예외가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedWinningNumbers('1,2,,3,4,5');
    }).toThrow('[ERROR] 구분자가 잘못되었습니다.');
  });

  test('사용자가 입력한 번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedWinningNumbers('one,tow,three,four,five,six');
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
  });

  test('사용자가 입력한 번호가 양의 정수가 아닌 경우 예외가 발생한다. ', () => {
    expect(() => {
      inputHandler.getValidatedWinningNumbers('0.4,1,2,3,4,5');
    }).toThrow('[ERROR] 모든 숫자는 양의 정수여야 합니다.');
  });

  test('사용자가 입력한 번호가 1과 45 사이 값이 아니면 예외가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedWinningNumbers('1,5,8,19,40,60');
    }).toThrow('[ERROR] 모든 숫자는 1부터 45 사이여야 합니다.');
  });

  test('사용자가 입력한 당첨 번호가 여섯개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedWinningNumbers('1,2,3,4,5');
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('사용자가 입력한 당첨 번호에서 중복되는 값이 존재하면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedWinningNumbers('1,2,3,3,4,5');
    }).toThrow('[ERROR] 중복되는 번호가 존재합니다.');
  });
});

describe('올바른 보너스 번호 반환 테스트', () => {
  let inputHandler;
  beforeEach(() => {
    inputHandler = new InputHandler();
  });

  test('사용자가 입력한 보너스 번호가 올바르면 정상적으로 값을 반환한다.', () => {
    const bonusNumbers = inputHandler.getValidatedBonusNumber(
      '7',
      [1, 2, 3, 4, 5, 6]
    );
    expect(bonusNumbers).toEqual(7);
  });

  test('사용자가 입력한 번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedBonusNumber('one', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
  });

  test('사용자가 입력한 번호가 양의 정수가 아닌 경우 예외가 발생한다. ', () => {
    expect(() => {
      inputHandler.getValidatedBonusNumber('0.4', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 모든 숫자는 양의 정수여야 합니다.');
  });

  test('사용자가 입력한 번호가 1과 45 사이 값이 아니면 예외가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedBonusNumber('60');
    }).toThrow('[ERROR] 모든 숫자는 1부터 45 사이여야 합니다.');
  });

  test('당첨 번호에서 입력한 보너스 번호와 중복되는 값이 존재하면 에러가 발생한다.', () => {
    expect(() => {
      inputHandler.getValidatedBonusNumber('5', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR] 당첨번호와 중복되는 번호입니다.');
  });
});
