import { Random } from '@woowacourse/mission-utils';
import Generator from '../src/Generator.js';
import OutputProcessor from '../src/OutputProcessor.js';
import { LOTTO } from '../src/constants/lotto.js';

describe('Generator 클래스 테스트', () => {
  const quantity = 2;
  let generator;

  beforeEach(() => {
    generator = new Generator(quantity);
  });

  test('execute 메서드는 올바른 로또 번호 기록을 출력한다.', () => {
    const mockRandom = jest
      .spyOn(Random, 'pickUniqueNumbersInRange')
      .mockReturnValueOnce([5, 12, 1, 20, 7, 2])
      .mockReturnValueOnce([45, 16, 11, 32, 3, 5]);

    const mockOutput = jest.spyOn(OutputProcessor, 'print').mockImplementation(() => {});

    generator.execute();

    expect(mockOutput).toHaveBeenCalledWith('\n2개를 구매했습니다.');
    expect(mockOutput).toHaveBeenCalledWith('[1, 2, 5, 7, 12, 20]\n[3, 5, 11, 16, 32, 45]\n');

    mockRandom.mockRestore();
    mockOutput.mockRestore();
  });

  test('랜덤 번호가 올바른 범위와 개수로 생성되는지 확인한다.', () => {
    const mockRandom = jest.spyOn(Random, 'pickUniqueNumbersInRange').mockReturnValue([1, 2, 3, 4, 5, 6]);
    generator.execute();

    expect(mockRandom).toHaveBeenCalledWith(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH_WINNING_NUMBER);
    expect(mockRandom).toHaveBeenCalledTimes(quantity);

    mockRandom.mockRestore();
  });
});
