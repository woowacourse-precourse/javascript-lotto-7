import LottoStore from '../src/model/LottoStore.js';
import { getUniqueNumbersInRange } from '../src/util/random.js';

jest.mock('../src/util/random.js');

describe('LottoStore', () => {
  beforeEach(() => {
    getUniqueNumbersInRange.mockImplementation(() => [1, 2, 3, 4, 5, 6]); // 모든 복권 번호가 동일하게 반환
  });

  test('당첨 번호와 비교했을 때 올바른 일치 결과를 반환해야 함', () => {
    const lottoStore = new LottoStore(5);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const winningBonusNumber = 7;
    lottoStore.setWinningNumbers(winningNumbers, winningBonusNumber);

    const result = lottoStore.compare();

    console.log(result.result);

    expect(result.amount).toBe(5);
    expect(result.result).toEqual([
      [5, 0],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 5],
    ]);
  });
});
