import { MissionUtils } from '@woowacourse/mission-utils';
import LottoManager from '../src/components/LottoManager.js';
import { lottoMatchResult } from '../src/utils/LottoMatchResult.js';
import LottoMachine from '../src/components/LottoMachine.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoManager 클래스 테스트', () => {
  test('calculateRateOfReturn 테스트', () => {
    const lottoManager = new LottoManager();
    lottoManager.machine = new LottoMachine(5000);

    const matchObj = {
      3: 1,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
    const rateOfReturn = lottoManager.calculateRateOfReturn(matchObj);

    expect(rateOfReturn).toBe('100.0');
  });

  test('matchLottos 테스트', () => {
    const lottoManager = new LottoManager();

    const lottos = [
      {
        match: jest.fn(() => 3),
      },
      {
        match: jest.fn(() => 4),
      },
      {
        match: jest.fn(() => 5),
      },
      {
        match: jest.fn(() => 5.5),
      },
      {
        match: jest.fn(() => 6),
      },
    ];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const matchObj = lottoManager.matchLottos(
      lottos,
      winningLotto,
      bonusNumber,
    );

    expect(matchObj).toStrictEqual({
      3: 1,
      4: 1,
      5: 1,
      5.5: 1,
      6: 1,
    });
  });

  test('LottoMatchResult 테스트', () => {
    const logSpy = getLogSpy();
    const matchObj = {
      3: 1,
      4: 1,
      5: 1,
      5.5: 1,
      6: 1,
    };

    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 100.0%입니다.',
    ];

    const rateOfReturn = '100.0';
    lottoMatchResult(matchObj, rateOfReturn);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
