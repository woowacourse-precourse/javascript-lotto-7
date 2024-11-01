import { Console } from '@woowacourse/mission-utils';

export class View {
  async promptPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return input.trim();
  }

  async promptPurchaseLotto(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  printLotto(lotto) {
    Console.print(lotto);
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}
