import inputView from '../src/views/inputView.js';
import { ERROR_MESSAGES } from '../src/constants/errorMessage.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('inputView 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('promptUserInput이 정상적으로 입력을 반환해야 한다', async () => {
    Console.readLineAsync.mockResolvedValue('1000');
    const message = '구입금액을 입력해 주세요.\n';
    const result = await inputView.promptUserInput(message);
    expect(result).toBe('1000');
    expect(Console.readLineAsync).toHaveBeenCalledWith(message);
  });

  test('promptUserInput에서 Console.readLineAsync 에러 발생 시 INPUT_ERROR 메시지를 반환해야 한다', async () => {
    Console.readLineAsync.mockRejectedValue(new Error('Read Error'));

    await expect(inputView.promptUserInput('메시지')).rejects.toThrow(
      ERROR_MESSAGES.INPUT_ERROR
    );
  });
});
