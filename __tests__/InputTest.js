import { Console } from '@woowacourse/mission-utils';
import { inputBuyCash } from '../src/console/input.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('로또 입력 테스트', () => {
  test('구입 금액이 1000원으로 나누어 떨어지지 않은 경우 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('12600');

    await expect(inputBuyCash()).rejects.toThrow('[ERROR]');
  });

  test('구입 금액이 숫자가 아닌 다른 문자 등이 오면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('ten');

    await expect(inputBuyCash()).rejects.toThrow('[ERROR]');
  });

  afterEach(() => {
    Console.readLineAsync.mockClear();
  });
});
