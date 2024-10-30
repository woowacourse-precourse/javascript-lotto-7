import { Console } from '@woowacourse/mission-utils';

const InputView = {
  readLottoPurchaseAmount() {
    try {
      return Console.readLineAsync('구입금액을 입력해 주세요.');
    } catch (e) {
      Console.print('[ERROR] 입력을 처리하는 도중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  },
  readWinningNumber() {
    try {
      return Console.readLineAsync('당첨 번호를 입력해 주세요.');
    } catch (e) {
      Console.print('[ERROR] 입력을 처리하는 도중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  },
  readBonusNumber() {
    try {
      return Console.readLineAsync('보너스 번호를 입력해 주세요.');
    } catch (e) {
      Console.print('[ERROR] 입력을 처리하는 도중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  },
}

export default InputView;
