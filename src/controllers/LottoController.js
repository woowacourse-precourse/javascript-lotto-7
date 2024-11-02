import { Calculator } from "../utils/Calculator.js";
import { Validator } from "../utils/Validator.js";
import { InputView } from "../views/InputView.js";
import { OutputView } from "../views/OutputView.js";
import LottoResult from "../LottoResult.js";
import { SEPARATOR } from "../constants/Constants.js";
import User from "../User.js";
import { RandomNumberGenerator } from "../utils/RandomNumberGenerator.js";

class LottoController {
  #user;
  #lottoResult;
  #totalIssuance;

  async purchase() {
    const purchaseAmount = await this.inputPurchaseAmount();
    this.#user = new User(purchaseAmount);
    this.#totalIssuance = Calculator.totalIssuance(purchaseAmount);
    OutputView.purchaseResult(this.#totalIssuance);
  }

  async issuance() {
    for (let count = 0; count < this.#totalIssuance; count++) {
      const lottoNumber = await RandomNumberGenerator();
      this.#user.getLotto(lottoNumber);
      OutputView.lottoNumber(Calculator.sort(lottoNumber));
    }
  }

  async matching() {
    const winningNumber = await this.inputWinningNumber();
    const bonusNumber = await this.inputBonusNumber(winningNumber);
    const matchWinning = this.#user.matchingWinning(winningNumber);
    const matchBonus = this.#user.matchingBonus(bonusNumber);
    this.#lottoResult = new LottoResult(this.rank(matchWinning, matchBonus));
  }

  async statistics() {
    OutputView.statistics(this.#lottoResult.statistics());
    OutputView.returnRate(
      this.#user.returnRate(this.#lottoResult.totalPrize())
    );
  }

  async inputPurchaseAmount() {
    const purchaseAmount = Number(await InputView.purchaseAmount());

    return await this.validatePurchaseAmount(purchaseAmount);
  }

  async validatePurchaseAmount(number) {
    try {
      Validator.purchaseAmountunit(number);
      Validator.minPurchase(number);
    } catch (error) {
      OutputView.error(error.message);
      return await this.inputPurchaseAmount();
    }

    return number;
  }

  async inputWinningNumber() {
    const winningNumber = (await InputView.winningNumber())
      .split(SEPARATOR)
      .map((number) => Number(number));

    return await this.validateWinningNumber(winningNumber);
  }

  async validateWinningNumber(numbers) {
    try {
      Validator.totalNumber(numbers);
      Validator.numberArrange(numbers);
      Validator.isInteger(numbers);
      Validator.sameNumber(numbers);
    } catch (error) {
      OutputView.error(error.message);
      return await this.inputWinningNumber();
    }

    return numbers;
  }

  async inputBonusNumber(winningNumber) {
    const bonusNumber = Number(await InputView.bonusNumber());

    return this.validateBonusNumber(bonusNumber, winningNumber);
  }

  async validateBonusNumber(number, winningNumbers) {
    let numberArr = [number];
    try {
      Validator.numberArrange(numberArr);
      Validator.isInteger(numberArr);
      winningNumbers.forEach((number) => {
        numberArr.push(number);
      });
      Validator.sameNumber(numberArr);
    } catch (error) {
      OutputView.error(error.message);
      await this.inputBonusNumber(winningNumbers);
    }

    return number;
  }

  rank(winningNumbers, bonusNumber) {
    let rankings = [];

    for (let count = 0; count < this.#totalIssuance; count++) {
      rankings.push(
        Calculator.ranking(winningNumbers[count], bonusNumber[count])
      );
    }

    return rankings;
  }
}

export default LottoController;
