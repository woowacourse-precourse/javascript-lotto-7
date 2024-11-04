import { retryOnError } from '../../src/utils/retryOnError';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('retryOnError', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('콜백 함수가 첫 번째 시도에서 성공하면 재시도 없이 결과를 반환한다.', async () => {
    const mockCallback = jest.fn().mockResolvedValue('성공');
    const result = await retryOnError(mockCallback);

    expect(result).toBe('성공');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('콜백 함수가 첫 번째 시도에서 실패하고 두 번째 시도에서 성공하면 재시도를 수행한다.', async () => {
    const mockCallback = jest
      .fn()
      .mockRejectedValueOnce(new Error('첫 번째 실패'))
      .mockResolvedValueOnce('성공');
    const logSpy = getLogSpy();

    const result = await retryOnError(mockCallback);

    expect(result).toBe('성공');
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith('첫 번째 실패');
  });

  test('콜백 함수가 최대 재시도 횟수만큼 실패하면 최종적으로 에러를 발생한다.', async () => {
    const mockCallback = jest.fn().mockRejectedValue(new Error('실패'));
    const logSpy = getLogSpy();

    await expect(retryOnError(mockCallback, 2)).rejects.toThrow('실패');

    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith('실패');
  });
});
