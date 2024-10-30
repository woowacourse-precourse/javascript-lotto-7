import { Console } from '@woowacourse/mission-utils';

const readInput = (inputMessage) => {
  try {
    return Console.readLineAsync(inputMessage);
  } catch (error) {
    Console.print('[ERROR] 입력을 처리하는 도중 문제가 발생했습니다. 다시 시도해주세요.');
  }
};

const InputView = {
  async readLottoPurchasePriceAsync() {
    return await readInput('구입금액을 입력해 주세요.\n');
  },
  async readWinningNumbersAsync() {
    return await readInput('당첨 번호를 입력해 주세요.\n');
  },
  async readBonusNumberAsnyc() {
    return await readInput('보너스 번호를 입력해 주세요.\n');
  },
};

export default InputView;
