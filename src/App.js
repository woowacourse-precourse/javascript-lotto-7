import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import UserLotto from "./UserLotto.js";
import Lotto from "./Lotto.js";
import BonusNumber from "./BonusNumber.js";
import LottoResult from "./LottoResult.js";
import Display from "./Display.js";

class App {
  constructor() {
    this.parser = new Parser();
    this.userLotto = new UserLotto();
    this.lotto = null;
    this.bonusNumber = null;
    this.lottoResult = new LottoResult();
    this.display = new Display();
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const userLottos = this.generateLottos(purchaseAmount);
    const { winningNumbers, bonusNumber } = await this.getWinningNumbers();

    this.calculateResults(userLottos, winningNumbers, bonusNumber);
    this.displayResults(purchaseAmount);
  }

  async getPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    return this.parser.parsePurchaseAmount(purchaseAmountInput);
  }

  generateLottos(purchaseAmount) {
    Console.print(``);
    this.userLotto.generateUserLottos(purchaseAmount);
    const userLottos = this.userLotto.getUserLottos();
    this.display.displayTickets(userLottos);
    return userLottos;
  }

  async getWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = this.parser.parseNumbers(winningNumbersInput);
    this.lotto = new Lotto(winningNumbers);

    const bonusNumberInput = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = this.parser.parseBonusNumber(bonusNumberInput);
    this.bonusNumber = new BonusNumber(
      bonusNumber,
      this.lotto.getLottoNumber()
    );

    return {
      winningNumbers: this.lotto.getLottoNumber(),
      bonusNumber: this.bonusNumber.getBonusNumber(),
    };
  }

  calculateResults(userLottos, winningNumbers, bonusNumber) {
    this.lottoResult.calculateRank(userLottos, winningNumbers, bonusNumber);
  }

  displayResults(purchaseAmount) {
    const winningAmount = this.lottoResult.calculateWinningAmount();
    const profitRate = this.lottoResult.calculateProfitRate(
      winningAmount,
      purchaseAmount
    );
    this.display.displayRankNumber(this.lottoResult.ranks);
    this.display.displayReturn(profitRate);
  }
}

export default App;
