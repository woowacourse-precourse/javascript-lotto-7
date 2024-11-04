import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";
import LottoController from "../controllers/LottoController.js";

class ConsoleView {
  async getPurchaseAmount() {
    const validator = new Validator();
    let purchaseAmount;
    for (; ;) {
      try {
        purchaseAmount = await Console.readLineAsync("구매금액을 입력해 주세요.\n");
        validator.validatePurchaseAmount(purchaseAmount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return purchaseAmount;
  }

  async getWinningNumbers() {
    const validator = new Validator();
    const lottoController = new LottoController();
    let winningNumbersInput;
    for (; ;) {
      try {
        winningNumbersInput = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        validator.validateWinningNumbersInput(winningNumbersInput);
        const winningNumbers = lottoController.extractWinningNumbers(winningNumbersInput);
        validator.validateDuplicateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber(winningNumbers) {
    const validator = new Validator();
    let bonusNumber;
    for (; ;) {
      try {
        bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n")
        validator.validateBonusNumber(bonusNumber, winningNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  printLottoCount(purchaseAmount) {
    Console.print(`\n${purchaseAmount / 1000}개를 구매했습니다.`)
  }

  printLottoNumbers(lottos) {
    for (let index = 0; index < lottos.length; index++) {
      const numbers = lottos[index].LottoNumbers;
      Console.print(numbers);
    }
  }

  printResultPrize(resultPrize) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000)원 - ${resultPrize.fifth}개`);
    Console.print(`4개 일치 (50,000)원 - ${resultPrize.fourth}개`);
    Console.print(`5개 일치 (1,500,000)원 - ${resultPrize.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000)원 - ${resultPrize.second}개`);
    Console.print(`6개 일치 (2,000,000,000)원 - ${resultPrize.first}개`);
  }
}

export default ConsoleView;