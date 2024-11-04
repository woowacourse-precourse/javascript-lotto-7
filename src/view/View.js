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

  printStatistics(statistics) {
    const [three, four, five, fiveBonus, six] = statistics.getStatistics();
    const profit = statistics.getProfit();

    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${three}개`);
    Console.print(`4개 일치 (50,000원) - ${four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${five}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveBonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${six}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  printLotto(lotto) {
    Console.print(`[${lotto.join(', ')}]`);
  }

  printErrorMessage(message) {
    Console.print(message);
  }
}
