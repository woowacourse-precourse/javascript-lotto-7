import { Console } from '@woowacourse/mission-utils';

const OutputPrint = {
  message: (message) => {
    Console.print(message);
  },

  error: (errorMessage) => {
    Console.print(`[ERROR] ${errorMessage}`);
  },

  blankLine: () => {
    Console.print('');
  },

  lottoBundleNumbers: (lottoBundle) => {
    Console.print('8개를 구매했습니다.');
    lottoBundle.getList().forEach((lotto) => {
      Console.print(lotto.getPrintString());
    });
    Console.print('');
  },
};

export default OutputPrint;
