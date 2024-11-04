import { ERROR_MESSAGE } from '../src/constant/error.js';
import User from '../src/User.js';
import { getLogSpy, mockQuestions } from '../src/util/testUtil.js';

describe('User 클래스의 readPurchaseAmount 메서드 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const runException = async (input, expectedMessage) => {
    const logSpy = getLogSpy();
    mockQuestions([input, '8000']);

    const user = new User();
    await user.readPurchaseAmount();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  };

  test('유효한 구입 금액 입력 시 정상 처리', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['8000']);

    const user = new User();
    await user.readPurchaseAmount();

    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test.each([['-1'], ['0'], ['jnary'], ['123.45'], ['123abc'], ['']])(
    "자연수가 아닌 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(input, ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    },
  );

  test.each([['8001']])(
    "1,000원 단위가 아닌 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(input, ERROR_MESSAGE.NOT_THOUSAND_UNIT);
    },
  );
});

describe('User 클래스의 readWinningNumbers 메서드 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const runException = async (input, expectedMessage) => {
    const logSpy = getLogSpy();
    mockQuestions([input, '1,2,3,4,5,6']);

    const user = new User();
    await user.readWinningNumbers();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  };

  test('유효한 당첨 번호 입력 시 정상 처리', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,6']);

    const user = new User();
    await user.readWinningNumbers();

    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test.each([['1,2,3,4,5,a'], ['jnary'], ['123.45,2,3'], ['']])(
    "자연수가 아닌 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(input, ERROR_MESSAGE.NOT_NATURAL_NUMBER);
    },
  );

  test.each([['1,2,3,4,5,100'], ['20010921'], ['1,45,300']])(
    "자연수인데 로또 번호 범위에 벗어난 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(input, ERROR_MESSAGE.NOT_VALID_RANGE);
    },
  );

  test.each([['1,2,3,4,5,6,7'], ['1,2,3']])(
    "로또 번호 개수가 6개가 아닌 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(input, ERROR_MESSAGE.NOT_EXACT_COUNT(6));
    },
  );

  test.each([['1,2,3,4,1,6'], ['1,1,1,1,1,1']])(
    "로또 번호가 중복된 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(input, ERROR_MESSAGE.DUPLICATED);
    },
  );
});

describe('User 클래스의 readBonusNumber 메서드 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const runException = async (winningInput, bonusInput, expectedMessage) => {
    const logSpy = getLogSpy();
    mockQuestions([winningInput, bonusInput, '7']);

    const user = new User();
    await user.readWinningNumbers();
    await user.readBonusNumber();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  };

  test('유효한 보너스 번호 입력 시 정상 처리', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,6', '15']);

    const user = new User();
    await user.readWinningNumbers();
    await user.readBonusNumber();

    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test.each([['-100'], ['jnary'], ['123.45'], ['']])(
    "자연수가 아닌 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException(
        '1,2,3,4,5,6',
        input,
        ERROR_MESSAGE.NOT_NATURAL_NUMBER,
      );
    },
  );

  test.each([['46'], ['100']])(
    "자연수인데 로또 번호 범위에 벗어난 '%s' 입력 시 예외 처리",
    async (input) => {
      await runException('1,2,3,4,5,6', input, ERROR_MESSAGE.NOT_VALID_RANGE);
    },
  );

  test.each([['1,2,3,4,5,6', '1']])(
    '당첨 번호와 중복된 숫자 입력 시 예외 처리',
    async (winningInput, bonusInput) => {
      await runException(
        winningInput,
        bonusInput,
        ERROR_MESSAGE.ITEM_CONTAINED('당첨 번호'),
      );
    },
  );
});
