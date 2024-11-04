import { Console } from '@woowacourse/mission-utils';

export class Input {
  async getPurchasePrice() {
    const purchasePriceGuidanceMassage = '구입금액을 입력해 주세요.\n';

    return await Console.readLineAsync(purchasePriceGuidanceMassage);
  }

  async getWinningNumbers() {
    const winningNumbersGuidanceMassage = '\n당첨 번호를 입력해 주세요.\n';

    return await Console.readLineAsync(winningNumbersGuidanceMassage);
  }

  async getBonusNumber() {
    const bonusNumberGuidanceMassage = '\n보너스 번호를 입력해 주세요.\n';

    return await Console.readLineAsync(bonusNumberGuidanceMassage);
  }
}
