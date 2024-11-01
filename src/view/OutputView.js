import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printError(exception) {
    Console.print(exception.message);
  }

  static printMessage(message) {
    Console.print(message);
  }

  static printLottoBundle(lottoBundle) {
    lottoBundle.forEach((lotto) => {
      Console.print(OutputView.formatLottoNumbers(lotto.getNumbers()));
    });
  }

  static formatLottoNumbers(numbers) {
    return `[${numbers.join(', ')}]`;
  }
}

export default OutputView;
