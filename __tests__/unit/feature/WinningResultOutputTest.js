import { Console } from '@woowacourse/mission-utils';

describe('당첨 결과 출력 기능 테스트', () => {
  test('당첨 결과 출력 테스트', () => {
    const mockWinningResult = {
      3: 1,
      4: 2,
      5: 3,
      '5B': 4,
      6: 5,
    };
    const logSpy = jest.spyOn(Console, 'print');
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 2개',
      '5개 일치 (1,500,000원) - 3개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 4개',
      '6개 일치 (2,000,000,000원) - 5개',
    ];

    PrintLottoWinningResult(mockWinningResult);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
