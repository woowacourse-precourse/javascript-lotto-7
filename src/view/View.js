import { Console } from '@woowacourse/mission-utils';

export class View {
  async promptPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return input.trim();
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}
