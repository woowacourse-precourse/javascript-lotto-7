import { Console } from '@woowacourse/mission-utils';

export class View {
  async promptPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return input.trim();
  }

  async promptPurchaseLotto(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  async promptWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    return input.trim();
  }

  async promptBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    return input.trim();
  }

  printLotto(lotto) {
    Console.print(lotto);
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}
