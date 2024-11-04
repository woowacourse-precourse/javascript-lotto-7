import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/lotto/data/Lotto.js';
import lottoConfig from '../src/config.js';
import OutputPrinter from '../src/lotto/view/OutputPrinter.js';
import LottoResultManager from '../src/lotto/model/LottoResultManager.js';
import RateCalculator from '../src/lotto/model/RateCalculator.js';

const winningRules = lottoConfig.WINNING_RULES;

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('로또 당첨 결과 출력 테스트', () => {
  test.each([
    {
      name: '로또 번호 중 6개가 일치하는 경우 당첨 통계에 일치 개수가 출력된다.',
      lottos: [
        new Lotto([3, 5, 11, 16, 32, 38]),
      ],
      winningNumbers: [3, 5, 11, 16, 32, 38],
      bonusNumber: 45,
      log: '6개 일치 (2,000,000,000원) - 1개'
    },
    {
      name: '로또 번호 중 5개가 일치하고 보너스 번호가 일치하는 경우 당첨 통계에 일치 개수가 출력된다.',
      lottos: [
        new Lotto([3, 5, 11, 16, 32, 38]),
      ],
      winningNumbers: [1, 5, 11, 16, 32, 38],
      bonusNumber: 3,
      log: '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개'
    },
    {
      name: '로또 번호 중 5개가 일치하는 경우 당첨 통계에 일치 개수가 출력된다.',
      lottos: [
        new Lotto([3, 5, 11, 16, 32, 38]),
      ],
      winningNumbers: [1, 5, 11, 16, 32, 38],
      bonusNumber: 45,
      log: '5개 일치 (1,500,000원) - 1개'
    },
    {
      name: '로또 번호 중 4개가 일치하는 경우 당첨 통계에 일치 개수가 출력된다.',
      lottos: [
        new Lotto([3, 5, 11, 16, 32, 38]),
      ],
      winningNumbers: [1, 4, 11, 16, 32, 38],
      bonusNumber: 45,
      log: '4개 일치 (50,000원) - 1개'
    },
    {
      name: '로또 번호 중 5개가 일치하는 경우 당첨 통계에 일치 개수가 출력된다.',
      lottos: [
        new Lotto([3, 5, 11, 16, 32, 38]),
      ],
      winningNumbers: [1, 4, 10, 16, 32, 38],
      bonusNumber: 45,
      log: '3개 일치 (5,000원) - 1개'
    }
  ])(`$name`, ({ lottos, winningNumbers, bonusNumber, log }) => {
    const logSpy = getLogSpy();
    const lottoResultManager = new LottoResultManager(winningRules);

    const winningResults = lottoResultManager.generateWinningResult(lottos, winningNumbers, bonusNumber);
    OutputPrinter.printWinningResults(winningResults);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  describe('로또 당첨 수익률 테스트', () => {
    test.each([
      {
        name: '로또 당첨 금액과 구입 금액에 따라서 수익률이 출력된다.',
        purchaseAmount: 8000,
        lottos: [
          new Lotto([8, 21, 23, 41, 42, 43]),
          new Lotto([3, 5, 11, 16, 32, 38]),
          new Lotto([7, 11, 16, 35, 36, 44]),
          new Lotto([1, 8, 11, 31, 41, 42]),
          new Lotto([13, 14, 16, 38, 42, 45]),
          new Lotto([7, 11, 30, 40, 42, 43]),
          new Lotto([2, 13, 22, 32, 38, 45]),
          new Lotto([1, 3, 5, 14, 22, 45]),
        ],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        log: '총 수익률은 62.5%입니다.',
      }
    ])(`$name`, ({ purchaseAmount, lottos, winningNumbers, bonusNumber, log }) => {
      const logSpy = getLogSpy();
      const lottoResultManager = new LottoResultManager(winningRules);
      lottoResultManager.generateWinningResult(lottos, winningNumbers, bonusNumber);

      const rateOfReturn = RateCalculator.calculateRateOfReturn(lottoResultManager.getTotalPrize(), purchaseAmount);
      OutputPrinter.printTotalRateOfReturn(rateOfReturn);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});