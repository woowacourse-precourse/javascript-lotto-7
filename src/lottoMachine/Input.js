import { Console } from '@woowacourse/mission-utils';

export class Input {
  async getPurchasePrice() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  async getWinningNumbers() {
    return await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  async getBonusNumber() {
    return await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }
}
