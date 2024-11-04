import { Console } from "@woowacourse/mission-utils";

export default class InputView {

  async readPurchaseAmount() {
    const purchaseAmountStr = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const purchaseAmount = Number(purchaseAmountStr);
    return purchaseAmount;
  }

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningNumbersArr = this.splitNumbers(winningNumbers);
    return winningNumbersArr;
  }

  async readBonusNumber() {
    let bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    bonusNumber = Number(bonusNumber.trim());
    return bonusNumber;
  }

  splitNumbers(winningNumbers) {
    const numbersArray = winningNumbers.split(',').map(number => Number(number.trim()));
    return numbersArray;
  }

}