import { ERROR_MESSAGE } from '../src/constant/error';
import User from '../src/User';
import { getLogSpy, mockQuestions } from './testUtil';

const runException = async (input, expectedMessage) => {
  const logSpy = getLogSpy();
  mockQuestions([input, '8000']);

  const user = new User();
  await user.readPurchaseAmount();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedMessage));
};

describe('User 클래스의 readPurchaseAmount 메서드 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

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
