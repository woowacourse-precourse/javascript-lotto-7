import { Random } from '@woowacourse/mission-utils';
import Generator from '../src/Generator.js';
import OutputProcessor from '../src/OutputProcessor.js';

describe('Generator 클래스 테스트', () => {
  test('execute 메서드는 올바른 로또 번호 기록을 출력한다', () => {
    const mockRandom = jest
      .spyOn(Random, 'pickUniqueNumbersInRange')
      .mockReturnValueOnce([5, 12, 1, 20, 7, 2])
      .mockReturnValueOnce([45, 16, 11, 32, 3, 5]);

    const mockOutput = jest.spyOn(OutputProcessor, 'print').mockImplementation(() => {});

    const numberGenerator = new Generator(2);
    numberGenerator.execute();

    expect(mockOutput).toHaveBeenCalledWith('\n2개를 구매했습니다.');
    expect(mockOutput).toHaveBeenCalledWith('[1, 2, 5, 7, 12, 20]\n[3, 5, 11, 16, 32, 45]\n');

    mockRandom.mockRestore();
    mockOutput.mockRestore();
  });
});
