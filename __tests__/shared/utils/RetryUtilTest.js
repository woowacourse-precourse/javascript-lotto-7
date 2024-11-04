import { MissionUtils } from '@woowacourse/mission-utils';
import { retryUtil } from '../../../src/shared/utils/retryUtil.js';

describe('retryUtil 테스트', () => {
  const MAX_RETRY_COUNT = 5;
  // Console.print 모킹
  beforeEach(() => {
    jest.spyOn(MissionUtils.Console, 'print');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('에러 메시지가 [ERROR]로 시작하는지 확인', async () => {
    const errorMessage = '[ERROR] 잘못된 입력입니다';
    const mockCallback = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    try {
      await retryUtil(mockCallback);
    } catch (error) {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    }
  });

  test('최대 재시도 횟수 초과 시 에러를 throw', async () => {
    const errorMessage = '[ERROR] 잘못된 입력입니다';
    const mockCallback = jest.fn().mockRejectedValue(new Error(errorMessage));

    await expect(retryUtil(mockCallback)).rejects.toThrow(errorMessage);
    expect(MissionUtils.Console.print).toHaveBeenCalledTimes(MAX_RETRY_COUNT + 1);
  });

  test('성공 시 결과값 반환', async () => {
    const expectedResult = '성공';
    const mockCallback = jest.fn().mockResolvedValue(expectedResult);

    const result = await retryUtil(mockCallback);

    expect(result).toBe(expectedResult);
    expect(MissionUtils.Console.print).not.toHaveBeenCalled();
  });

  test('재시도 성공 시 결과값 반환', async () => {
    const errorMessage = '[ERROR] 잘못된 입력입니다';
    const expectedResult = '성공';
    const mockCallback = jest.fn().mockRejectedValueOnce(new Error(errorMessage)).mockResolvedValueOnce(expectedResult);

    const result = await retryUtil(mockCallback);

    expect(result).toBe(expectedResult);
    expect(MissionUtils.Console.print).toHaveBeenCalledTimes(1);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(errorMessage);
  });
});
