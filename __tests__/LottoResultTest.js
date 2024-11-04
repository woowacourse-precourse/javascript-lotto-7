import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/lotto/data/Lotto.js';
import lottoConfig from '../src/config.js';
import OutputPrinter from '../src/lotto/view/OutputPrinter.js';
import LottoResultManager from '../src/lotto/model/LottoResultManager.js';

const winningRules = lottoConfig.WINNING_RULES;

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

// "3개 일치 (5,000원) - 1개",
// "4개 일치 (50,000원) - 0개",
// "5개 일치 (1,500,000원) - 0개",
// "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",

describe('로또 결과 출력 테스트', () => {
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
});