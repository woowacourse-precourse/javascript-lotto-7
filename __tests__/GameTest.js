import Game from '../src/game/game.js';
import PurchasedLottos from '../src/lotto/purchased-lottos.js';
import WinningLotto from '../src/lotto/winning-lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockConsolePrint = () => {
  const printSpy = jest.spyOn(MissionUtils.Console, 'print');
  printSpy.mockClear();
  return printSpy;
};

describe('Game 클래스 테스트', () => {
  test('정상적인 로또 게임 결과 출력', () => {
    const purchasedLottos = new PurchasedLottos([
      { getNumbers: () => [8, 21, 23, 41, 42, 43] },
      { getNumbers: () => [3, 5, 11, 16, 32, 38] },
      { getNumbers: () => [1, 2, 3, 4, 5, 6] },
    ]);

    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const game = new Game(purchasedLottos, winningLotto);

    const logSpy = mockConsolePrint();
    game.play();

    const expectedLogs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 66666666.7%입니다.',
    ];

    expectedLogs.forEach((expectedLog, index) => {
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, expectedLog);
    });
  });

  test('5개 일치 및 보너스 일치 당첨 결과 확인', () => {
    const purchasedLottos = new PurchasedLottos([{ getNumbers: () => [8, 21, 23, 41, 42, 43] }, { getNumbers: () => [1, 2, 3, 4, 5, 7] }]);

    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const game = new Game(purchasedLottos, winningLotto);

    const logSpy = mockConsolePrint();
    game.play();

    const expectedLogs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
