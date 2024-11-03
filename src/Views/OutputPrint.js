import { Console } from '@woowacourse/mission-utils';
import { PrizeDescription } from '../Constants/prizeConfig.js';
import { OutputComment } from '../Constants/display.js';

const OutputPrint = {
  message: (message) => {
    Console.print(message);
  },

  error: (errorMessage) => {
    Console.print(errorMessage);
  },

  blankLine: () => {
    Console.print('');
  },

  lottoBundleNumbers: (lottoBundle) => {
    Console.print(`${lottoBundle.getList().length}개를 구매했습니다.`);
    lottoBundle.getList().forEach((lotto) => {
      Console.print(lotto.getPrintString());
    });
    Console.print('');
  },

  statistic: (statistic) => {
    const winningResult = statistic.getWinningResult();
    const earningRate = statistic.getEarningRate();

    Console.print(OutputComment.STATISTIC_TITLE);
    Console.print(OutputComment.LINE);
    Console.print(`${PrizeDescription.FIFTH} - ${winningResult.fifth}개`);
    Console.print(`${PrizeDescription.FOURTH} - ${winningResult.fourth}개`);
    Console.print(`${PrizeDescription.THIRD} - ${winningResult.third}개`);
    Console.print(`${PrizeDescription.SECOND} - ${winningResult.second}개`);
    Console.print(`${PrizeDescription.FIRST} - ${winningResult.first}개`);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  },

  basicNumbers: (basicNumbers) => {
    Console.print(
      `현재 당첨 번호: [${basicNumbers.join(OutputComment.SEPERATOR)}]`
    );
  },
};

export default OutputPrint;
