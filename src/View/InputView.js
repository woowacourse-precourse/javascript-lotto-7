import { Console } from "@woowacourse/mission-utils";


export default class InputView {

  async readPurchaseAmount() {
    const PurchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.");
    return PurchaseAmount;
  }

  async readWinningNumber() {
    const winningNumber = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    return winningNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    return bonusNumber;
  }

}