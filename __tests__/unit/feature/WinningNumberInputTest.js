import { Console } from '@woowacourse/mission-utils';
import Lotto from '../../../src/components/Lotto.js';

describe('당첨 번호 입력 기능 테스트', () => {
  test('당첨 번호 1,2,3,4,5,6을 입력받아 저장한다.', async () => {
    const mockWinningNumber = '1,2,3,4,5,6';
    Console.readLineAsync = jest.fn().mockResolvedValue(mockWinningNumber);
    const log = [1, 2, 3, 4, 5, 6];

    const lotto = await Lotto.createLotto();

    expect(lotto.getNumbers()).toEqual(log);
  });

  test('오름차순 테스트, 당첨 번호 6,5,4,3,2,1을 입력받아 저장한다.', async () => {
    const mockWinningNumber = '6,5,4,3,2,1';
    Console.readLineAsync = jest.fn().mockResolvedValue(mockWinningNumber);
    const log = [1, 2, 3, 4, 5, 6];

    const lotto = await Lotto.createLotto();

    expect(lotto.getNumbers()).toEqual(log);
  });
});
