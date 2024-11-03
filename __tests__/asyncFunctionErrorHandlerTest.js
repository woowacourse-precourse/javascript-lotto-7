import asyncFunctionErrorHandler from '../src/utils/asyncFunctionErrorHandler.js';
import OutputView from '../src/views/OutputView.js';

jest.mock('../src/views/OutputView.js', () => ({
  __esModule: true,
  default: {
    printMessage: jest.fn(),
  },
}));

describe('asyncFunctionErrorHandler 함수 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('비동기 함수를 정상적으로 호출한다.', async () => {
    const mockAsyncFn = jest.fn().mockResolvedValue('resolved');
    const context = { value: 'context' };

    const result = await asyncFunctionErrorHandler(mockAsyncFn, context);

    expect(result).toBe('resolved');
    expect(mockAsyncFn).toHaveBeenCalled();
    expect(OutputView.printMessage).not.toHaveBeenCalled();
  });

  test('잘못된 입력일 경우, 에러 메시지를 출력하고 비동기 함수를 재호출한다.', async () => {
    const error = new Error('[ERROR]');
    const mockAsyncFn = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce('resolved');
    const context = { value: 'context' };

    const result = await asyncFunctionErrorHandler(mockAsyncFn, context);

    expect(mockAsyncFn).toHaveBeenCalledTimes(2);
    expect(OutputView.printMessage).toHaveBeenCalledWith(error.message);
    expect(result).toBe('resolved');
  });
});
