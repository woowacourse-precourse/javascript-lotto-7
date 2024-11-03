import MakeWinningLotto from '../src/MakeWinningLotto.js';
import { scan } from '../src/utils/scanner.js';

jest.mock('../src/utils/scanner.js', () => ({
  scan: jest.fn(),
}));

describe('MakeWinningLotto 클래스', () => {
  const winningLotto = new MakeWinningLotto();

  test('splitLotto() 테스트', async () => {
    scan.mockResolvedValue('1,2,3,4,5,6');
    await winningLotto.splitLotto();
    expect(winningLotto.winningLottoNumber).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('getBonusNumber() 테스트', async () => {
    winningLotto.winningLottoNumber = [1, 2, 3, 4, 5, 6];
    scan.mockResolvedValue('1');

    await expect(winningLotto.getBonusNumber()).rejects.toThrow('[ERROR]');

    scan.mockResolvedValue('46');
    await expect(winningLotto.getBonusNumber()).rejects.toThrow('[ERROR]');
  });
});
