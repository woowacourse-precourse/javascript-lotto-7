import { readUserInput } from '../../src/utils/readUserInput';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('readUserInput', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('입력값이 정상적일 때 입력을 반환한다.', async () => {
    mockQuestions(['정상 입력']);
    const mockValidator = jest.fn();

    const result = await readUserInput('메시지', [mockValidator]);

    expect(result).toBe('정상 입력');
    expect(mockValidator).toHaveBeenCalledWith('정상 입력', true);
    expect(mockValidator).toHaveBeenCalledTimes(1);
  });

  test('입력값이 검증 실패 시 재시도하고, 재시도 횟수 내에 성공하면 입력을 반환한다.', async () => {
    mockQuestions(['첫 번째 입력', '두 번째 입력', '정상 입력']);
    const mockValidator = jest
      .fn()
      .mockImplementationOnce(() => {
        throw new Error('검증 실패');
      })
      .mockImplementationOnce(() => {
        throw new Error('검증 실패');
      })
      .mockImplementation(() => {});

    const result = await readUserInput('메시지', [mockValidator]);

    expect(result).toBe('정상 입력');
    expect(mockValidator).toHaveBeenCalledTimes(3);
    expect(mockValidator).toHaveBeenNthCalledWith(1, '첫 번째 입력', true);
    expect(mockValidator).toHaveBeenNthCalledWith(2, '두 번째 입력', true);
    expect(mockValidator).toHaveBeenNthCalledWith(3, '정상 입력', true);
  });

  test('검증이 모두 실패하여 최대 재시도 횟수를 초과하면 에러를 발생시킨다.', async () => {
    mockQuestions(['첫 번째 입력', '두 번째 입력', '세 번째 입력']);
    const mockValidator = jest.fn().mockImplementation(() => {
      throw new Error('검증 실패');
    });

    await expect(readUserInput('메시지', [mockValidator], 2)).rejects.toThrow(
      '검증 실패'
    );
    expect(mockValidator).toHaveBeenCalledTimes(3);
  });
});
